const Card2 = ({
  title = 'Product Card',
  description = 'This is a sample product card with a flip effect on hover. Click to learn more about this amazing product.',
  link = '#',
  imageUrl = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  btnText = 'View Details'
}) => {
  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 [perspective:1000px] group">
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-xl sm:text-2xl font-bold text-center px-4">{title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center h-full p-4">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{title}</h3>
            <p className="text-white text-sm sm:text-base text-center mb-4">{description}</p>
            <a 
              href={link} 
              className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-colors"
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
    <Card2 />
  </div>
);
