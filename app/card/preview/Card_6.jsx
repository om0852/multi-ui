const Card6 = ({
  title = 'Glowing Card',
  description = 'This card features a beautiful glowing border effect on hover that highlights the content within.',
  link = '#',
  imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  btnText = 'Explore'
}) => {
  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Glowing Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      
      {/* Card Content */}
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden ring-1 ring-gray-900/5">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
            {title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4 transform group-hover:-translate-y-1 transition-transform duration-500 delay-75">
            {description}
          </p>
          <a 
            href={link}
            className="inline-flex items-center justify-center px-6 py-2 text-sm sm:text-base font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transform group-hover:-translate-y-1 transition-all duration-500 delay-100"
          >
            {btnText}
            <svg className="w-4 h-4 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

render(
  <div className="p-4">
    <Card6 />
  </div>
);
