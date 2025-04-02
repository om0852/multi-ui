import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
`;

const RetroDropZone = styled.div`
  position: relative;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  padding: 2rem;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }
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

const RetroFileInput = ({
  onFilesSelected,
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFiles = useCallback((files) => {
    const validFiles = files.slice(0, maxFiles);
    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  }, [maxFiles, onFilesSelected]);

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  return (
    <Container>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <RetroDropZone onClick={() => document.getElementById('retro-file-upload')?.click()}>
          <p className="text-lg mb-1 font-bold">{"> DROP FILES HERE <"}</p>
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
            <FileList initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              {selectedFiles.map((file, index) => (
                <FileItem key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <span>{file.name}</span>
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
