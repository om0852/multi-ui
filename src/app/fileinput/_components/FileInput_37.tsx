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

const BorderedDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  border: 2px solid ${props => props.$isDragActive ? '#6366f1' : '#e5e7eb'};
  border-radius: 12px;
  padding: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fff;

  &:hover {
    border-color: #6366f1;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
  }

  &:before {
    content: '';
    position: absolute;
    inset: -4px;
    border: 2px solid ${props => props.$isDragActive ? '#6366f1' : 'transparent'};
    border-radius: 14px;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    inset: -6px;
    border: 2px solid ${props => props.$isDragActive ? '#818cf8' : 'transparent'};
    border-radius: 16px;
    transition: all 0.3s ease;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const IconWrapper = styled(motion.div)`
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  color: #6366f1;
  transition: all 0.3s ease;

  &:hover {
    border-color: #6366f1;
    transform: scale(1.05);
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
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #6366f1;
    transform: translateX(4px);
  }
`;

const RemoveButton = styled(motion.button)`
  background: #fff;
  border: 1px solid #e5e7eb;
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
    border-color: #ef4444;
    background: #fef2f2;
    transform: rotate(90deg);
  }
`;

const BorderedText = styled.p<{ $variant?: 'primary' | 'secondary' }>`
  color: ${props => props.$variant === 'secondary' ? '#6b7280' : '#111827'};
  font-size: ${props => props.$variant === 'secondary' ? '0.875rem' : '1rem'};
  margin: 0;
  line-height: 1.5;
  text-align: center;
  font-weight: ${props => props.$variant === 'secondary' ? '400' : '500'};
`;

const ProgressBar = styled(motion.div)<{ $progress: number }>`
  position: absolute;
  bottom: -2px;
  left: -2px;
  right: -2px;
  height: 2px;
  background: linear-gradient(to right, #6366f1, #818cf8);
  border-radius: 0 0 12px 12px;
  transform-origin: left;
  transform: scaleX(${props => props.$progress / 100});
`;

const BorderedFileInput: React.FC<FileInputProps> = ({
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
        <BorderedDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('bordered-file-upload')?.click()}
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
            <BorderedText>
              {isDragActive ? "Release to upload files" : "Drop files here"}
            </BorderedText>
            <BorderedText $variant="secondary">
              or click to browse
            </BorderedText>
          </div>
          <input
            type="file"
            id="bordered-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
          {uploadProgress > 0 && uploadProgress < 100 && (
            <ProgressBar 
              $progress={uploadProgress}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: uploadProgress / 100 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </BorderedDropZone>

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
                    <div className="p-2 border border-indigo-100 bg-indigo-50 rounded-lg">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5 text-indigo-500"
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
                      <BorderedText>
                        {file.name}
                      </BorderedText>
                      <BorderedText $variant="secondary">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </BorderedText>
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

export default BorderedFileInput; 