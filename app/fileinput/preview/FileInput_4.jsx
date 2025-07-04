
function FileUpload({
  onFilesSelected = (files) => {
    if (files) {
      const fileList = Array.from(files);
      console.log('Selected files:', fileList.map(f => f.name).join(', '));
    }
  },
  uploadText = "Drag and drop files here or click to select",
  dragActiveText = "Release to drop the files",
  className = "",
  dropAreaClassName = "p-6 rounded-lg border-4 border-dashed bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [previews, setPreviews] = useState({});

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
    
    // Generate previews for all files
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews(prev => ({
            ...prev,
            [file.name]: reader.result
          }));
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
    onFilesSelected(files);
    
    // Generate previews for all files
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews(prev => ({
            ...prev,
            [file.name]: reader.result
          }));
        };
        reader.readAsDataURL(file);
      }
    });
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
      className={`flex flex-col items-center justify-center ${className}`}
    >
      <motion.div
        className={`${isDragActive ? "border-pink-500 bg-opacity-50" : "bg-opacity-20"} ${dropAreaClassName} transition-all duration-300`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div
            animate={isDragActive ? { y: [0, -5, 0], scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: isDragActive ? Infinity : 0, duration: 1.5 }}
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </motion.div>
          <motion.p 
            className="text-center text-white text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isDragActive ? dragActiveText : uploadText}
          </motion.p>
          <p className="text-center text-white/80 text-sm">
            Supports images, documents, and other files
          </p>
        </div>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          onChange={handleFileSelect}
        />
        
        <AnimatePresence>
          {selectedFiles && selectedFiles.length > 0 && (
            <motion.div 
              className="mt-6 space-y-3 w-full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Array.from(selectedFiles).map((file, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      {file.type.startsWith('image/') ? (
                        <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
                          <img
                            src={previews[file.name] || ''}
                            alt={file.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 flex flex-col justify-center items-center bg-white/80 rounded-md text-2xl">
                          {getFileIcon(file)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate max-w-[150px]">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024).toFixed(1)} KB • {file.type.split('/')[1] || 'file'}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      onClick={(e) => removeFile(file, e)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-red-500 hover:text-red-600 p-1"
                      title="Remove file"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
              <div className="pt-2 text-center">
                <p className="text-sm text-white/80">
                  {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} selected • {Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0) / 1024 > 1024 
                    ? `${(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0) / (1024 * 1024)).toFixed(1)} MB`
                    : `${Math.ceil(Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0) / 1024)} KB`
                  }
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

render(
  <div className="p-6 max-w-3xl mx-auto">
    <FileUpload />
  </div>
);
