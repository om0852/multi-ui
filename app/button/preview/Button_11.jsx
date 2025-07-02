const { useState } = React;

const Button11 = ({
  activeText = 'ON',
  inactiveText = 'OFF',
  activeColor = "bg-green-500",
  inactiveColor = "bg-red-500",
  size = "medium",
  onToggle = (isActive) => console.log(isActive ? 'Active' : 'Inactive'),
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const newState = !isActive;
    setIsActive(newState);
    onToggle(newState);
  };

  const sizeClasses = {
    small: "w-16 h-16 text-sm",
    medium: "w-20 h-20 text-lg",
    large: "w-24 h-24 text-xl",
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} relative perspective-1000`}
      {...props}
    >
      <div
        className={`transform transition-transform duration-500 ${
          isActive ? "rotate-y-180" : "rotate-y-0"
        } w-full h-full ${isActive ? activeColor : inactiveColor} text-white rounded-lg flex items-center justify-center shadow-lg`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center backface-hidden">
          {inactiveText}
        </div>
        <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180">
          {activeText}
        </div>
      </div>
    </button>
  );
};

render(<Button11 />);
