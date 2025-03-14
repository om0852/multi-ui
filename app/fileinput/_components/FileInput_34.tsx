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

const MinimalistDarkDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: #1a1a1a;
  border: 1px solid ${props => props.$isDragActive ? '#6366f1' : '#333'};
  border-radius: 4px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #6366f1;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    opacity: ${props => props.$isDragActive ? 0.1 : 0};
    transition: opacity 0.2s ease;
  }

  &:hover:after {
    opacity: 0.05;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const FileList = styled(motion.div)`
  margin-top: 1.5rem;
`;

const FileItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #6366f1;
    transform: translateX(4px);
  }
`;

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    transform: rotate(90deg);
  }
`;

const MinimalistText = styled.p<{ $variant?: 'primary' | 'secondary' }>`
  color: ${props => props.$variant === 'secondary' ? '#666' : '#fff'};
  font-size: ${props => props.$variant === 'secondary' ? '0.875rem' : '1rem'};
  margin: 0;
  line-height: 1.5;
`;

const ProgressBar = styled.div<{ $progress: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: ${props => props.$progress}%;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  transition: width 0.3s ease;
`;

const MinimalistDarkFileInput: React.FC<FileInputProps> = ({
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <MinimalistDarkDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('minimalist-dark-file-upload')?.click()}
        >
          <IconWrapper>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 text-indigo-400"
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
            <MinimalistText>
              {isDragActive ? "Release to upload" : "Drop files here"}
            </MinimalistText>
            <MinimalistText $variant="secondary">
              or click to browse
            </MinimalistText>
          </div>
          <input
            type="file"
            id="minimalist-dark-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
          {uploadProgress > 0 && uploadProgress < 100 && (
            <ProgressBar $progress={uploadProgress} />
          )}
        </MinimalistDarkDropZone>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <FileList
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {selectedFiles.map((file, index) => (
                <FileItem
                  key={`${file.name}-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-indigo-900/30 rounded">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-4 h-4 text-indigo-400"
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
                      <MinimalistText>
                        {file.name}
                      </MinimalistText>
                      <MinimalistText $variant="secondary">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </MinimalistText>
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
                      className="w-4 h-4 text-red-400"
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

export default MinimalistDarkFileInput; 