const Button3 = ({
  text = 'Hover Me',
  frontColor = "bg-red-500",
  backColor = "bg-black",
  size = "text-lg",
  onClick = () => console.log('Button 3 clicked!'),
  ...props
}) => {
  return (
    <div
      className="group perspective w-fit"
      style={{ perspective: "1000px" }}
      {...props}
    >
      <button
        onClick={onClick}
        className={`relative px-6 py-3 font-semibold ${size} text-white transform-style preserve-3d transition-transform duration-500 group-hover:rotate-x-180`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center ${frontColor} rounded-lg`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {text}
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center ${backColor} rounded-lg rotate-x-180`}
          style={{ backfaceVisibility: "hidden" }}
        >
          Rotated!
        </span>
      </button>
    </div>
  );
};

render(<Button3 />);
