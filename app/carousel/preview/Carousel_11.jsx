
// Main Carousel Component
const Carousel = ({
  children = [],
  autoPlay = true,
  interval = 3000,
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
  const Card = ({ title, description, emoji, gradient }) => (
    <div className={`h-56 w-72 rounded-2xl p-6 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform`}
      style={{
        background: `linear-gradient(145deg, ${gradient.from}, ${gradient.to})`
      }}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-white/80 mt-2">{description}</p>
      <button className="mt-4 self-start px-4 py-2 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 transition-colors">
        Explore
      </button>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        ref={carouselRef}
        className="flex gap-6 px-4"
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
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const cards = [
    {
      title: "UI Components",
      description: "Beautiful, responsive components for your next project",
      emoji: "✨",
      gradient: { from: "#6366F1", to: "#8B5CF6" }
    },
    {
      title: "Templates",
      description: "Ready-to-use templates to jumpstart your development",
      emoji: "🚀",
      gradient: { from: "#EC4899", to: "#F43F5E" }
    },
    {
      title: "Icons & Assets",
      description: "High-quality icons and assets for your designs",
      emoji: "🎨",
      gradient: { from: "#10B981", to: "#3B82F6" }
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      emoji: "📚",
      gradient: { from: "#F59E0B", to: "#EF4444" }
    },
    {
      title: "Community",
      description: "Join our growing community of developers",
      emoji: "👥",
      gradient: { from: "#8B5CF6", to: "#EC4899" }
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Modern UI Collection</h1>
        <p className="text-gray-400 mb-8">Beautiful, responsive components for your next project</p>
        
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
