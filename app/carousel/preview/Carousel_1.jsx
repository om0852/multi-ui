
// Context
const CarouselContext = createContext();

// Carousel Component
function Carousel({ children, interval = 5000, loop = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);
  const [itemsCount, setItemsCount] = useState(React.Children.count(children));

  // Auto-slide interval
  useEffect(() => {
    if (interval && itemsCount > 1) {
      const timer = setInterval(() => {
        if (!transitioning) {
          setDirection(1);
          setCurrentIndex(prev => loop ? (prev + 1) % itemsCount : Math.min(prev + 1, itemsCount - 1));
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [interval, itemsCount, loop, transitioning]);

  const setIndex = (index, dir) => {
    setDirection(dir);
    setCurrentIndex(loop ? (index + itemsCount) % itemsCount : Math.max(0, Math.min(index, itemsCount - 1)));
  };

  return (
    <CarouselContext.Provider value={{
      currentIndex, setIndex, itemsCount, loop, transitioning, setTransitioning, direction, setItemsCount
    }}>
      <div className="relative overflow-hidden w-full h-64">
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

// Carousel Content
function CarouselContent({ children, transitionEffect = 0 }) {
  const { currentIndex, direction, setItemsCount } = useContext(CarouselContext);
  
  useEffect(() => {
    setItemsCount(React.Children.count(children));
  }, [children, setItemsCount]);

  // Animation variants
  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%' }),
    center: { x: 0 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%' })
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false} custom={direction}>
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            style={{ display: currentIndex === index ? 'block' : 'none' }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Carousel Item
function CarouselItem({ children }) {
  return <div className="w-full h-full">{children}</div>;
}

// Carousel Controls
function CarouselControls() {
  const { currentIndex, itemsCount, setIndex, transitioning } = useContext(CarouselContext);
  
  const next = () => {
    if (transitioning) return;
    setIndex((currentIndex + 1) % itemsCount, 1);
  };
  
  const prev = () => {
    if (transitioning) return;
    setIndex((currentIndex - 1 + itemsCount) % itemsCount, -1);
  };

  return (
    <>
      <button 
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
      >
        &larr;
      </button>
      <button 
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
      >
        &rarr;
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: itemsCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i, i > currentIndex ? 1 : -1)}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </>
  );
}

// Example Usage
const ExampleCarousel = () => (
  <div className="max-w-2xl mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Interactive Carousel</h2>
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="w-full h-64 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
            Slide 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-64 bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
            Slide 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-64 bg-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            Slide 3
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselControls />
    </Carousel>
  </div>
);

// Render the component
render(<ExampleCarousel />);
