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

const AnimatedDropZone = styled(motion.div)<{ $isDragActive: boolean }>`
  position: relative;
  background: #f8fafc;
  border-radius: 24px;
  padding: 3rem;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(59, 130, 246, 0.1),
      rgba(147, 51, 234, 0.1)
    );
    opacity: ${props => props.$isDragActive ? 1 : 0};
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(59, 130, 246, 0.1) 0%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover:after {
    opacity: 1;
  }
`;

const IconContainer = styled(motion.div)`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
`;

const IconBackground = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #3b82f6, #9333ea);
  border-radius: 24px;
  opacity: 0.1;
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
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
  background: #fff;
  border-radius: 16px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transform-origin: center;
`;

const RemoveButton = styled(motion.button)`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
  cursor: pointer;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(239, 68, 68, 0.1);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease;
  }

  &:hover:before {
    transform: scale(1);
  }
`;

const AnimatedText = styled(motion.p)<{ $variant?: 'primary' | 'secondary' }>`
  color: ${props => props.$variant === 'secondary' ? '#64748b' : '#0f172a'};
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
      #3b82f6 ${props => props.$progress}%,
      transparent ${props => props.$progress}%
    );
    mask: radial-gradient(farthest-side, transparent 70%, #000 71%);
  }
`;

const AnimatedFileInput: React.FC<FileInputProps> = ({
  onFilesSelected,
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', `${x}%`);
    e.currentTarget.style.setProperty('--y', `${y}%`);
    setMousePosition({ x, y });
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <AnimatedDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('animated-file-upload')?.click()}
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <IconContainer>
            <IconBackground 
              animate={{
                scale: isDragActive ? 1.2 : 1,
                rotate: isDragActive ? 180 : 0,
              }}
              transition={{ type: "spring" }}
            />
            <IconWrapper
              animate={{
                scale: isDragActive ? 1.1 : 1,
                rotate: isDragActive ? -180 : 0,
              }}
              transition={{ type: "spring" }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-10 h-10"
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
          </IconContainer>
          <div>
            <AnimatedText
              animate={{
                scale: isDragActive ? 1.1 : 1,
                y: isDragActive ? -5 : 0,
              }}
              transition={{ type: "spring" }}
            >
              {isDragActive ? "Release to upload files" : "Drop files here"}
            </AnimatedText>
            <AnimatedText
              $variant="secondary"
              animate={{
                opacity: isDragActive ? 0.5 : 1,
                y: isDragActive ? 5 : 0,
              }}
              transition={{ type: "spring" }}
            >
              or click to browse
            </AnimatedText>
          </div>
          <input
            type="file"
            id="animated-file-upload"
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
        </AnimatedDropZone>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <FileList
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {selectedFiles.map((file, index) => (
                <FileItem
                  key={`${file.name}-${index}`}
                  initial={{ opacity: 0, x: -50, rotateX: -15 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  exit={{ opacity: 0, x: 50, rotateX: 15 }}
                  transition={{
                    type: "spring",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 5,
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="p-3 bg-blue-50 rounded-2xl"
                      whileHover={{ rotate: 15 }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 text-blue-500"
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
                    </motion.div>
                    <div>
                      <AnimatedText>
                        {file.name}
                      </AnimatedText>
                      <AnimatedText $variant="secondary">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </AnimatedText>
                    </div>
                  </div>
                  <RemoveButton
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-5 h-5"
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

export default AnimatedFileInput; 