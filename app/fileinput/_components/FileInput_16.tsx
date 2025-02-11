import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import clsx from 'clsx';

interface FileInputProps {
  onFilesSelected: (files: FileList | null) => void;
  maxFiles?: number;
  accept?: string;
  allowMultiple?: boolean;
  maxSizeInMB?: number;
}

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
`;

const DropZone = styled.div<{ $isDragActive: boolean; $hasError: boolean }>`
  position: relative;
  border: 2px dashed;
  border-color: ${props => 
    props.$hasError ? '#EF4444' : 
    props.$isDragActive ? '#3B82F6' : '#D1D5DB'};
  border-radius: 0.75rem;
  padding: 2rem;
  transition: all 0.2s ease-in-out;
  background-color: ${props => 
    props.$hasError ? '#FEF2F2' : 
    props.$isDragActive ? '#EFF6FF' : '#FFFFFF'};
  
  &:hover {
    border-color: ${props => props.$hasError ? '#EF4444' : '#9CA3AF'};
  }
`;

const IconWrapper = styled(motion.div)`
  padding: 1rem;
  border-radius: 9999px;
  background-color: #EFF6FF;
`;

const FileList = styled(motion.div)`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FileItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #E5E7EB;
`;

const FileInput: React.FC<FileInputProps> = ({
  onFilesSelected,
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
  maxSizeInMB = 10,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): boolean => {
    if (file.size > maxSizeInMB * 1024 * 1024) {
      setError(`File size should not exceed ${maxSizeInMB}MB`);
      return false;
    }
    return true;
  };

  const handleFiles = useCallback((files: File[]) => {
    const validFiles = files
      .slice(0, maxFiles)
      .filter(validateFile);

    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  }, [maxFiles, maxSizeInMB, onFilesSelected]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
    setError(null);
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
        className="w-full"
      >
        <DropZone
          $isDragActive={isDragActive}
          $hasError={!!error}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <IconWrapper
              animate={{ scale: isDragActive ? 1.1 : 1 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8 text-blue-500"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                />
              </svg>
            </IconWrapper>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">
                {isDragActive ? "Drop files here" : "Drag & Drop files here"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse
              </p>
            </div>
            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}
          </div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </DropZone>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <FileList
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {selectedFiles.map((file, index) => (
                <FileItem
                  key={`${file.name}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <div className="flex items-center space-x-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-5 h-5 text-blue-500"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-5 h-5 text-gray-500"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                </FileItem>
              ))}
            </FileList>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default FileInput; 