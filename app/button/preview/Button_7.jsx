const Button7 = ({
  frontText = 'Hover to Flip',
  backText = 'Flipped!',
  color = "bg-green-500",
  backColor = "bg-black",
  textColor = "text-white",
  size = "px-6 py-3",
  onClick = () => console.log('Flip button clicked!'),
  ...props
}) => {
  return (
    <div className="group perspective" {...props}>
      <button
        onClick={onClick}
        className={`relative ${size} ${textColor} font-semibold rounded overflow-hidden group-hover:rotate-y-180 transition-transform duration-500`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center ${color} rounded`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontText}
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center ${backColor} rotate-y-180 rounded`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {backText}
        </span>
      </button>
    </div>
  );
};

render(<Button7 />);
