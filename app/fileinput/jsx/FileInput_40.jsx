import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  font-family: 'Fira Code', monospace;
`;

const TerminalDropZone = styled.div`
  position: relative;
  background: #1a1b26;
  border: 1px solid #24283b;
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

const FileList = styled(motion.div)`
  margin-top: 1.5rem;
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
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const TerminalFileInput = ({ onFilesSelected, maxFiles = Infinity, accept = "*", allowMultiple = true }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFiles = useCallback((files) => {
    const validFiles = files.slice(0, maxFiles);
    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  }, [maxFiles, onFilesSelected]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    handleFiles(Array.from(e.dataTransfer.files));
  };

  const handleFileSelect = (e) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (indexToRemove) => {
    const newFiles = selectedFiles.filter((_, index) => index !== indexToRemove);
    setSelectedFiles(newFiles);
    const dataTransfer = new DataTransfer();
    newFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  };

  return (
    <Container>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <TerminalDropZone
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('terminal-file-upload')?.click()}
        >
          <p>{isDragActive ? "Processing..." : "Drop files or click to upload"}</p>
        </TerminalDropZone>
        <input
          type="file"
          id="terminal-file-upload"
          style={{ display: 'none' }}
          multiple={allowMultiple}
          accept={accept}
          onChange={handleFileSelect}
        />

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <FileList initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {selectedFiles.map((file, index) => (
                <FileItem key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}>
                  <span>{file.name}</span>
                  <RemoveButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => removeFile(index)}>
                    ✖
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
