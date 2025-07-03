// 3D Card Component
const Card3D = ({ title, description, icon, color, accentColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xVal = e.clientX - rect.left;
    const yVal = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    x.set(xVal - centerX);
    y.set(yVal - centerY);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
    animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-80 h-96 rounded-2xl p-6 relative overflow-hidden cursor-pointer perspective-1000"
      style={{
        transformStyle: 'preserve-3d',
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transition: 'all 0.3s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card background */}
      <div 
        className="absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${accentColor} 100%)`,
          opacity: isHovered ? 1 : 0.9,
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
        }}
      />
      
      {/* Card content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start">
          <div className={`w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl`}>
            {icon}
          </div>
          <div className="text-5xl font-bold text-white/10">
            0{Math.floor(Math.random() * 5) + 1}
          </div>
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed mb-6">{description}</p>
          
          <button 
            className="px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors flex items-center group"
            onMouseEnter={() => setIsAnimating(true)}
            onAnimationEnd={() => setIsAnimating(false)}
          >
            Learn more
            <motion.span 
              className="ml-2 inline-block"
              animate={{ x: isAnimating ? [0, 4, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              →
            </motion.span>
          </button>
        </div>
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity"
        style={{
          background: `radial-gradient(circle at ${x.get() + 150}px ${y.get() + 150}px, white 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

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
      title: "3D Effects",
      description: "Immersive 3D card interactions that respond to mouse movement",
      icon: "🎮",
      color: "#6366F1",
      accentColor: "#8B5CF6"
    },
    {
      title: "Smooth Animations",
      description: "Buttery smooth animations powered by Framer Motion",
      icon: "✨",
      color: "#EC4899",
      accentColor: "#F43F5E"
    },
    {
      title: "Responsive Design",
      description: "Looks great on all devices and screen sizes",
      icon: "📱",
      color: "#10B981",
      accentColor: "#3B82F6"
    },
    {
      title: "Performance",
      description: "Optimized for 60fps animations and smooth interactions",
      icon: "⚡",
      color: "#F59E0B",
      accentColor: "#EF4444"
    },
    {
      title: "Easy to Use",
      description: "Simple integration with your React applications",
      icon: "🎯",
      color: "#8B5CF6",
      accentColor: "#EC4899"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-900">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-3">3D Card Carousel</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Hover over the cards to see the 3D effect</p>
        </div>
        
        <Carousel autoPlay={true} speed={50}>
          {cards.map((card, index) => (
            <Card3D key={index} {...card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

// Render the component
render(<ExampleCarousel />, document.getElementById('root'));
