
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <motion.div
        className="relative w-16 h-16 rounded-full border-t-4 border-t-blue-500 border-gray-200"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
      </motion.div>
    </div>
  );
};

render(<Loader />);
