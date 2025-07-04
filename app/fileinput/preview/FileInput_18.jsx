
function GradientFileInput({
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

  const getGradient = () => {
    const gradients = [
      'from-indigo-500 to-pink-500',
      'from-purple-500 to-blue-500',
      'from-green-500 to-teal-400',
      'from-yellow-400 to-orange-500',
      'from-red-500 to-pink-500',
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  const ProgressBar = ({ progress, className = '' }) => (
    <div className={`w-full h-1.5 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <motion.div 
        className={`h-full bg-gradient-to-r ${getGradient()}`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div 
            className={`relative border-3 rounded-xl p-8 transition-all ${
              isDragActive 
                ? 'border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-origin-border scale-[1.02] shadow-lg'
                : 'border-transparent bg-gradient-to-r from-indigo-500 to-pink-500 bg-origin-border'
            }`}
            style={{
              backgroundClip: 'padding-box, border-box',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #6366F1, #EC4899)'
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('gradient-file-upload')?.click()}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-8 h-8 text-indigo-500"
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
              </div>
              <p className={`text-xl font-semibold ${
                isDragActive ? 'text-white' : 'text-gray-800'
              }`}>
                {isDragActive ? "Release to upload" : "Drop your files here"}
              </p>
              <p className={`text-sm mt-2 ${
                isDragActive ? 'text-indigo-100' : 'text-gray-500'
              }`}>
                or click to browse from your computer
              </p>
              
              {isUploading && selectedFiles.length > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Uploading...</span>
                    <span>
                      {Math.round(
                        Object.values(uploadProgress).reduce((a, b) => a + b, 0) / 
                        (selectedFiles.length || 1)
                      )}%
                    </span>
                  </div>
                  <ProgressBar 
                    progress={
                      Object.values(uploadProgress).reduce((a, b) => a + b, 0) / 
                      (selectedFiles.length || 1)
                    } 
                  />
                </div>
              )}
            </div>
            
            <input
              type="file"
              id="gradient-file-upload"
              className="hidden"
              multiple={allowMultiple}
              accept={accept}
              onChange={handleFileSelect}
            />
          </div>

          <AnimatePresence>
            {selectedFiles.length > 0 && (
              <motion.div
                className="mt-6 space-y-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <h3 className="text-sm font-medium text-gray-700">
                  Selected Files ({selectedFiles.length})
                </h3>
                
                <div className="space-y-2">
                  {selectedFiles.map((file, index) => (
                    <motion.div
                      key={`${file.name}-${index}`}
                      className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-xl">
                            {getFileIcon(file)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {file.name}
                            </p>
                            <div className="flex items-center space-x-2 mt-0.5">
                              <span className="text-xs text-gray-500">
                                {formatFileSize(file.size)}
                              </span>
                              <span className="text-gray-300">•</span>
                              <span className="text-xs text-gray-500">
                                {file.type || 'Unknown type'}
                              </span>
                            </div>
                            {uploadProgress[file.name] < 100 && (
                              <div className="w-full mt-2">
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                  <span>Uploading...</span>
                                  <span>{Math.round(uploadProgress[file.name] || 0)}%</span>
                                </div>
                                <ProgressBar progress={uploadProgress[file.name] || 0} />
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(index);
                          }}
                          className="p-1 text-gray-400 hover:text-red-500 rounded-full transition-colors"
                          title="Remove file"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="pt-4 mt-4 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} • {' '}
                      {formatFileSize(selectedFiles.reduce((acc, file) => acc + file.size, 0))}
                    </div>
                    <motion.button
                      className={`px-5 py-2 rounded-lg font-medium text-sm ${
                        isUploading || Object.values(uploadProgress).some(p => p < 100)
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:opacity-90 shadow-md'
                      } transition-all`}
                      disabled={isUploading || Object.values(uploadProgress).some(p => p < 100)}
                      whileHover={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                        scale: 1.02,
                        boxShadow: '0 4px 12px -2px rgba(99, 102, 241, 0.3)'
                      } : {}}
                      whileTap={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                        scale: 0.98 
                      } : {}}
                    >
                      {isUploading 
                        ? 'Uploading...' 
                        : 'Upload All Files'}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

render(<GradientFileInput />);
