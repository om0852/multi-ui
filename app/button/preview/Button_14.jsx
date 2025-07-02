const Button14 = ({
  text = 'Glowing Button',
  color = "bg-pink-500",
  size = "w-36 h-12",
  onClick = () => console.log('Glowing button clicked!'),
  ...props
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-lg shadow-lg transition-transform hover:scale-110`}
      style={{
        boxShadow: `0 0 20px rgba(255, 105, 180, 0.5)`,
        animation: "pulse 2s infinite",
      }}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

render(
  <>
    <style>
      {`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 105, 180, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 105, 180, 0); }
        }
      `}
    </style>
    <Button14 />
  </>
);
