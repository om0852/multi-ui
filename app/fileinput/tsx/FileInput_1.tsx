import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FileUploadProps {
  onFilesSelected: (files: FileList | null) => void;
  uploadText?: string;
  dragActiveText?: string;
  className?: string;
  dropAreaClassName?: string;
  maxFiles?: number;
  accept?: string;
  allowMultiple?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Drag and drop files here or click to select",
  dragActiveText = "Release to drop the files",
  className = "",
  dropAreaClassName = "border-2 border-dashed border-gray-300 p-4 rounded-lg",
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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
    const filteredFiles = files.slice(0, maxFiles);

    setSelectedFiles(filteredFiles);
    onFilesSelected(new DataTransfer().files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      className={clsx("flex flex-col items-center justify-center", className)}
    >
      <div
        className={clsx(
          dropAreaClassName,
          isDragActive ? "bg-gray-100" : "bg-white"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <p className="text-center text-gray-600">
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
          <div className="mt-4 text-sm text-gray-500">
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

// const App: React.FC = () => {
//   const handleFiles = (files: FileList | null) => {
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
