import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

interface FileInputProps {
  onFilesSelected: (files: FileList | null) => void;
  maxFiles?: number;
  accept?: string;
  allowMultiple?: boolean;
}

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const FloatingDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  border: 2px dashed ${props => props.$isDragActive ? '#22d3ee' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 16px;
  padding: 2.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    border-color: #22d3ee;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(
      45deg,
      rgba(34, 211, 238, 0.1),
      rgba(147, 51, 234, 0.1)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const IconWrapper = styled(motion.div)`
  width: 64px;
  height: 64px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 211, 238, 0.1);
  border-radius: 50%;
  color: #22d3ee;
`;

const FileList = styled(motion.div)`
  margin-top: 2rem;
  perspective: 1000px;
`;

const FileItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  margin-bottom: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;

  &:hover {
    transform: scale(1.02) translateY(-2px) rotateX(2deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const RemoveButton = styled(motion.button)`
  background: rgba(239, 68, 68, 0.1);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: rotate(180deg);
  }
`;

const FloatingText = styled.p<{ $variant?: 'primary' | 'secondary' }>`
  color: ${props => props.$variant === 'secondary' ? 'rgba(255, 255, 255, 0.5)' : '#fff'};
  font-size: ${props => props.$variant === 'secondary' ? '0.875rem' : '1rem'};
  margin: 0;
  line-height: 1.5;
  text-align: center;
  font-weight: ${props => props.$variant === 'secondary' ? '400' : '500'};
`;

const ProgressRing = styled(motion.div)<{ $progress: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      #22d3ee ${props => props.$progress}%,
      transparent ${props => props.$progress}%
    );
    mask: radial-gradient(farthest-side, transparent 70%, #000 71%);
  }
`;

const FloatingFileInput: React.FC<FileInputProps> = ({
  onFilesSelected,
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFiles = useCallback((files: File[]) => {
    const validFiles = files.slice(0, maxFiles);
    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);

    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
  }, [maxFiles, onFilesSelected]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const removeFile = (indexToRemove: number) => {
    const newFiles = selectedFiles.filter((_, index) => index !== indexToRemove);
    setSelectedFiles(newFiles);
    const dataTransfer = new DataTransfer();
    newFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <FloatingDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('floating-file-upload')?.click()}
        >
          <IconWrapper
            animate={{
              scale: isDragActive ? 1.1 : 1,
              rotate: isDragActive ? 5 : 0,
            }}
            transition={{ type: "spring" }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
              />
            </svg>
          </IconWrapper>
          <div>
            <FloatingText>
              {isDragActive ? "Release to upload files" : "Drop files here"}
            </FloatingText>
            <FloatingText $variant="secondary">
              or click to browse
            </FloatingText>
          </div>
          <input
            type="file"
            id="floating-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
          {uploadProgress > 0 && uploadProgress < 100 && (
            <ProgressRing 
              $progress={uploadProgress}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
          )}
        </FloatingDropZone>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <FileList
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {selectedFiles.map((file, index) => (
                <FileItem
                  key={`${file.name}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    type: "spring",
                    delay: index * 0.1,
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-cyan-500/10 rounded-full">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5 text-cyan-400"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <FloatingText>
                        {file.name}
                      </FloatingText>
                      <FloatingText $variant="secondary">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </FloatingText>
                    </div>
                  </div>
                  <RemoveButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-4 h-4"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </RemoveButton>
                </FileItem>
              ))}
            </FileList>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default FloatingFileInput; 