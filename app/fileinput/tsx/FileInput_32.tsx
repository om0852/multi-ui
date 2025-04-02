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
  font-family: 'Space Mono', monospace;
`;

const FuturisticDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: rgba(16, 24, 39, 0.95);
  border: 1px solid #4f46e5;
  border-radius: 0.5rem;
  padding: 2rem;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(79, 70, 229, 0.1),
      transparent
    );
    transform: rotate(45deg);
    animation: scanline 4s linear infinite;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid #4f46e5;
    border-radius: 0.5rem;
    clip-path: ${props => props.$isDragActive ? 
      'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 
      'polygon(0 0, 0 0, 0 100%, 0 100%)'};
    transition: clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover:after {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  @keyframes scanline {
    0% {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    100% {
      transform: translate(50%, 50%) rotate(45deg);
    }
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid #4f46e5;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(79, 70, 229, 0.2),
      transparent
    );
    animation: shine 2s linear infinite;
  }

  @keyframes shine {
    to {
      left: 100%;
    }
  }
`;

const FileList = styled(motion.div)`
  margin-top: 2rem;
`;

const FileItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: rgba(16, 24, 39, 0.95);
  border: 1px solid #4f46e5;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #4f46e5;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const RemoveButton = styled.button`
  background: transparent;
  border: 1px solid #4f46e5;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4f46e5;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(79, 70, 229, 0.2),
      transparent
    );
    animation: shine 2s linear infinite;
  }

  &:hover {
    background: rgba(79, 70, 229, 0.1);
    transform: scale(1.1);
  }
`;

const FuturisticText = styled.p<{ $variant?: 'primary' | 'secondary' }>`
  color: ${props => props.$variant === 'secondary' ? '#a5b4fc' : '#fff'};
  font-size: ${props => props.$variant === 'secondary' ? '0.875rem' : '1rem'};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
`;

const ProgressRing = styled.div<{ $progress: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  border: 1px solid #4f46e5;
  clip-path: ${props => `polygon(0 0, ${props.$progress}% 0, ${props.$progress}% 100%, 0 100%)`};
  transition: clip-path 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

const FuturisticFileInput: React.FC<FileInputProps> = ({
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
        return prev + 2;
      });
    }, 50);
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
        transition={{ duration: 0.5 }}
      >
        <FuturisticDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('futuristic-file-upload')?.click()}
        >
          <IconWrapper>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-indigo-500"
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
          <div className="text-center">
            <FuturisticText>
              {isDragActive ? "INITIATING UPLOAD SEQUENCE" : "UPLOAD FILES"}
            </FuturisticText>
            <FuturisticText $variant="secondary">
              DRAG & DROP OR SELECT
            </FuturisticText>
          </div>
          <input
            type="file"
            id="futuristic-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
          <ProgressRing $progress={uploadProgress} />
        </FuturisticDropZone>

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
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-900 rounded-lg">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 text-indigo-500"
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
                      <FuturisticText>
                        {file.name}
                      </FuturisticText>
                      <FuturisticText $variant="secondary">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </FuturisticText>
                    </div>
                  </div>
                  <RemoveButton
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

export default FuturisticFileInput; 