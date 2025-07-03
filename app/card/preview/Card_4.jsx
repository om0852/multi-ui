const Card4 = ({
  title = 'Modern Card',
  description = 'This modern card features a beautiful zoom effect on hover with a clean, minimalist design that highlights your content.',
  link = '#',
  imageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  btnText = 'Explore More'
}) => {
  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group overflow-hidden rounded-lg shadow-lg">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6">
        {/* Title */}
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-white/90 text-sm sm:text-base mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {description}
        </p>
        
        {/* Button */}
        <a 
          href={link}
          className="inline-block bg-white/90 backdrop-blur-sm text-black px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200"
        >
          {btnText}
        </a>
      </div>
    </div>
  );
};

render(
  <div className="p-4">
    <Card4 />
  </div>
);
