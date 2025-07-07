
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
          className="absolute w-8 h-8 border-4 border-blue-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 border-4 border-green-500 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: "linear",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 border-4 border-red-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "linear",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 border-4 border-yellow-500 rounded-full"
          animate={{
            rotate: -360,
            y: ["0%", "-20%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </div>
    </div>
  );
};

render(<Loader />);
