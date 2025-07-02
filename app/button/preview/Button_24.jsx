const Button24 = ({
  text = 'Orbit Button',
  color = "bg-pink-500",
  size = "w-40 h-14",
  onClick = () => console.log('Orbit button clicked!'),
  ...props
}) => {
  return (
    <div className="relative" {...props}>
      <button
        className={`relative ${size} ${color} text-white font-bold rounded-full flex items-center justify-center cursor-pointer`}
        onClick={onClick}
      >
        {text}
      </button>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="absolute w-4 h-4 bg-white rounded-full animate-spin"
          style={{
            top: "-10px",
            left: `${index * 30 + 20}px`,
            animationDuration: `${1.5 + index * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

render(
  <>
    <style>
      {`
        @keyframes spin {
          from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
      `}
    </style>
    <Button24 />
  </>
);
