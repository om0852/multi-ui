import React from "react";
import RotatingRingAvatar from "./_components/Avatar_20";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="space-x-4">
      <RotatingRingAvatar
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Avatar 1"
        size="sm"
      />
      <RotatingRingAvatar
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Avatar 2"
        size="md"
      />
      <RotatingRingAvatar
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Avatar 3"
        size="lg"
      />
 </div>
    </div>
  );
};

export default App;
