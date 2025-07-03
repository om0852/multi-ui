const Card1 = ({
  title = 'Card Title',
  description = 'This is a sample card description that provides more information about the card content.',
  link = '#',
  imageUrl = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  btnText = 'Learn More'
}) => {
  return (
    <div className="relative group w-full max-w-sm h-64 sm:h-72 overflow-hidden bg-black rounded-lg">
      {/* Image Section */}
      <img
        className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
        src={imageUrl}
        alt={title}
      />

      {/* Overlay Shadow */}
      <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
      
      {/* Gradient and Text Section */}
      <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
        {/* Title */}
        <div className="absolute w-full flex place-content-center">
          <p className="capitalize font-serif font-bold text-xl sm:text-2xl text-center shadow-2xl text-white mt-4 sm:mt-6">
            {title}
          </p>
        </div>
        
        {/* Description */}
        <div className="absolute w-full flex place-content-center mt-12 sm:mt-16">
          <p className="font-sans text-center w-4/5 text-sm sm:text-base text-white">
            {description}
          </p>
        </div>
        
        {/* Button Link */}
        <div className="absolute w-full flex justify-center bottom-4">
          <a 
            href={link}  
            className="bg-white text-black font-bold text-sm sm:text-base rounded-lg px-6 py-2 hover:bg-gray-100 transition-colors"
          >
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

render(<Card1 />);
