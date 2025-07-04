
function FloatingFileInput({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const simulateUpload = (files) => {
    setIsUploading(true);
    const newProgress = {};
    
    files.forEach((file, index) => {
      newProgress[file.name] = 0;
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const newValue = Math.min((prev[file.name] || 0) + Math.random() * 15, 100);
          
          // Check if all uploads are complete
          if (newValue >= 100) {
            const allComplete = Object.values({
              ...prev,
              [file.name]: 100
            }).every(p => p >= 100);
            
            if (allComplete) {
              setIsUploading(false);
            }
          }
          
          return { ...prev, [file.name]: newValue };
        });
      }, 200 + (index * 100));
      
      // Clear interval when upload is complete
      setTimeout(() => {
        clearInterval(interval);
      }, 3000 + (index * 200));
    });
    
    setUploadProgress(prev => ({ ...prev, ...newProgress }));
  };

  const handleFiles = useCallback((files) => {
    const validFiles = files.slice(0, maxFiles);
    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
    
    // Simulate upload for the demo
    simulateUpload(validFiles);
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

  const getProgressGradient = (progress) => {
    if (progress < 30) return 'from-blue-400 to-blue-500';
    if (progress < 70) return 'from-blue-500 to-indigo-500';
    return 'from-indigo-500 to-purple-500';
  };

  const getOverallProgress = () => {
    if (selectedFiles.length === 0) return 0;
    const total = Object.values(uploadProgress).reduce((a, b) => a + b, 0);
    return Math.round(total / selectedFiles.length);
  };

  const overallProgress = getOverallProgress();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div 
            className={`relative bg-white/80 backdrop-blur-md rounded-xl p-8 transition-all duration-300 ${
              isDragActive 
                ? 'shadow-xl -translate-y-1 border-2 border-blue-400' 
                : 'shadow-lg border border-gray-200 hover:border-blue-200'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('floating-file-upload')?.click()}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-50 flex items-center justify-center">
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
                    strokeWidth={1.5} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                  />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-800">
                {isDragActive ? "Release to upload" : "Drop files here"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse your files
              </p>
              
              {selectedFiles.length > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>
                      {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} selected
                    </span>
                    <span>{overallProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(overallProgress)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${overallProgress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              )}
            </div>
            
            <input
              type="file"
              id="floating-file-upload"
              className="hidden"
              multiple={allowMultiple}
              accept={accept}
              onChange={handleFileSelect}
            />
          </div>

          <AnimatePresence>
            {selectedFiles.length > 0 && (
              <motion.div
                className="mt-6 space-y-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.2 }}
              >
                {selectedFiles.map((file, index) => {
                  const progress = uploadProgress[file.name] || 0;
                  const gradient = getProgressGradient(progress);
                  
                  return (
                    <motion.div
                      key={`${file.name}-${index}`}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-lg p-3 pr-10 border border-gray-200 hover:border-blue-200 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 mr-3">
                          {getFileIcon(file)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {file.name}
                          </p>
                          <div className="flex items-center justify-between mt-0.5">
                            <span className="text-xs text-gray-500">
                              {formatFileSize(file.size)}
                            </span>
                            <span className="text-xs font-medium text-blue-600">
                              {progress < 100 ? `${Math.round(progress)}%` : 'Done'}
                            </span>
                          </div>
                          
                          {progress < 100 && (
                            <div className="w-full bg-gray-100 rounded-full h-1 mt-1.5 overflow-hidden">
                              <motion.div 
                                className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(index);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
                        title="Remove file"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      {progress >= 100 && (
                        <motion.div 
                          className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                          initial={{ opacity: 0 }}
                        >
                          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            Ready to submit
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
                
                {selectedFiles.length > 0 && (
                  <motion.div 
                    className="pt-4 mt-4 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} • {formatFileSize(
                          selectedFiles.reduce((acc, file) => acc + file.size, 0)
                        )}
                      </div>
                      <motion.button
                        className={`px-4 py-2 rounded-lg font-medium text-sm ${
                          isUploading || overallProgress < 100
                            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
                        } transition-all`}
                        disabled={isUploading || overallProgress < 100}
                        whileHover={!isUploading && overallProgress >= 100 ? { 
                          scale: 1.02,
                          boxShadow: '0 4px 12px -2px rgba(59, 130, 246, 0.3)'
                        } : {}}
                        whileTap={!isUploading && overallProgress >= 100 ? { 
                          scale: 0.98 
                        } : {}}
                      >
                        {isUploading 
                          ? `Uploading... (${overallProgress}%)` 
                          : 'Submit Files'}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

render(<FloatingFileInput />);
