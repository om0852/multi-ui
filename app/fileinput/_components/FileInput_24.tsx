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
  font-family: 'Courier New', Courier, monospace;
`;

const RetroDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  padding: 2rem;
  transition: all 0.1s ease;
  cursor: pointer;

  ${props => props.$isDragActive && `
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  `}

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }
`;

const RetroIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  border: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

const FileList = styled(motion.div)`
  margin-top: 2rem;
`;

const FileItem = styled(motion.div)`
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.1s ease;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }
`;

const RetroButton = styled.button`
  border: 2px solid #000000;
  background: #ffffff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease;
  box-shadow: 2px 2px 0px #000000;

  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px #000000;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px #000000;
  }
`;

const RetroFileInput: React.FC<FileInputProps> = ({
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
        <RetroDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('retro-file-upload')?.click()}
        >
          <RetroIcon>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="square" 
                strokeLinejoin="miter" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
              />
            </svg>
          </RetroIcon>
          <div className="text-center">
            <p className="text-lg mb-1 font-bold">
              {isDragActive ? "> RELEASE FILES <" : "> DROP FILES HERE <"}
            </p>
            <p className="text-sm">
              [CLICK TO BROWSE]
            </p>
          </div>
          <input
            type="file"
            id="retro-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </RetroDropZone>

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
                    <div className="border-2 border-black p-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="square" 
                          strokeLinejoin="miter" 
                          strokeWidth={2} 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">{file.name}</p>
                      <p className="text-sm">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <RetroButton
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
                        strokeLinecap="square" 
                        strokeLinejoin="miter" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </RetroButton>
                </FileItem>
              ))}
            </FileList>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default RetroFileInput; 