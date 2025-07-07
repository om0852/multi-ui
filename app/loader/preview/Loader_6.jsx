
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center h-screen w-full space-x-2">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="h-5 w-5 rounded-full bg-blue-300"
          initial={{ scale: 0.8, backgroundColor: "#b3d4fc" }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            backgroundColor: ["#b3d4fc", "#6793fb", "#b3d4fc"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

render(<Loader />);
