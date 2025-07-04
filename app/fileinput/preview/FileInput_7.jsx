
function FileUploadBubble({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  uploadText = "Drop files or click to upload",
  dragActiveText = "Release to upload your files",
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`flex flex-col items-center justify-center space-y-8 ${className}`}
      >
        <motion.div
          className={`relative flex items-center justify-center w-64 h-64 rounded-full shadow-xl ${
            isDragActive 
              ? 'bg-gradient-to-br from-blue-400 to-indigo-500 scale-105' 
              : 'bg-gradient-to-br from-blue-300 to-indigo-400'
          } transition-all duration-300 cursor-pointer`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.25)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm" />
          
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
                className={`w-16 h-16 ${isDragActive ? 'text-white' : 'text-blue-50'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </motion.div>
            
            <motion.p 
              className={`text-lg font-medium ${
                isDragActive ? 'text-white' : 'text-blue-50'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDragActive ? dragActiveText : uploadText}
            </motion.p>
            
            {!selectedFiles || selectedFiles.length === 0 ? (
              <p className="text-sm text-blue-100">
                Supports all file types
              </p>
            ) : (
              <p className="text-sm text-blue-100 font-medium">
                {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} selected
              </p>
            )}
            
            {isUploading && (
              <div className="w-32 h-1.5 bg-white/30 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white rounded-full"
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
          
          {/* Animated floating bubbles */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, (Math.random() - 0.5) * 20, 0],
                opacity: [0.2, 0.5, 0.2],
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
              className="w-full max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Selected Files
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} • {formatFileSize(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0))}
                    </span>
                    <button 
                      className="text-sm text-red-500 hover:text-red-600 font-medium"
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto pr-2">
                  {Array.from(selectedFiles).map((file, index) => (
                    <motion.div
                      key={index}
                      className="relative group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-3">
                        {previews[file.name] ? (
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-gray-100">
                            <img 
                              src={previews[file.name]} 
                              alt="" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                            {getFileIcon(file)}
                          </div>
                        )}
                        
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 truncate max-w-[140px]">
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
                            <div className="mt-2 space-y-1">
                              <div className="w-full bg-gray-100 rounded-full h-1.5">
                                <motion.div 
                                  className="h-full rounded-full bg-blue-500"
                                  initial={{ width: 0 }}
                                  animate={{ 
                                    width: `${uploadProgress[file.name] || 0}%`,
                                  }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                              <p className="text-xs text-right text-gray-500">
                                {Math.round(uploadProgress[file.name] || 0)}%
                              </p>
                            </div>
                          ) : (
                            <div className="mt-2 flex items-center space-x-1 text-xs text-green-500">
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
                
                <div className="mt-6 flex justify-end">
                  <motion.button
                    className={`px-6 py-2.5 rounded-lg font-medium ${
                      isUploading || Object.values(uploadProgress).some(p => p < 100)
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } transition-colors`}
                    disabled={isUploading || Object.values(uploadProgress).some(p => p < 100)}
                    whileHover={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { scale: 1.02 } : {}}
                    whileTap={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { scale: 0.98 } : {}}
                  >
                    {isUploading ? 'Uploading...' : 'Complete Upload'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

render(<FileUploadBubble />);
