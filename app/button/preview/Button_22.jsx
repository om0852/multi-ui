const Button22 = ({
  text = 'Swirl Effect',
  color = "bg-gradient-to-r from-blue-500 to-purple-500",
  size = "w-44 h-14",
  onClick = () => console.log('Swirl button clicked!'),
  ...props
}) => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin {
            animation: spin 10s linear infinite;
          }
        `}
      </style>
      <button
        className={`relative ${size} ${color} text-white rounded-full overflow-hidden cursor-pointer transition-transform hover:rotate-360 duration-500`}
        onClick={onClick}
        {...props}
      >
        <span
          className="absolute inset-0 bg-opacity-10 animate-spin"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
          }}
        ></span>
        <span className="relative">{text}</span>
      </button>
    </>
  );
};

render(<Button22 />);
