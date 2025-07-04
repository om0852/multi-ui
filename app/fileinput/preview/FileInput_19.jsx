
function CardFileInput({
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
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});

  const generatePreview = (file) => {
    return new Promise((resolve) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        resolve('');
      }
    });
  };

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

  const handleFiles = useCallback(async (files) => {
    const validFiles = files.slice(0, maxFiles);
    
    const filesWithPreviews = await Promise.all(
      validFiles.map(async (file) => ({
        file,
        preview: await generatePreview(file),
      }))
    );

    setSelectedFiles(filesWithPreviews);
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
    newFiles.forEach(({ file }) => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
    
    // Remove progress
    const fileName = selectedFiles[indexToRemove].file.name;
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
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-yellow-400 to-orange-500',
      'from-red-500 to-pink-500',
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        <div 
          className={`relative bg-white rounded-xl p-8 transition-all ${
            isDragActive 
              ? 'ring-2 ring-purple-500 scale-[1.01] shadow-lg' 
              : 'shadow-md hover:shadow-lg'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('card-file-upload')?.click()}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-50 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8 text-purple-500"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-800">
              {isDragActive ? "Drop to add your files" : "Add your files"}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Drag and drop your files here or click to browse
            </p>
            
            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Uploading {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''}</span>
                  <span>
                    {Math.round(
                      Object.values(uploadProgress).reduce((a, b) => a + b, 0) / 
                      (selectedFiles.length || 1)
                    )}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    className={`h-full rounded-full bg-gradient-to-r ${getGradient()}`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${Object.values(uploadProgress).reduce((a, b) => a + b, 0) / (selectedFiles.length || 1)}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}
          </div>
          
          <input
            type="file"
            id="card-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </div>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Selected Files
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({selectedFiles.length} of {maxFiles})
                </span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {selectedFiles.map(({ file, preview }, index) => {
                  const progress = uploadProgress[file.name] || 0;
                  const isImage = file.type.startsWith('image/');
                  
                  return (
                    <motion.div
                      key={`${file.name}-${index}`}
                      className="relative group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 group-hover:border-purple-300 transition-colors">
                        {isImage && preview ? (
                          <div 
                            className="w-full aspect-square rounded-md bg-cover bg-center mb-2"
                            style={{ backgroundImage: `url(${preview})` }}
                          />
                        ) : (
                          <div className="w-full aspect-square rounded-md bg-gray-100 flex items-center justify-center text-3xl mb-2">
                            {getFileIcon(file)}
                          </div>
                        )}
                        
                        <div className="text-center">
                          <p className="text-xs font-medium text-gray-700 truncate mb-1">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                        
                        {progress < 100 && (
                          <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center p-2">
                            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                              <motion.div 
                                className={`h-full rounded-full ${getGradient().replace('bg-gradient-to-r', '')}`}
                                style={{
                                  backgroundImage: `linear-gradient(to right, ${
                                    progress < 30 ? '#6366F1' : progress < 70 ? '#8B5CF6' : '#EC4899'
                                  }, ${
                                    progress < 30 ? '#8B5CF6' : progress < 70 ? '#EC4899' : '#F43F5E'
                                  })`
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(index);
                        }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors group-hover:opacity-100 opacity-0"
                        title="Remove file"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </motion.div>
                  );
                })}
                
                {selectedFiles.length < maxFiles && (
                  <motion.div
                    className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('card-file-upload')?.click()}
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 text-center">Add more files</span>
                  </motion.div>
                )}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                <motion.button
                  className={`px-5 py-2 rounded-lg font-medium text-sm ${
                    isUploading || Object.values(uploadProgress).some(p => p < 100)
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md'
                  } transition-all`}
                  disabled={isUploading || Object.values(uploadProgress).some(p => p < 100)}
                  whileHover={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                    scale: 1.02,
                    boxShadow: '0 4px 12px -2px rgba(139, 92, 246, 0.3)'
                  } : {}}
                  whileTap={!isUploading && Object.values(uploadProgress).every(p => p >= 100) ? { 
                    scale: 0.98 
                  } : {}}
                >
                  {isUploading 
                    ? `Uploading... (${Math.round(
                        Object.values(uploadProgress).reduce((a, b) => a + b, 0) / 
                        (selectedFiles.length || 1)
                      )}%)` 
                    : 'Upload All Files'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

render(<CardFileInput />);
