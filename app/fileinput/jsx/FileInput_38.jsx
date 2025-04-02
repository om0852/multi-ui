import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const CircularDropZone = styled.div`
  position: relative;
  background: transparent;
  border: 2px dashed #e5e7eb;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  padding: 1rem;

  &:hover {
    border-color: #6366f1;
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
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
  word-break: break-word;

  &:hover {
    border-color: #6366f1;
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

const CircularFileInput = ({ onFilesSelected, maxFiles = Infinity, accept = "*", allowMultiple = true }) => {
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
        <CircularDropZone
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('circular-file-upload')?.click()}
        >
          <p>{isDragActive ? "Release to upload" : "Drop or click to select files"}</p>
        </CircularDropZone>
        <input
          type="file"
          id="circular-file-upload"
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

export default CircularFileInput;
