
function DarkFileInput({
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

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        <div 
          className={`relative border-2 border-dashed rounded-lg p-8 transition-colors bg-gray-800 ${
            isDragActive 
              ? 'border-blue-400 bg-blue-900/20' 
              : 'border-gray-600 hover:border-gray-500'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('dark-file-upload')?.click()}
        >
          <div className="text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 mx-auto mb-4 text-blue-400"
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
            <p className="text-lg font-medium text-gray-100">
              {isDragActive ? "Release to drop files" : "Drag & drop files here"}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              or click to browse • {allowMultiple ? 'Multiple files allowed' : 'Single file only'}
            </p>
          </div>
          <input
            type="file"
            id="dark-file-upload"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <h3 className="text-sm font-medium text-gray-400 mb-2">
                Selected Files ({selectedFiles.length})
              </h3>
              
              {selectedFiles.map((file, index) => (
                <motion.div
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-xl">
                      {getFileIcon(file)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-100 truncate max-w-xs">
                        {file.name}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">
                          {formatFileSize(file.size)}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="text-xs text-gray-400">
                          {file.type || 'Unknown type'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {uploadProgress[file.name] < 100 ? (
                      <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
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
                      <span className="text-xs text-green-400 font-medium">
                        Uploaded
                      </span>
                    )}
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                      className="p-1 text-gray-400 hover:text-red-400 rounded-full transition-colors"
                      title="Remove file"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              
              <motion.button
                className={`w-full mt-4 py-2.5 rounded-lg font-medium text-sm ${
                  isUploading || Object.values(uploadProgress).some(p => p < 100)
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
                } transition-colors`}
                disabled={isUploading || Object.values(uploadProgress).some(p => p < 100)}
                whileHover={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                  scale: 1.01,
                  boxShadow: '0 4px 12px -2px rgba(59, 130, 246, 0.3)'
                } : {}}
                whileTap={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                  scale: 0.99 
                } : {}}
              >
                {isUploading 
                  ? `Uploading... ${Math.round(Object.values(uploadProgress).reduce((a, b) => a + b, 0) / (selectedFiles?.length || 1))}%` 
                  : 'Upload All Files'}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

render(<DarkFileInput />);
