// Card Component with Parallax Effect
const ParallaxCard = ({ title, description, icon, color, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <motion.div 
      ref={ref}
      className={`w-80 h-96 rounded-3xl p-8 flex flex-col relative overflow-hidden`}
      style={{
        backgroundColor: color,
        y,
        opacity,
        scale,
      }}
    >
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl mb-6">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-6">{description}</p>
      </div>
      
      <div className="mt-auto relative z-10">
        <div className="h-px bg-white/20 mb-4"></div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-white/70">Learn more</span>
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5"></div>
    </motion.div>
  );
};

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

  return (
    <div className="relative w-full overflow-hidden py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const cards = [
    {
      title: "Parallax Effects",
      description: "Smooth parallax scrolling effects that add depth to your UI",
      icon: "🌊",
      color: "#6366F1"
    },
    {
      title: "Modern Design",
      description: "Clean and contemporary design that captures attention",
      icon: "🎨",
      color: "#EC4899"
    },
    {
      title: "Performance",
      description: "Optimized animations for buttery smooth performance",
      icon: "⚡",
      color: "#10B981"
    },
    {
      title: "Responsive",
      description: "Looks great on all devices and screen sizes",
      icon: "📱",
      color: "#F59E0B"
    },
    {
      title: "Easy to Use",
      description: "Simple integration with your React applications",
      icon: "✨",
      color: "#8B5CF6"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-6xl mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Parallax Carousel</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Scroll to see the parallax effect in action</p>
      </div>
      
      <div className="w-full">
        <Carousel autoPlay={true} speed={40}>
          {cards.map((card, index) => (
            <ParallaxCard key={index} {...card} index={index} />
          ))}
        </Carousel>
      </div>
      
      <div className="mt-32 text-center">
        <p className="text-gray-500 text-sm">Scroll down to see more content</p>
        <div className="mt-4 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Dummy content to enable scrolling */}
      <div className="h-screen w-full"></div>
    </div>
  );
};

// Render the component
render(<ExampleCarousel />, document.getElementById('root'));
