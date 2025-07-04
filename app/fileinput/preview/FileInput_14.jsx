
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
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
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
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${50 + Math.random() * 100}px`,
                  height: `${50 + Math.random() * 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 50],
                  y: [0, (Math.random() - 0.5) * 50],
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
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                isDragActive 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : 'bg-white/10 backdrop-blur-sm'
              }`}>
                <svg 
                  className={`w-8 h-8 ${isDragActive ? 'text-yellow-300' : 'text-white'}`} 
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
            
            {/* Files inside the drop zone */}
            {selectedFiles && selectedFiles.length > 0 && (
              <motion.div 
                className="mt-6 space-y-2 max-h-40 overflow-y-auto pr-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: isExpanded ? 'auto' : '160px'
                }}
                transition={{ duration: 0.3 }}
              >
                {Array.from(selectedFiles).map((file, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-lg">
                        {getFileIcon(file)}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-white truncate w-40">
                          {file.name}
                        </p>
                        <p className="text-xs text-white/70">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {uploadProgress[file.name] < 100 ? (
                        <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-yellow-300 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${uploadProgress[file.name] || 0}%`,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      ) : (
                        <div className="text-xs text-green-300">
                          ✓
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(file);
                        }}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </motion.div>
                ))}
                
                {selectedFiles.length > 2 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                    className="text-xs text-white/70 hover:text-white mt-2 flex items-center justify-center w-full"
                  >
                    {isExpanded ? 'Show less' : `Show all ${selectedFiles.length} files`}
                    <svg 
                      className={`w-3 h-3 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </motion.div>
            )}
          </div>
          
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
        </motion.div>
        
        {/* Additional file details panel */}
        {selectedFiles && selectedFiles.length > 0 && (
          <motion.div 
            className="mt-6 bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                Upload Summary
              </h3>
              <div className="text-sm text-gray-500">
                {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} • {formatFileSize(
                  Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0)
                )}
              </div>
            </div>
            
            <div className="space-y-3">
              {Array.from(selectedFiles).slice(0, 3).map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center text-purple-500">
                      {getFileIcon(file)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{file.name}</p>
                      <p className="text-xs text-gray-500">{getFileType(file)} • {formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${uploadProgress[file.name] || 0}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              ))}
              
              {selectedFiles.length > 3 && (
                <div className="text-center pt-2">
                  <span className="text-sm text-gray-500">
                    +{selectedFiles.length - 3} more files
                  </span>
                </div>
              )}
              
              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <motion.button
                  className={`px-5 py-2 rounded-xl font-medium text-sm ${
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
      </div>
    </div>
  );
}

render(<FileUploadVibrant />);
