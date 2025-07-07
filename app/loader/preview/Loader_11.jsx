
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex space-x-4">
        <motion.div
          className="w-6 h-6 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-6 h-6 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <motion.div
          className="w-6 h-6 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
      </div>
    </div>
  );
};

render(<Loader />);
