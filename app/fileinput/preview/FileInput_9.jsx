
function FileUploadCard({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  uploadText = "Click or Drag files here to upload",
  dragActiveText = "Drop your files now!",
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
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-yellow-500', 'bg-indigo-500', 'bg-red-500', 'bg-teal-500'
    ];
    const index = Array.from(fileName).reduce((sum, char) => sum + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <motion.div
        className={`flex flex-col items-center justify-center space-y-6 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.div
          className={`relative w-80 h-56 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer overflow-hidden ${
            isDragActive 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-400 hover:border-blue-400 bg-white'
          } transition-all duration-300`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-30" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-30" />
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-pink-100 rounded-full opacity-20" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-4">
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
              <div className={`w-16 h-16 rounded-2xl ${
                isDragActive ? 'bg-blue-500' : 'bg-blue-400'
              } flex items-center justify-center text-white mb-3 mx-auto transition-colors duration-300`}>
                <svg 
                  className="w-8 h-8" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </motion.div>
            
            <div className="space-y-1">
              <motion.p 
                className={`text-lg font-semibold ${
                  isDragActive ? 'text-blue-600' : 'text-gray-700'
                } transition-colors duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isDragActive ? dragActiveText : uploadText}
              </motion.p>
              <p className="text-sm text-gray-500">
                {!selectedFiles || selectedFiles.length === 0 
                  ? 'Supports all file types' 
                  : `${selectedFiles.length} file${selectedFiles.length !== 1 ? 's' : ''} selected`}
              </p>
            </div>
            
            {isUploading && (
              <div className="w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden mt-2">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full"
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
          
          {/* Animated plus icon */}
          {!selectedFiles || selectedFiles.length === 0 ? (
            <motion.div 
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl"
              animate={{ rotate: isDragActive ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              +
            </motion.div>
          ) : null}
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
              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Your Files
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''}
                    </span>
                    <button 
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
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
                      className="relative group bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${
                          getFileColor(file.name)
                        } flex items-center justify-center text-white text-xl`}>
                          {getFileIcon(file)}
                        </div>
                        
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 truncate max-w-[180px]">
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
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
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
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Total: {formatFileSize(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0))}
                  </div>
                  <motion.button
                    className={`px-4 py-2 rounded-lg font-medium text-sm ${
                      isUploading || Object.values(uploadProgress).some(p => p < 100)
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } transition-colors`}
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
    </div>
  );
}

render(<FileUploadCard />);
