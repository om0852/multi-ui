
const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-lg"
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          style={{
            x: isOn ? 32 : 0, // 32px to move to the right, 0px to reset to the left
          }}
        />
      </div>
    </div>
  );
};

render(<Switch />);
