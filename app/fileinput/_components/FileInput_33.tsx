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
  font-family: 'Indie Flower', cursive;
`;

const HandwrittenDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: #fff;
  border: 2px solid #2d3748;
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  filter: url('#handdrawn');
  transition: transform 0.2s ease;

  ${props => props.$isDragActive && `
    background: #ebf8ff;
    transform: scale(1.02);
  `}

  &:hover {
    transform: scale(1.02);
  }

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border: 2px solid #2d3748;
    border-radius: 16px;
    z-index: -1;
    filter: url('#handdrawn');
  }
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebf8ff;
  border: 2px solid #2d3748;
  border-radius: 50%;
  filter: url('#handdrawn');
  transform: rotate(-3deg);
  transition: transform 0.2s ease;

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
  border: 2px solid #2d3748;
  border-radius: 8px;
  margin-bottom: 1rem;
  filter: url('#handdrawn');
  transform: rotate(-1deg);
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(1deg);
  }
`;

const RemoveButton = styled.button`
  background: #fed7d7;
  border: 2px solid #2d3748;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: url('#handdrawn');
  transform: rotate(3deg);
  transition: all 0.2s ease;

  &:hover {
    background: #feb2b2;
    transform: rotate(-3deg);
  }
`;

const HandwrittenText = styled.p<{ $size?: string; $color?: string }>`
  font-size: ${props => props.$size || '1rem'};
  color: ${props => props.$color || '#2d3748'};
  margin: 0;
  line-height: 1.4;
`;

const Note = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
  background: #fefcbf;
  padding: 0.5rem;
  border: 2px solid #2d3748;
  border-radius: 4px;
  transform: rotate(3deg);
  filter: url('#handdrawn');
  font-size: 0.75rem;
  z-index: 10;
`;

const HandwrittenFileInput: React.FC<FileInputProps> = ({
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
      <svg width="0" height="0">
        <filter id="handdrawn">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <HandwrittenDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('handwritten-file-upload')?.click()}
        >
          {isDragActive && (
            <Note>
              Drop it here! ✨
            </Note>
          )}
          <IconWrapper>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 text-blue-600"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
              />
            </svg>
          </IconWrapper>
          <div className="text-center">
            <HandwrittenText $size="1.5rem">
              {isDragActive ? "Almost there..." : "Drop your files here"}
            </HandwrittenText>
            <HandwrittenText $size="1.125rem" $color="#4a5568">
              or click to browse
            </HandwrittenText>
          </div>
          <input
            type="file"
            id="handwritten-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </HandwrittenDropZone>

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
                    <div className="p-2 bg-blue-100 rounded-full">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 text-blue-600"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <HandwrittenText $size="1.125rem">
                        {file.name}
                      </HandwrittenText>
                      <HandwrittenText $size="0.875rem" $color="#4a5568">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </HandwrittenText>
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
                      className="w-4 h-4 text-red-600"
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

export default HandwrittenFileInput; 