
const Card5 = ({
  title = '3D Card',
  description = 'Hover and move your cursor to see the 3D effect on this interactive card.',
  link = '#',
  imageUrl = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  btnText = 'View More'
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full max-w-sm h-64 sm:h-72 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="absolute inset-0 rounded-lg bg-white shadow-lg overflow-hidden transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card Content */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-end">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 text-sm sm:text-base mb-4">{description}</p>
            <a 
              href={link}
              className="inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-colors"
            >
              {btnText}
            </a>
          </div>
        </div>

        {/* Shine Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: 'translateZ(1px)',
          }}
        />
      </div>
    </div>
  );
};

render(
  <div className="p-4">
    <Card5 />
  </div>
);
