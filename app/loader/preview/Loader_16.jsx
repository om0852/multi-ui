
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="relative w-32 h-32">
        <motion.div
          className="absolute w-8 h-8 bg-blue-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-green-500 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-red-500 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-yellow-500 rounded-full"
          animate={{
            rotate: 360,
            y: ["0%", "-20%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </div>
    </div>
  );
};

render(<Loader />);
