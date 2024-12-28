
"use client"

import FileUpload from "./_components/FileInput_5";

const App: React.FC = () => {
  const handleFiles = (files: FileList | null) => {
    console.log(files)
    if (files) {
      Array.from(files).forEach((file) => {
        console.log(file.name);
      });
    }
  };

  return (
    <div className="p-6">
      <FileUpload onFilesSelected={handleFiles} />
    </div>
  );
};

export default App;
