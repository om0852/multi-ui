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

const GradientDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  border-radius: 16px;
  padding: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: gradientShift 10s ease infinite;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  }
`;

const InnerZone = styled.div<{ $isDragActive: boolean }>`
  background: rgba(17, 24, 39, 0.95);
  border-radius: 14px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  ${props => props.$isDragActive && `
    background: rgba(17, 24, 39, 0.8);
    transform: scale(0.98);
  `}
`;

const IconWrapper = styled(motion.div)`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
  border-radius: 20px;
  color: #fff;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 0.2;
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

const FileList = styled(motion.div)`
  width: 100%;
  margin-top: 2rem;
`;

const FileItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateX(4px);
  }
`;

const RemoveButton = styled(motion.button)`
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.2));
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.3));
    transform: rotate(90deg);
  }
`;

const GradientText = styled.p<{ $variant?: 'primary' | 'secondary' }>`
  color: ${props => props.$variant === 'secondary' ? 'rgba(255, 255, 255, 0.6)' : '#fff'};
  font-size: ${props => props.$variant === 'secondary' ? '0.875rem' : '1rem'};
  margin: 0;
  line-height: 1.5;
  text-align: center;
  font-weight: ${props => props.$variant === 'secondary' ? '400' : '500'};
  background: ${props => props.$variant === 'primary' ? 'linear-gradient(to right, #6366f1, #8b5cf6)' : 'none'};
  -webkit-background-clip: ${props => props.$variant === 'primary' ? 'text' : 'none'};
  -webkit-text-fill-color: ${props => props.$variant === 'primary' ? 'transparent' : 'inherit'};
`;

const ProgressBar = styled(motion.div)<{ $progress: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: ${props => props.$progress}%;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  border-radius: 0 1px 1px 0;
`;

const GradientFileInput: React.FC<FileInputProps> = ({
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
        <GradientDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('gradient-file-upload')?.click()}
        >
          <InnerZone $isDragActive={isDragActive}>
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
              <GradientText $variant="primary">
                {isDragActive ? "Release to upload files" : "Drop files here"}
              </GradientText>
              <GradientText $variant="secondary">
                or click to browse
              </GradientText>
            </div>
            <input
              type="file"
              id="gradient-file-upload"
              className="hidden"
              multiple={allowMultiple}
              accept={accept}
              onChange={handleFileSelect}
            />
            {uploadProgress > 0 && uploadProgress < 100 && (
              <ProgressBar 
                $progress={uploadProgress}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </InnerZone>
        </GradientDropZone>

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
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5 text-indigo-400"
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
                      <GradientText>
                        {file.name}
                      </GradientText>
                      <GradientText $variant="secondary">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </GradientText>
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

export default GradientFileInput; 