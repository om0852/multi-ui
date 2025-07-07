
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="relative w-20 h-12">
        <motion.span
          className="absolute top-0 left-0 text-lg text-purple-300 font-semibold tracking-wide"
          animate={{
            letterSpacing: ["1px", "2px", "1px"],
            x: ["0px", "26px", "32px", "0px", "0px"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
          }}
        >
          loading
        </motion.span>

        <motion.div
          className="absolute bottom-0 left-0 bg-purple-500 rounded-full w-4 h-4"
          animate={{
            x: ["0px", "64px", "0px", "64px", "0px"],
            width: ["16px", "100%", "16px", "100%", "16px"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-purple-200 rounded-full"
            animate={{
              width: ["16px", "80%", "100%", "80%", "16px"],
              x: ["0px", "0%", "0px", "15px", "0px"],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

render(<Loader />);
