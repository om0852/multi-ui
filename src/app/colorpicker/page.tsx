import React from "react";
import ColorPicker from "./_components/ColorPicker_10";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <ColorPicker initialColor="#3490dc" className="p-6 shadow-xl" />
    </div>
  );
};

export default App;
