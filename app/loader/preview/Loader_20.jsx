
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute border-4 border-blue-500 rounded-full"
          style={{
            width: "100%",
            height: "100%",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bg-blue-500 rounded-full opacity-50"
          style={{
            width: "50%",
            height: "50%",
            top: "25%",
            left: "25%",
          }}
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <div 
          className="absolute bg-blue-500 rounded-full" 
          style={{ 
            width: "10px", 
            height: "10px", 
            top: "calc(50% - 5px)", 
            left: "calc(50% - 5px)" 
          }} 
        />
      </div>
    </div>
  );
};

render(<Loader />);
