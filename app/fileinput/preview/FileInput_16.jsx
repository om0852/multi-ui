
function FileInput({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
  maxSizeInMB = 10,
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const validateFile = (file) => {
    if (file.size > maxSizeInMB * 1024 * 1024) {
      setError(`File size should not exceed ${maxSizeInMB}MB`);
      return false;
    }
    return true;
  };

  // Simulate upload progress
  const simulateUpload = (files) => {
    setIsUploading(true);
    const newProgress = {};
    
    files.forEach((file, index) => {
      newProgress[file.name] = 0;
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const newValue = Math.min((prev[file.name] || 0) + Math.random() * 15, 100);
          return { ...prev, [file.name]: newValue };
        });
      }, 200 + (index * 100));
      
      // Clear interval when upload is complete
      setTimeout(() => {
        clearInterval(interval);
        if (Object.values(uploadProgress).every(p => p >= 100)) {
          setIsUploading(false);
        }
      }, 2000 + (index * 200));
    });
    
    setUploadProgress(prev => ({ ...prev, ...newProgress }));
  };

  const handleFiles = useCallback((files) => {
    const validFiles = files
      .slice(0, maxFiles)
      .filter(validateFile);

    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
    
    // Simulate upload for the demo
    simulateUpload(validFiles);
  }, [maxFiles, maxSizeInMB, onFilesSelected]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
    setError(null);
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
    
    // Remove progress
    const fileName = selectedFiles[indexToRemove].name;
    setUploadProgress(prev => {
      const newProgress = {...prev};
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith('image/')) return '🖼️';
    if (file.type.includes('pdf')) return '📄';
    if (file.type.includes('zip') || file.type.includes('compressed')) return '🗜️';
    if (file.type.includes('audio')) return '🎵';
    if (file.type.includes('video')) return '🎬';
    if (file.type.includes('text')) return '📝';
    if (file.type.includes('spreadsheet')) return '📊';
    return '📁';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        <div 
          className={`relative border-2 border-dashed rounded-xl p-8 transition-colors ${
            error 
              ? 'border-red-500 bg-red-50' 
              : isDragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 bg-white hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.div
              className="p-4 rounded-full bg-blue-50"
              animate={{ scale: isDragActive ? 1.1 : 1 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8 text-blue-500"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                />
              </svg>
            </motion.div>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">
                {isDragActive ? "Drop files here" : "Drag & Drop files here"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse • Max {maxSizeInMB}MB per file • {allowMultiple ? 'Multiple files allowed' : 'Single file only'}
              </p>
            </div>
            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}
          </div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </div>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <motion.div
              className="mt-4 flex flex-col gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {selectedFiles.map((file, index) => (
                <motion.div
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-xl">
                      {getFileIcon(file)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate max-w-xs">
                        {file.name}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {formatFileSize(file.size)}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs text-gray-500">
                          {file.type || 'Unknown type'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {uploadProgress[file.name] < 100 ? (
                      <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${uploadProgress[file.name] || 0}%`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    ) : (
                      <span className="text-xs text-green-500 font-medium">
                        Uploaded
                      </span>
                    )}
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      title="Remove file"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
              
              {selectedFiles.length >= maxFiles && (
                <div className="text-center py-2">
                  <p className="text-xs text-gray-500">
                    Maximum {maxFiles} file{maxFiles !== 1 ? 's' : ''} reached
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {selectedFiles.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} selected •{' '}
              {formatFileSize(selectedFiles.reduce((acc, file) => acc + file.size, 0))}
            </div>
            <motion.button
              className={`px-5 py-2 rounded-lg font-medium text-sm ${
                isUploading || Object.values(uploadProgress).some(p => p < 100)
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
              } transition-colors`}
              disabled={isUploading || Object.values(uploadProgress).some(p => p < 100)}
              whileHover={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                scale: 1.03,
                boxShadow: '0 2px 10px -3px rgba(59, 130, 246, 0.5)'
              } : {}}
              whileTap={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { scale: 0.98 } : {}}
            >
              {isUploading 
                ? `Uploading... ${Math.round(Object.values(uploadProgress).reduce((a, b) => a + b, 0) / (selectedFiles?.length || 1))}%` 
                : 'Upload Files'}
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

render(<FileInput />);
