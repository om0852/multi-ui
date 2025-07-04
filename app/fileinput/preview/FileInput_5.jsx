
function FileUploadCircular({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  uploadText = "Drag & Drop or Click to Upload",
  dragActiveText = "Drop the files to upload",
  className = "",
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [uploadProgress, setUploadProgress] = useState({});
  const [previews, setPreviews] = useState({});

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
    
    // Remove progress
    setUploadProgress(prev => {
      const newProgress = {...prev};
      delete newProgress[fileToRemove.name];
      return newProgress;
    });
    
    // Remove preview
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex flex-col items-center justify-center space-y-6 ${className}`}
    >
      <motion.div
        className={`relative flex items-center justify-center w-64 h-64 rounded-full border-4 border-dashed 
          ${isDragActive 
            ? 'border-blue-500 bg-blue-50 scale-105' 
            : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50'
          } transition-all duration-300 cursor-pointer`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            animate={isDragActive ? { y: [-5, 5, -5] } : { y: 0 }}
            transition={{ 
              y: { 
                repeat: isDragActive ? Infinity : 0, 
                duration: 1.5,
                ease: "easeInOut"
              } 
            }}
            className="mb-3"
          >
            <svg 
              className={`w-16 h-16 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </motion.div>
          <motion.p 
            className={`font-medium ${isDragActive ? 'text-blue-600' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isDragActive ? dragActiveText : uploadText}
          </motion.p>
          <p className="text-sm text-gray-500 mt-1">
            {!selectedFiles || selectedFiles.length === 0 ? 'Supports all file types' : `${selectedFiles.length} file${selectedFiles.length !== 1 ? 's' : ''} selected`}
          </p>
        </div>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          onChange={handleFileSelect}
        />
        
        {/* Circular progress indicator */}
        {selectedFiles && selectedFiles.length > 0 && (
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              background: `conic-gradient(
                #3b82f6 ${Object.values(uploadProgress).reduce((a, b) => a + b, 0) / (selectedFiles.length || 1)}%,
                #e5e7eb 0% 100%
              )`,
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), #fff calc(100% - 4px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), #fff calc(100% - 4px))'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
      
      <AnimatePresence>
        {selectedFiles && selectedFiles.length > 0 && (
          <motion.div 
            className="w-full space-y-3 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-sm font-medium text-gray-700 mb-1">
              Uploading {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''}...
            </h4>
            
            <div className="space-y-2">
              {Array.from(selectedFiles).map((file, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2 min-w-0">
                        {previews[file.name] ? (
                          <div className="w-8 h-8 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                            <img 
                              src={previews[file.name]} 
                              alt="" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-8 h-8 flex-shrink-0 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                            {getFileIcon(file)}
                          </div>
                        )}
                        <p className="text-sm font-medium text-gray-800 truncate max-w-[180px]">
                          {file.name}
                        </p>
                      </div>
                      <button
                        onClick={(e) => removeFile(file, e)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="Remove file"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-1 space-x-2">
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${uploadProgress[file.name] || 0}%`,
                            backgroundColor: uploadProgress[file.name] >= 100 ? '#10B981' : '#3B82F6'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-500 w-10 text-right">
                        {Math.round(uploadProgress[file.name] || 0)}%
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </span>
                      <span className="text-xs text-gray-500">
                        {uploadProgress[file.name] >= 100 ? 'Completed' : 'Uploading...'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-1 text-center">
              <p className="text-xs text-gray-500">
                {Math.round(Object.values(uploadProgress).reduce((a, b) => a + b, 0) / (selectedFiles.length || 1))}% complete • 
                {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} • 
                {(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0) / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

render(
  <div className="p-6 max-w-md mx-auto">
    <FileUploadCircular />
  </div>
);
