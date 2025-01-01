import React from "react";
import Clipboard from "./_components/Clipboard_5";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Clipboard
        text="https://www.exajkhrjkhrmple.com"
        className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg"
      />
    </div>
  );
};

export default App;
