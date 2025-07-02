const { useState } = React;

const Button13 = ({
  text = 'Click Me',
  color = "bg-blue-500",
  size = "w-40 h-12",
  onClick = () => console.log('Button clicked!'),
  ...props
}) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const id = Date.now();
    setRipples(prev => [...prev, id]);
    setTimeout(() => setRipples(prev => prev.filter(r => r !== id)), 600);
    onClick();
  };

  return (
    <div
      className={`relative overflow-hidden ${size} ${color} text-white rounded-lg flex items-center justify-center cursor-pointer`}
      onClick={handleClick}
      {...props}
    >
      {text}
      {ripples.map((ripple) => (
        <span
          key={ripple}
          className="absolute rounded-full border-2 border-white opacity-50 animate-ping"
          style={{
            width: "150%",
            height: "150%",
          }}
        />
      ))}
    </div>
  );
};

render(<Button13 />);
