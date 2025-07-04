
function FileUploadGlassmorphic({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  uploadText = "Click or Drag files here to upload",
  dragActiveText = "Release to upload files!",
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

  const getFileColor = (fileName) => {
    // Generate a consistent color based on file name
    const colors = [
      'from-cyan-400 to-blue-500', 'from-purple-400 to-indigo-500', 'from-pink-400 to-rose-500',
      'from-emerald-400 to-teal-500', 'from-amber-400 to-orange-500', 'from-violet-400 to-purple-600'
    ];
    const index = Array.from(fileName).reduce((sum, char) => sum + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className={`flex flex-col items-center space-y-8 ${className}`}>
        <motion.div
          className={`relative w-full max-w-2xl rounded-2xl p-8 text-center cursor-pointer overflow-hidden backdrop-blur-lg ${
            isDragActive 
              ? 'bg-gradient-to-br from-cyan-500/20 to-blue-900/20 border-2 border-cyan-400/50' 
              : 'bg-gray-800/30 border border-gray-700/50 hover:border-cyan-400/30'
          } transition-all duration-300`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
          whileHover={{
            boxShadow: '0 0 40px rgba(34, 211, 238, 0.2)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
            
            {/* Animated floating elements */}
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-cyan-400/20"
                style={{
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, (Math.random() - 0.5) * 30, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
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
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                isDragActive 
                  ? 'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30' 
                  : 'bg-gray-700/50 border border-gray-600/50'
              } transition-all duration-300`}>
                <svg 
                  className={`w-10 h-10 ${isDragActive ? 'text-white' : 'text-cyan-400'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </motion.div>
            
            <div className="space-y-2">
              <motion.p 
                className={`text-2xl font-bold bg-clip-text text-transparent ${
                  isDragActive 
                    ? 'bg-gradient-to-r from-cyan-300 to-blue-300' 
                    : 'bg-gradient-to-r from-gray-200 to-gray-400'
                } transition-all duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isDragActive ? dragActiveText : uploadText}
              </motion.p>
              <p className={`text-sm ${
                isDragActive ? 'text-cyan-200' : 'text-gray-400'
              } transition-colors duration-300`}>
                {!selectedFiles || selectedFiles.length === 0 
                  ? 'Supports all file types' 
                  : `${selectedFiles.length} file${selectedFiles.length !== 1 ? 's' : ''} selected`}
              </p>
            </div>
            
            {isUploading && (
              <div className="w-48 h-1 bg-gray-700/50 rounded-full overflow-hidden mt-3">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
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
          
          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 -z-10 opacity-0"
            animate={{ 
              opacity: isDragActive ? 0.3 : 0.1,
              background: 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.5), transparent 70%)'
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <AnimatePresence>
          {selectedFiles && selectedFiles.length > 0 && (
            <motion.div 
              className="w-full max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                    Your Files
                  </h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-400">
                      {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''}
                    </span>
                    <button 
                      className="text-sm bg-gradient-to-r from-red-500/90 to-pink-500/90 text-white px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
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
                      className="relative group bg-gray-700/30 hover:bg-gray-700/50 rounded-xl p-4 border border-gray-600/30 transition-all"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                          getFileColor(file.name)
                        } bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-600/30`}>
                          {getFileIcon(file)}
                        </div>
                        
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between">
                            <div className="min-w-0">
                              <h4 className="text-sm font-medium text-gray-100 truncate max-w-[200px]">
                                {file.name}
                              </h4>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {getFileType(file)} • {formatFileSize(file.size)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFile(file)}
                              className="text-gray-400 hover:text-red-400 transition-colors p-1 -mt-1 -mr-1"
                              title="Remove file"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          
                          {uploadProgress[file.name] < 100 ? (
                            <div className="mt-3 space-y-1">
                              <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                                <motion.div 
                                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                  initial={{ width: 0 }}
                                  animate={{ 
                                    width: `${uploadProgress[file.name] || 0}%`,
                                  }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                              <p className="text-xs text-right text-cyan-300">
                                {Math.round(uploadProgress[file.name] || 0)}%
                              </p>
                            </div>
                          ) : (
                            <div className="mt-3 flex items-center space-x-1 text-xs text-green-400">
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
                
                <div className="mt-6 pt-4 border-t border-gray-700/50 flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    Total: <span className="text-cyan-300 font-medium">
                      {formatFileSize(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0))}
                    </span>
                  </div>
                  <motion.button
                    className={`px-5 py-2.5 rounded-xl font-medium text-sm ${
                      isUploading || Object.values(uploadProgress).some(p => p < 100)
                        ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed border border-gray-600/30'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 shadow-lg shadow-cyan-500/20'
                    } transition-all`}
                    disabled={isUploading || Object.values(uploadProgress).some(p => p < 100)}
                    whileHover={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                      scale: 1.03,
                      boxShadow: '0 5px 15px -3px rgba(6, 182, 212, 0.3)'
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

render(<FileUploadGlassmorphic />);
