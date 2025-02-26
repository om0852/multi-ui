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
`;

const NeumorphicDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: #e0e5ec;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${props => props.$isDragActive ? 
    'inset 8px 8px 15px #a3b1c6, inset -8px -8px 15px #ffffff' : 
    '8px 8px 15px #a3b1c6, -8px -8px 15px #ffffff'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: ${props => props.$isDragActive ?
      'inset 10px 10px 20px #a3b1c6, inset -10px -10px 20px #ffffff' :
      '10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff'};
  }
`;

const IconWrapper = styled.div<{ $isDragActive: boolean }>`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e5ec;
  box-shadow: ${props => props.$isDragActive ?
    'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff' :
    '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'};
  transition: all 0.3s ease;
`;

const FileList = styled(motion.div)`
  margin-top: 2rem;
`;

const FileItem = styled(motion.div)`
  background: #e0e5ec;
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 6px 6px 10px #a3b1c6, -6px -6px 10px #ffffff;
  }
`;

const RemoveButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e5ec;
  box-shadow: 4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff;
  }
`;

const NeumorphicFileInput: React.FC<FileInputProps> = ({
  onFilesSelected,
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFiles = useCallback((files: File[]) => {
    const validFiles = files.slice(0, maxFiles);
    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
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
      >
        <NeumorphicDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('neumorphic-file-upload')?.click()}
        >
          <IconWrapper $isDragActive={isDragActive}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-gray-600"
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
            <p className="text-lg font-medium text-gray-700 mb-1">
              {isDragActive ? "Release to Upload" : "Drop Files Here"}
            </p>
            <p className="text-sm text-gray-500">
              or click to browse
            </p>
          </div>
          <input
            type="file"
            id="neumorphic-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </NeumorphicDropZone>

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
                    <div className="p-2 bg-white bg-opacity-50 rounded-lg">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 text-gray-600"
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
                      <p className="text-sm font-medium text-gray-700">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
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
                      className="w-4 h-4 text-gray-600"
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

export default NeumorphicFileInput; 