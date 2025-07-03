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

  // Minimalist card component
  const Card = ({ title, description, icon, color }) => (
    <div className={`h-64 w-64 rounded-lg p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col`}>
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 flex-grow">{description}</p>
      <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors text-left">
        Read more →
      </button>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-12 bg-gray-50">
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
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const cards = [
    {
      title: "Minimal Design",
      description: "Clean and simple design that puts your content first",
      icon: "✏️",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Lightweight",
      description: "Optimized for performance and fast loading times",
      icon: "⚡",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      title: "Responsive",
      description: "Looks great on all devices and screen sizes",
      icon: "📱",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Customizable",
      description: "Easy to customize to match your brand",
      icon: "🎨",
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "Accessible",
      description: "Built with accessibility in mind",
      icon: "♿",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Minimalist Design</h1>
          <p className="text-gray-600">Simple, clean, and effective components</p>
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
