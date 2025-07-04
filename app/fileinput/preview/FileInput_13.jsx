
function FileUploadVibrant({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  uploadText = "Drag & drop files or click to select",
  dragActiveText = "Release to drop the files",
  className = "",
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [previews, setPreviews] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  // Simulate upload progress
  const simulateUpload = (files) => {
    setIsUploading(true);
    const newProgress = {};
    const newPreviews = {};
    
    Array.from(files).forEach((file, index) => {
      newProgress[file.name] = 0;
      
      // Generate preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews[file.name] = reader.result;
          setPreviews(prev => ({ ...prev, [file.name]: reader.result }));
        };
        reader.readAsDataURL(file);
      }
      
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
    setPreviews(prev => ({ ...prev, ...newPreviews }));
  };

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
    const files = e.dataTransfer.files;
    setSelectedFiles(files);
    onFilesSelected(files);
    simulateUpload(files);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
    onFilesSelected(files);
    simulateUpload(files);
  };

  const removeFile = (fileToRemove) => {
    if (!selectedFiles) return;

    const updatedFiles = Array.from(selectedFiles).filter(
      (file) => file.name !== fileToRemove.name
    );

    const updatedFileList = new DataTransfer();
    updatedFiles.forEach((file) => updatedFileList.items.add(file));

    setSelectedFiles(updatedFileList.files);
    onFilesSelected(updatedFileList.files);
    
    // Remove progress and preview
    setUploadProgress(prev => {
      const newProgress = {...prev};
      delete newProgress[fileToRemove.name];
      return newProgress;
    });
    
    setPreviews(prev => {
      const newPreviews = {...prev};
      delete newPreviews[fileToRemove.name];
      return newPreviews;
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

  const getFileType = (file) => {
    const type = file.type.split('/')[0];
    switch(type) {
      case 'image': return 'Image';
      case 'video': return 'Video';
      case 'audio': return 'Audio';
      case 'text': return 'Text';
      case 'application': 
        if (file.type.includes('pdf')) return 'PDF';
        if (file.type.includes('spreadsheet')) return 'Spreadsheet';
        if (file.type.includes('word')) return 'Document';
        if (file.type.includes('zip') || file.type.includes('compressed')) return 'Archive';
        return 'File';
      default: return 'File';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getRandomGradient = () => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-teal-400',
      'from-rose-500 to-pink-500',
      'from-violet-500 to-blue-500',
      'from-amber-500 to-pink-500',
      'from-emerald-500 to-cyan-500',
      'from-indigo-500 to-purple-500',
      'from-rose-500 to-amber-500'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className={`w-full max-w-2xl ${className}`}>
        <motion.div
          className={`relative rounded-2xl p-8 text-center cursor-pointer overflow-hidden ${
            isDragActive 
              ? 'bg-gradient-to-r from-blue-400 to-blue-600' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          } shadow-xl transition-all duration-300`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
          whileTap={{ 
            scale: 0.98,
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="relative z-10">
            <motion.div
              animate={isDragActive ? { y: [-5, 5, -5] } : { y: 0 }}
              transition={{ 
                y: { 
                  repeat: isDragActive ? Infinity : 0, 
                  duration: 1.5,
                  ease: "easeInOut"
                } 
              }}
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                isDragActive 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : 'bg-white/10 backdrop-blur-sm'
              }`}>
                <svg 
                  className={`w-10 h-10 ${isDragActive ? 'text-yellow-300' : 'text-white'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </motion.div>
            
            <motion.p 
              className={`text-2xl font-bold mb-2 ${
                isDragActive ? 'text-yellow-300' : 'text-white'
              }`}
            >
              {isDragActive ? dragActiveText : uploadText}
            </motion.p>
            <p className={`text-sm ${
              isDragActive ? 'text-blue-100' : 'text-purple-100'
            }`}>
              {!selectedFiles || selectedFiles.length === 0 
                ? 'Supports all file types' 
                : `${selectedFiles.length} file${selectedFiles.length !== 1 ? 's' : ''} selected`}
            </p>
            
            {isUploading && (
              <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden mt-4 mx-auto">
                <motion.div 
                  className="h-full bg-yellow-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${Object.values(uploadProgress).reduce((a, b) => a + b, 0) / (selectedFiles?.length || 1)}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: `${100 + Math.random() * 100}px`,
                  height: `${100 + Math.random() * 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
        </motion.div>
        
        <AnimatePresence>
          {selectedFiles && selectedFiles.length > 0 && (
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Your Files
                  </h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">
                      {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''}
                    </span>
                    <button 
                      className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition-colors"
                      onClick={() => {
                        setSelectedFiles(null);
                        setUploadProgress({});
                        setPreviews({});
                      }}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {Array.from(selectedFiles).map((file, index) => (
                    <motion.div
                      key={index}
                      className="relative group bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors border border-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div 
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                            `bg-gradient-to-br ${getRandomGradient()}`
                          } text-white`}
                        >
                          {getFileIcon(file)}
                        </div>
                        
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between">
                            <div className="min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                                {file.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {getFileType(file)} • {formatFileSize(file.size)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFile(file)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1 -mt-1 -mr-1"
                              title="Remove file"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          
                          {uploadProgress[file.name] < 100 ? (
                            <div className="mt-3 space-y-1">
                              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                <motion.div 
                                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                  initial={{ width: 0 }}
                                  animate={{ 
                                    width: `${uploadProgress[file.name] || 0}%`,
                                  }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                              <p className="text-xs text-right text-purple-600 font-medium">
                                {Math.round(uploadProgress[file.name] || 0)}%
                              </p>
                            </div>
                          ) : (
                            <div className="mt-3 flex items-center space-x-1 text-xs text-green-500">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>Upload Complete</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Total: <span className="font-medium text-gray-700">
                      {formatFileSize(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0))}
                    </span>
                  </div>
                  <motion.button
                    className={`px-5 py-2.5 rounded-xl font-medium text-sm ${
                      isUploading || Object.values(uploadProgress).some(p => p < 100)
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 shadow-lg shadow-purple-500/20'
                    } transition-all`}
                    disabled={isUploading || Object.values(uploadProgress).some(p => p < 100)}
                    whileHover={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                      scale: 1.03,
                      boxShadow: '0 5px 15px -3px rgba(168, 85, 247, 0.3)'
                    } : {}}
                    whileTap={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { scale: 0.98 } : {}}
                  >
                    {isUploading 
                      ? `Uploading... ${Math.round(Object.values(uploadProgress).reduce((a, b) => a + b, 0) / (selectedFiles?.length || 1))}%` 
                      : 'Complete Upload'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

render(<FileUploadVibrant />);
