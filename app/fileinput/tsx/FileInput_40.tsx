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
  font-family: 'Fira Code', monospace;
`;

const TerminalDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  background: #1a1b26;
  border: 1px solid ${props => props.$isDragActive ? '#7aa2f7' : '#24283b'};
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 28px;
    background: #24283b;
    border-bottom: 1px solid #1a1b26;
    border-radius: 8px 8px 0 0;
  }
`;

const WindowControls = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  display: flex;
  gap: 6px;
  z-index: 1;

  &:before, &:after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff5555;
  }

  &:after {
    background: #f1fa8c;
  }
`;

const WindowTitle = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  right: 0;
  text-align: center;
  color: #7aa2f7;
  font-size: 0.875rem;
  z-index: 1;
`;

const Content = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const PromptLine = styled.div`
  display: flex;
  align-items: center;
  color: #a9b1d6;
  margin-bottom: 0.5rem;

  &:before {
    content: '❯';
    color: #7aa2f7;
    margin-right: 0.5rem;
  }
`;

const FileList = styled(motion.div)`
  margin-top: 1rem;
`;

const FileItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: #24283b;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  color: #a9b1d6;
`;

const RemoveButton = styled(motion.button)`
  background: none;
  border: none;
  color: #f7768e;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const TerminalText = styled.span<{ $type?: 'command' | 'output' | 'path' }>`
  color: ${props => {
    switch (props.$type) {
      case 'command':
        return '#7aa2f7';
      case 'path':
        return '#9ece6a';
      case 'output':
        return '#a9b1d6';
      default:
        return '#a9b1d6';
    }
  }};
  font-size: 0.875rem;
`;

const ProgressIndicator = styled.div<{ $progress: number }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #7aa2f7;
  font-size: 0.875rem;
  margin-top: 0.5rem;

  &:before {
    content: '';
    width: 100px;
    height: 4px;
    background: #24283b;
    border-radius: 2px;
  }

  &:after {
    content: '';
    position: absolute;
    width: ${props => props.$progress}px;
    height: 4px;
    background: #7aa2f7;
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`;

const TerminalFileInput: React.FC<FileInputProps> = ({
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
        transition={{ duration: 0.5 }}
      >
        <TerminalDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('terminal-file-upload')?.click()}
        >
          <WindowControls />
          <WindowTitle>terminal -- file-upload</WindowTitle>
          <Content>
            <PromptLine>
              <TerminalText $type="path">~/uploads</TerminalText>
            </PromptLine>
            <PromptLine>
              <TerminalText $type="command">
                {isDragActive ? "Processing..." : "Drop files or click to upload"}
              </TerminalText>
            </PromptLine>
            <input
              type="file"
              id="terminal-file-upload"
              className="hidden"
              multiple={allowMultiple}
              accept={accept}
              onChange={handleFileSelect}
            />
            {uploadProgress > 0 && uploadProgress < 100 && (
              <ProgressIndicator $progress={uploadProgress}>
                {uploadProgress}%
              </ProgressIndicator>
            )}
          </Content>
        </TerminalDropZone>

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
                    <TerminalText $type="command">$</TerminalText>
                    <div>
                      <TerminalText $type="path">
                        {file.name}
                      </TerminalText>
                      <TerminalText $type="output">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </TerminalText>
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

export default TerminalFileInput;