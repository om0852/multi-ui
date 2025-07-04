
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
  dropAreaClassName = "border-2 border-dashed border-gray-300 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

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
    const filteredFiles = files.slice(0, maxFiles);

    setSelectedFiles(filteredFiles);
    
    const dataTransfer = new DataTransfer();
    filteredFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  };

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const filteredFiles = files.slice(0, maxFiles);

      setSelectedFiles(filteredFiles);
      
      const dataTransfer = new DataTransfer();
      filteredFiles.forEach(file => dataTransfer.items.add(file));
      onFilesSelected(dataTransfer.files);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex flex-col items-center justify-center ${className}`}
    >
      <div
        className={`${isDragActive ? "bg-blue-50 border-blue-400" : "bg-white"} ${dropAreaClassName}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-center text-gray-600">
            {isDragActive ? dragActiveText : uploadText}
          </p>
          <p className="text-sm text-gray-500">
            {allowMultiple ? `Upload up to ${maxFiles} files` : 'Single file only'}
          </p>
        </div>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple={allowMultiple}
          accept={accept}
          onChange={handleFileSelect}
        />
      </div>
      
      {selectedFiles.length > 0 && (
        <div className="mt-4 w-full max-w-md">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h4>
          <div className="space-y-2">
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <p className="text-sm text-gray-700 truncate max-w-xs">{file.name}</p>
                <span className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

render(
  <div className="p-6 max-w-md mx-auto">
    <FileUpload 
      maxFiles={3}
      accept="image/*,.pdf"
      allowMultiple={true}
    />
  </div>
);
