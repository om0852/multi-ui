
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex space-x-2">
        <motion.div
          className="w-4 h-4 bg-purple-500 rounded-full"
          animate={{
            y: ["0", "-10px", "0"],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-4 h-4 bg-purple-500 rounded-full"
          animate={{
            y: ["0", "-10px", "0"],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <motion.div
          className="w-4 h-4 bg-purple-500 rounded-full"
          animate={{
            y: ["0", "-10px", "0"],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
      </div>
    </div>
  );
};

render(<Loader />);
