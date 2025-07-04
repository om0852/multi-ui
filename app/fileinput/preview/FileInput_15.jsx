
function FileUploadCircularContainer({
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
  const [rotation, setRotation] = useState(0);

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
    
    // Add rotation animation
    setRotation(360);
    setTimeout(() => setRotation(0), 1000);
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
      <div className={`relative ${className}`}>
        {/* Circular Drop Zone */}
        <motion.div
          className={`relative w-64 h-64 rounded-full flex items-center justify-center cursor-pointer overflow-hidden ${
            isDragActive 
              ? 'bg-gradient-to-r from-blue-400 to-blue-600' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          } shadow-xl`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
          whileTap={{ scale: 0.98 }}
          animate={{
            rotate: rotation,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
          }}
        >
          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-white/20"
                style={{
                  width: `${100 + i * 50}%`,
                  height: `${100 + i * 50}%`,
                  top: '50%',
                  left: '50%',
                  x: '-50%',
                  y: '-50%',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 text-center p-8">
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
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
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
              className={`text-lg font-bold mb-1 ${
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
              <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden mt-4 mx-auto">
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
          
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
        </motion.div>
        
        {/* Orbiting files */}
        {selectedFiles && selectedFiles.length > 0 && (
          <div className="relative w-full h-full">
            {Array.from(selectedFiles).map((file, index) => {
              const radius = 180; // Radius of the orbit
              const angle = (index * (2 * Math.PI)) / Math.max(selectedFiles.length, 1);
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={index}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: x,
                    y: y,
                    transition: {
                      type: 'spring',
                      stiffness: 100 + (index * 10),
                      damping: 10,
                      delay: index * 0.1
                    }
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  <div className="relative group">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg ${
                      `bg-gradient-to-br ${getRandomGradient()}`
                    } text-white`}>
                      {getFileIcon(file)}
                      
                      {/* Progress ring */}
                      {uploadProgress[file.name] < 100 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="50%"
                              cy="50%"
                              r="22"
                              fill="none"
                              stroke="rgba(255, 255, 255, 0.3)"
                              strokeWidth="2"
                            />
                            <motion.circle
                              cx="50%"
                              cy="50%"
                              r="22"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeDasharray="138.23"
                              strokeDashoffset={138.23 * (1 - (uploadProgress[file.name] || 0) / 100)}
                              initial={{ strokeDashoffset: 138.23 }}
                              animate={{
                                strokeDashoffset: 138.23 * (1 - (uploadProgress[file.name] || 0) / 100)
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {file.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-t-gray-800 border-l-transparent border-r-transparent"></div>
                    </div>
                    
                    {/* Remove button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(file);
                      }}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        
        {/* File list at the bottom */}
        {selectedFiles && selectedFiles.length > 0 && (
          <motion.div 
            className="mt-24 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
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
              
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {Array.from(selectedFiles).map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                        `bg-gradient-to-br ${getRandomGradient()}`
                      } text-white`}>
                        {getFileIcon(file)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate w-40">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {getFileType(file)} • {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {uploadProgress[file.name] < 100 ? (
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
                      ) : (
                        <div className="text-xs text-green-500 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Uploaded
                        </div>
                      )}
                      
                      <button
                        onClick={() => removeFile(file)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove file"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
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

render(<FileUploadCircularContainer />);
