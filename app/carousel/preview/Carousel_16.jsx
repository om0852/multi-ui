// Main Carousel Component
const Carousel = ({
  children = [],
  autoPlay = true,
  speed = 50,
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

  // Glassmorphic card component
  const Card = ({ title, description, icon, color }) => (
    <div className={`h-80 w-72 rounded-2xl p-8 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group`}>
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl text-white`}>
          {icon}
        </div>
        <div className="text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300 -mr-2">
          0{Math.floor(Math.random() * 5) + 1}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed flex-grow relative z-10">{description}</p>
      
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
        <span className="text-sm font-medium text-white/70">Learn more</span>
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
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
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-indigo-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-purple-900 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const cards = [
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces designed for seamless user experiences",
      icon: "🎨",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
      icon: "📱",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Branding",
      description: "Create a memorable brand identity that stands out",
      icon: "✨",
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "SEO",
      description: "Improve your search engine rankings and visibility",
      icon: "🔍",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-3">Our Services</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Comprehensive digital solutions with a modern touch</p>
        </div>
        
        <Carousel autoPlay={true} speed={50}>
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
