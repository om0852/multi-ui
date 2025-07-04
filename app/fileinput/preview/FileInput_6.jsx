
function FileUploadCard({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  uploadText = "Click or Drag & Drop to Upload",
  dragActiveText = "Release to Upload",
  className = "",
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [previews, setPreviews] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});

  // Simulate upload progress
  const simulateUpload = (files) => {
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
      }, 2000 + (index * 200));
    });
    
    setUploadProgress(prev => ({ ...prev, ...newProgress }));
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

  const removeFile = (fileToRemove, e) => {
    e.stopPropagation();
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
    return '📁';
  };

  const getFileType = (file) => {
    if (file.type.startsWith('image/')) return 'Image';
    if (file.type.includes('pdf')) return 'PDF';
    if (file.type.includes('zip') || file.type.includes('compressed')) return 'Archive';
    if (file.type.includes('audio')) return 'Audio';
    if (file.type.includes('video')) return 'Video';
    return file.type.split('/')[1]?.toUpperCase() || 'File';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex flex-col items-center justify-center space-y-6 ${className}`}
    >
      <motion.div
        className={`w-full max-w-2xl p-8 rounded-xl shadow-lg border-2 border-dashed transition-all duration-300 ${
          isDragActive 
            ? 'bg-blue-50 border-blue-500 scale-[1.01]' 
            : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <motion.div
            animate={isDragActive ? { y: [-3, 3, -3] } : { y: 0 }}
            transition={{ 
              y: { 
                repeat: isDragActive ? Infinity : 0, 
                duration: 1.5,
                ease: "easeInOut"
              } 
            }}
          >
            <svg 
              className={`w-16 h-16 ${isDragActive ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </motion.div>
          
          <div className="space-y-1">
            <motion.p 
              className={`text-lg font-medium ${isDragActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDragActive ? dragActiveText : uploadText}
            </motion.p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {!selectedFiles || selectedFiles.length === 0 
                ? 'Supports all file types' 
                : `${selectedFiles.length} file${selectedFiles.length !== 1 ? 's' : ''} selected`}
            </p>
          </div>
          
          <motion.button
            className={`px-4 py-2 mt-2 text-sm font-medium rounded-lg ${
              isDragActive 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            } transition-colors`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Choose Files
          </motion.button>
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
            className="w-full max-w-2xl space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Selected Files
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Array.from(selectedFiles).map((file, index) => (
                <motion.div
                  key={index}
                  className="relative group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      {previews[file.name] ? (
                        <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <img 
                            src={previews[file.name]} 
                            alt="" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl">
                          {getFileIcon(file)}
                        </div>
                      )}
                      
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {file.name}
                          </h4>
                          <button
                            onClick={(e) => removeFile(file, e)}
                            className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1 -mr-2 opacity-0 group-hover:opacity-100"
                            title="Remove file"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {getFileType(file)} • {formatFileSize(file.size)}
                          </span>
                          {uploadProgress[file.name] < 100 ? (
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                              {Math.round(uploadProgress[file.name] || 0)}%
                            </span>
                          ) : (
                            <span className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Done
                            </span>
                          )}
                        </div>
                        
                        <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <motion.div 
                            className="h-full rounded-full bg-blue-500"
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${uploadProgress[file.name] || 0}%`,
                              backgroundColor: uploadProgress[file.name] >= 100 ? '#10B981' : '#3B82F6'
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-2 flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                Total: {formatFileSize(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0))}
              </span>
              <div className="flex items-center space-x-2">
                <button 
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  onClick={() => {
                    setSelectedFiles(null);
                    setUploadProgress({});
                    setPreviews({});
                  }}
                >
                  Clear All
                </button>
                <button 
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={Object.values(uploadProgress).some(progress => progress < 100)}
                >
                  Upload All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

render(
  <div className="p-6 max-w-4xl mx-auto">
    <FileUploadCard />
  </div>
);
