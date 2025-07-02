const Button12 = ({
  frontText = 'Hover to Flip',
  backText = 'Flipped!',
  color = "bg-purple-500",
  size = "w-40 h-20",
  textColor = "text-white",
  onClick = () => console.log('Flip button clicked!'),
  ...props
}) => {
  return (
    <div
      className={`relative ${size} perspective group`}
      onClick={onClick}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 transform-style-3d group-hover:rotate-y-180"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`absolute inset-0 ${color} ${textColor} flex items-center justify-center rounded-md`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontText}
        </div>
        <div
          className={`absolute inset-0 ${color} ${textColor} flex items-center justify-center rounded-md transform rotate-y-180`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {backText}
        </div>
      </div>
    </div>
  );
};

render(<Button12 />);
