import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  font-family: 'Fira Code', 'Courier New', monospace;
`;

const Terminal = styled.div`
  background: #1a1a1a;
  color: #00ff00;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px #00ff00;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 24px;
    background: #333333;
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 1px solid #00ff00;
  }

  &::after {
    content: '● ● ●';
    position: absolute;
    top: 4px;
    left: 12px;
    color: #00ff00;
    font-size: 12px;
  }
`;

const TerminalContent = styled.div`
  margin-top: 0.5rem;
`;

const Prompt = styled.div`
  padding: 1rem;
  border: 1px dashed #00ff00;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 255, 0, 0.1);
  }
`;

const FileList = styled(motion.div)`
  margin-top: 1rem;
`;

const FileItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid #00ff00;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;

  &:hover {
    background: rgba(0, 255, 0, 0.1);
  }
`;

const TerminalFileInput = ({
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
        <Terminal>
          <TerminalContent>
            <div className="mb-4">
              <span className="text-green-400">$</span> upload-files
            </div>
            <Prompt onClick={() => document.getElementById('terminal-file-upload')?.click()}>
              <div className="text-center">
                <p className="mb-2">[ DRAG AND DROP FILES HERE ]</p>
                <p className="text-sm opacity-80">$ click-to-browse --files</p>
              </div>
              <input
                type="file"
                id="terminal-file-upload"
                className="hidden"
                multiple={allowMultiple}
                accept={accept}
                onChange={handleFileSelect}
              />
            </Prompt>
            <AnimatePresence>
              {selectedFiles.length > 0 && (
                <FileList initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="mb-2">
                    <span className="text-green-400">$</span> ls -la uploads/
                  </div>
                  {selectedFiles.map((file, index) => (
                    <FileItem key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                      <span>{file.name}</span>
                    </FileItem>
                  ))}
                </FileList>
              )}
            </AnimatePresence>
          </TerminalContent>
        </Terminal>
      </motion.div>
    </Container>
  );
};

export default TerminalFileInput;
