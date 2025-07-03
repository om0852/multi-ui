
const Card3 = ({
  title = 'Hover Reveal',
  description = 'Hover over this card to see a smooth reveal animation with more details about this product or service.',
  link = '#',
  imageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  btnText = 'Learn More'
}) => {
  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Card Container */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Title - Always Visible */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 transition-transform duration-300 group-hover:translate-y-[-100%]">
            <h3 className="text-white text-xl sm:text-2xl font-bold">{title}</h3>
          </div>
          
          {/* Description and Button - Slide Up */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-white text-sm sm:text-base mb-4">{description}</p>
            <a 
              href={link}
              className="inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-colors"
            >
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

render(
  <div className="p-4">
    <Card3 />
  </div>
);
