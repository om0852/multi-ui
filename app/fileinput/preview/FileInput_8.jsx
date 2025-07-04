
function FileUploadNeon({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  uploadText = "Drag files here or click to upload",
  dragActiveText = "Release to drop your files",
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <motion.div
        className={`flex flex-col items-center justify-center space-y-6 ${className}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <motion.div
          className={`relative w-72 h-48 rounded-2xl border-4 flex items-center justify-center cursor-pointer overflow-hidden ${
            isDragActive 
              ? 'border-pink-400 bg-gray-900' 
              : 'border-pink-500/50 bg-gray-800/50'
          } backdrop-blur-sm transition-all duration-300`}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)',
          }}
          whileTap={{ scale: 0.98 }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 animate-gradient-xy" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent_70%)]" />
          </div>
          
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-2xl p-[2px]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-3">
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
              <svg 
                className={`w-12 h-12 ${isDragActive ? 'text-pink-300' : 'text-pink-400/70'} transition-colors duration-300`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </motion.div>
            
            <motion.p 
              className={`text-lg font-medium ${
                isDragActive ? 'text-pink-200' : 'text-gray-300'
              } transition-colors duration-300`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDragActive ? dragActiveText : uploadText}
            </motion.p>
            
            {!selectedFiles || selectedFiles.length === 0 ? (
              <p className="text-sm text-gray-400/80">
                Supports all file types
              </p>
            ) : (
              <p className="text-sm text-pink-300/80 font-medium">
                {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} selected
              </p>
            )}
            
            {isUploading && (
              <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden mt-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${Object.values(uploadProgress).reduce((a, b) => a + b, 0) / (selectedFiles?.length || 1)}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
          
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
          
          {/* Animated particles */}
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-pink-400/30"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, (Math.random() - 0.5) * 40, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
        
        <AnimatePresence>
          {selectedFiles && selectedFiles.length > 0 && (
            <motion.div 
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-200">
                    Selected Files
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">
                      {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''}
                    </span>
                    <button 
                      className="text-sm text-pink-400 hover:text-pink-300 font-medium"
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
                
                <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                  {Array.from(selectedFiles).map((file, index) => (
                    <motion.div
                      key={index}
                      className="relative group bg-gray-800/70 hover:bg-gray-700/70 rounded-lg p-3 border border-gray-700/50 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                          file.type.startsWith('image/') 
                            ? 'bg-pink-900/30 text-pink-300' 
                            : 'bg-purple-900/30 text-purple-300'
                        }`}>
                          {getFileIcon(file)}
                        </div>
                        
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-gray-100 truncate max-w-[180px]">
                                {file.name}
                              </h4>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {getFileType(file)} • {formatFileSize(file.size)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFile(file)}
                              className="text-gray-400 hover:text-pink-400 transition-colors p-1 -mt-1 -mr-1"
                              title="Remove file"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          
                          {uploadProgress[file.name] < 100 ? (
                            <div className="mt-2 space-y-1">
                              <div className="w-full bg-gray-700 rounded-full h-1.5">
                                <motion.div 
                                  className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                                  initial={{ width: 0 }}
                                  animate={{ 
                                    width: `${uploadProgress[file.name] || 0}%`,
                                  }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                              <p className="text-xs text-right text-gray-400">
                                {Math.round(uploadProgress[file.name] || 0)}%
                              </p>
                            </div>
                          ) : (
                            <div className="mt-2 flex items-center space-x-1 text-xs text-green-400">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>Uploaded</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-700/50 flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    Total: {formatFileSize(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0))}
                  </div>
                  <motion.button
                    className={`px-4 py-2 rounded-lg font-medium text-sm ${
                      isUploading || Object.values(uploadProgress).some(p => p < 100)
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90'
                    } transition-all`}
                    disabled={isUploading || Object.values(uploadProgress).some(p => p < 100)}
                    whileHover={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { scale: 1.02 } : {}}
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
      </motion.div>
      
      <style jsx global>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          animation: gradient-xy 8s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </div>
  );
}

render(<FileUploadNeon />);
