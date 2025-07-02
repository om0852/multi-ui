const Button18 = ({
  text = 'Hover to Flip',
  backText = 'Flipped!',
  color = "bg-blue-600",
  size = "w-40 h-14",
  onClick = () => console.log('Hover flip button clicked!'),
  ...props
}) => {
  return (
    <div
      className={`relative ${size} perspective-1000 cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      <div
        className={`absolute inset-0 ${size} ${color} text-white flex items-center justify-center rounded-lg transition-transform duration-500 transform hover:rotate-y-180`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <span className="absolute inset-0 flex items-center justify-center">
          {text}
        </span>
        <span
          className={`absolute inset-0 ${color} text-white flex items-center justify-center`}
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {backText}
        </span>
      </div>
    </div>
  );
};

render(
  <>
    <style>
      {`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}
    </style>
    <Button18 />
  </>
);
