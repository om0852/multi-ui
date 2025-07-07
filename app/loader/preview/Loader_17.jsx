
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute border-4 border-t-blue-500 rounded-full w-24 h-24"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-red-500 rounded-full top-8 left-8"
          animate={{
            rotate: 360,
            y: ["0%", "-30%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-yellow-500 rounded-full top-8 left-8"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-green-500 top-8 left-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

render(<Loader />);
