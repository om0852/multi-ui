const Button9 = ({
  text = 'With Icon',
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
  color = "bg-purple-500",
  textColor = "text-white",
  size = "medium",
  onClick = () => console.log('Icon button clicked!'),
  ...props
}) => {
  const sizeClasses =
    size === "small"
      ? "px-3 py-2 text-sm"
      : size === "large"
      ? "px-6 py-4 text-lg"
      : "px-4 py-3 text-md";

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 ${color} ${textColor} ${sizeClasses} rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110`}
      {...props}
    >
      <span
        className="inline-block transform transition-transform duration-500 group-hover:rotate-360"
        style={{ willChange: "transform" }}
      >
        {icon}
      </span>
      <span>{text}</span>
    </button>
  );
};

render(<Button9 />);
