import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
`;

const DropZone = styled.div`
  position: relative;
  border: 2px dashed #4B5563;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: #1F2937;
  transition: all 0.2s ease-in-out;
  color: #F3F4F6;
  &:hover {
    border-color: #9CA3AF;
  }
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
  background-color: #374151;
  border-radius: 0.375rem;
  color: #F3F4F6;
`;

const DarkFileInput = ({ onFilesSelected, maxFiles = Infinity, accept = "*", allowMultiple = true }) => {
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
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
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
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <DropZone
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('dark-file-upload')?.click()}
        >
          <div className="text-center">
            <p className="text-lg font-medium">{isDragActive ? "Release to drop" : "Drop files here"}</p>
            <p className="text-sm text-gray-400 mt-1">or click to select</p>
          </div>
          <input
            type="file"
            id="dark-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </DropZone>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <FileList initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              {selectedFiles.map((file, index) => (
                <FileItem key={`${file.name}-${index}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <span className="text-sm">{file.name}</span>
                  <button onClick={(e) => { e.stopPropagation(); removeFile(index); }} className="p-1 hover:bg-gray-600 rounded-full transition-colors">×</button>
                </FileItem>
              ))}
            </FileList>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default DarkFileInput;
