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
  font-family: 'Courier New', monospace;
`;

const BrutalistDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: ${props => props.$isDragActive ? '#ff0' : '#fff'};
  border: 4px solid #000;
  padding: 2rem;
  cursor: pointer;
  transform: ${props => props.$isDragActive ? 'translate(-4px, -4px)' : 'none'};
  transition: transform 0.1s ease;

  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: -12px;
    bottom: -12px;
    background: #000;
    z-index: -1;
  }

  &:hover {
    transform: translate(-4px, -4px);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-3deg);

  &:hover {
    transform: rotate(3deg);
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
  border: 4px solid #000;
  margin-bottom: 1rem;
  transform: rotate(-1deg);
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(1deg);
  }

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: -8px;
    bottom: -8px;
    background: #000;
    z-index: -1;
  }
`;

const RemoveButton = styled.button`
  background: #ff0;
  border: 4px solid #000;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(3deg);
  cursor: pointer;

  &:hover {
    background: #f00;
    transform: rotate(-3deg);
  }
`;

const BrutalistText = styled.p<{ $size?: string; $rotate?: string }>`
  font-size: ${props => props.$size || '1rem'};
  font-weight: bold;
  transform: rotate(${props => props.$rotate || '0deg'});
  background: ${props => props.$rotate ? '#ff0' : 'transparent'};
  padding: ${props => props.$rotate ? '0.25rem 0.5rem' : '0'};
  display: inline-block;
`;

const BrutalistFileInput: React.FC<FileInputProps> = ({
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
        <BrutalistDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('brutalist-file-upload')?.click()}
        >
          <IconWrapper>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 text-white"
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
          </IconWrapper>
          <div className="text-center">
            <BrutalistText $size="1.25rem" $rotate="-2deg">
              {isDragActive ? "DROP IT!" : "DRAG FILES HERE"}
            </BrutalistText>
            <BrutalistText $size="0.875rem" $rotate="1deg">
              OR CLICK TO BROWSE
            </BrutalistText>
          </div>
          <input
            type="file"
            id="brutalist-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </BrutalistDropZone>

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
                    <div className="p-2 bg-black">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 text-white"
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
                      <BrutalistText>
                        {file.name}
                      </BrutalistText>
                      <BrutalistText $size="0.75rem" $rotate="1deg">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </BrutalistText>
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
                        strokeLinecap="square" 
                        strokeLinejoin="miter" 
                        strokeWidth={2} 
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

export default BrutalistFileInput; 