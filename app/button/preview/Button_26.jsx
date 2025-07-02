const Button26 = ({
  text = 'Color Shift',
  size = "w-40 h-14",
  onClick = () => console.log('Color shift button clicked!'),
  ...props
}) => {
  return (
    <>
      <style>
        {`
          @keyframes colorShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <button
        className={`relative ${size} bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-bold rounded-full flex items-center justify-center overflow-hidden cursor-pointer`}
        style={{
          backgroundSize: '200% 200%',
          animation: 'colorShift 3s ease infinite'
        }}
        onClick={onClick}
        {...props}
      >
        {text}
      </button>
    </>
  );
};

render(<Button26 />);
