const Card7 = ({
  title = 'Glass Card',
  description = 'Experience the modern glass morphism effect with this elegant card design that features subtle blur and transparency.',
  link = '#',
  imageUrl = 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  btnText = 'View Details'
}) => {
  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
        />
      </div>

      {/* Glass Effect Container */}
      <div className="absolute inset-0 rounded-lg backdrop-blur-md bg-white/10 p-6 flex flex-col justify-end transform">
        {/* Content Container with Glass Effect */}
        <div className="relative z-10 bg-white/20 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-white/30 transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base mb-4">
            {description}
          </p>
          <a 
            href={link}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/30 transition-colors"
          >
            {btnText}
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl transform group-hover:translate-x-4 transition-transform duration-700" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg transform group-hover:-translate-x-4 transition-transform duration-700" />
      </div>
    </div>
  );
};

render(
  <div className="p-4">
    <Card7 />
  </div>
);
