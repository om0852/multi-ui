const { useState } = React;

const Button25 = ({
  text = 'Click Ripple',
  color = "bg-teal-500",
  size = "w-36 h-12",
  onClick = () => console.log('Ripple button clicked!'),
  ...props
}) => {
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });

  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true,
    });
    setTimeout(() => setRipple({ ...ripple, show: false }), 500);
    onClick();
  };

  return (
    <>
      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
      <button
        className={`relative ${size} ${color} text-white font-bold rounded-lg overflow-hidden`}
        onClick={handleRipple}
        {...props}
      >
        {ripple.show && (
          <span
            className="absolute w-16 h-16 bg-white opacity-30 rounded-full"
            style={{
              top: ripple.y - 32,
              left: ripple.x - 32,
              animation: 'ripple 0.5s ease-out',
            }}
          ></span>
        )}
        <span className="relative">{text}</span>
      </button>
    </>
  );
};

render(<Button25 />);
