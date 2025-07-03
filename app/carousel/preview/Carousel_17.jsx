// Main Carousel Component
const Carousel = ({
  children = [],
  autoPlay = true,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
}) => {
  const [duplicatedChildren, setDuplicatedChildren] = useState([]);
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  // Duplicate items to create seamless infinite scroll
  useEffect(() => {
    setDuplicatedChildren([...children, ...children, ...children]);
  }, [children]);

  // Update width when content changes
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 3);
    }
  }, [duplicatedChildren]);

  const shouldAnimate = autoPlay && !(pauseOnHover && isHovered);

  const infiniteScrollVariants = {
    animate: {
      x: direction === "left" ? -width : width,
      transition: {
        duration: width / speed,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  // Gradient card component
  const Card = ({ title, description, icon, gradient, tag }) => (
    <div className={`h-96 w-80 rounded-3xl overflow-hidden group relative`}>
      <div 
        className={`absolute inset-0 ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      
      <div className="relative z-10 h-full flex flex-col p-8">
        <div className="flex justify-between items-start mb-8">
          <div className="text-4xl">{icon}</div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-sm">
            {tag}
          </span>
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed mb-6">{description}</p>
          
          <button className="flex items-center text-sm font-medium text-white group-hover:translate-x-1 transition-transform duration-300">
            Discover more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-white"></div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-20 bg-gray-900">
      <motion.div
        ref={carouselRef}
        className="flex gap-8 px-4"
        animate={shouldAnimate ? "animate" : "initial"}
        variants={infiniteScrollVariants}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const cards = [
    {
      title: "Web Design",
      description: "Creating beautiful, responsive websites that engage and convert visitors into customers.",
      icon: "🎨",
      gradient: "bg-gradient-to-br from-indigo-600 to-purple-600",
      tag: "Design"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      icon: "📱",
      gradient: "bg-gradient-to-br from-blue-600 to-cyan-500",
      tag: "Development"
    },
    {
      title: "UI/UX",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      icon: "✨",
      gradient: "bg-gradient-to-br from-pink-600 to-rose-500",
      tag: "Design"
    },
    {
      title: "E-commerce",
      description: "Complete e-commerce solutions to grow your online business and increase sales.",
      icon: "🛒",
      gradient: "bg-gradient-to-br from-emerald-600 to-teal-500",
      tag: "Business"
    },
    {
      title: "Branding",
      description: "Creating memorable brand identities that stand out in competitive markets.",
      icon: "🏷️",
      gradient: "bg-gradient-to-br from-amber-600 to-yellow-500",
      tag: "Marketing"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-900">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-3">Our Expertise</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Delivering exceptional digital experiences through innovative solutions</p>
        </div>
        
        <Carousel autoPlay={true} speed={40}>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

// Render the component
render(<ExampleCarousel />, document.getElementById('root'));
