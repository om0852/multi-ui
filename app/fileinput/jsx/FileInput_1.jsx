import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropArea: {
    border: '2px dashed #d1d5db',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    transition: 'background-color 0.2s ease-in-out',
  },
  dropAreaActive: {
    backgroundColor: '#f3f4f6',
  },
  text: {
    textAlign: 'center',
    color: '#4b5563',
  },
  fileList: {
    marginTop: '1rem',
    fontSize: '0.875rem',
    color: '#6b7280',
  },
});

const FileUpload = ({
  onFilesSelected,
  uploadText = 'Drag and drop files here or click to select',
  dragActiveText = 'Release to drop the files',
  className = '',
  maxFiles = Infinity,
  accept = '*',
  allowMultiple = true,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const classes = useStyles();

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
    const filteredFiles = files.slice(0, maxFiles);

    setSelectedFiles(filteredFiles);
    onFilesSelected(new DataTransfer().files);
  };

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const filteredFiles = files.slice(0, maxFiles);

      setSelectedFiles(filteredFiles);
      onFilesSelected(new DataTransfer().files);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`${classes.container} ${className}`}
    >
      <div
        className={`${classes.dropArea} ${isDragActive ? classes.dropAreaActive : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <p className={classes.text}>
          {isDragActive ? dragActiveText : uploadText}
        </p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple={allowMultiple}
          accept={accept}
          onChange={handleFileSelect}
        />
        {selectedFiles.length > 0 && (
          <div className={classes.fileList}>
            {selectedFiles.map((file, index) => (
              <p key={index}>{file.name}</p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FileUpload;

// Usage Example
// import FileUpload from './FileUpload';

// const App = () => {
//   const handleFiles = (files) => {
//     if (files) {
//       Array.from(files).forEach((file) => {
//         console.log(file.name);
//       });
//     }
//   };

//   return (
//     <div className="p-6">
//       <FileUpload 
//         onFilesSelected={handleFiles} 
//         maxFiles={5} 
//         accept="image/*" 
//         allowMultiple={true}
//       />
//     </div>
//   );
// };

// export default App;
