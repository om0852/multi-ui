
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
          className="w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <motion.div
          className="w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </div>
    </div>
  );
};

render(<Loader />);
