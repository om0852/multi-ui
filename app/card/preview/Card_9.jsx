const Card9 = ({
  title = 'Neon Card',
  description = 'This card features a stunning neon glow effect with animated corners and gradient text for a modern look.',
  link = '#',
  imageUrl = 'https://images.unsplash.com/photo-1516321318423-f06a85f508d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  btnText = 'View More'
}) => {
  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Neon Border Effect */}
      <div className="absolute inset-0 rounded-lg bg-black">
        <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
        <div className="absolute -inset-[3px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-500" />
      </div>

      {/* Card Content */}
      <div className="relative h-full rounded-lg bg-gray-900 p-4 overflow-hidden">
        {/* Image with Neon Overlay */}
        <div className="relative h-2/3 overflow-hidden rounded-lg mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        </div>

        {/* Text Content */}
        <div className="h-1/3">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-lg sm:text-xl font-bold mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">
            {description}
          </p>
          <a 
            href={link}
            className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
          >
            {btnText}
            <span className="ml-1 text-lg group-hover:animate-pulse">→</span>
          </a>
        </div>

        {/* Animated Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

render(
  <div className="p-4">
    <Card9 />
  </div>
);
