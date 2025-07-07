
const PyramidSide = ({ transform, gradient }) => (
  <div
    className={`absolute w-20 h-20 bg-gradient-to-r ${gradient}`}
    style={{
      transform,
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    }}
  />
);

const Shadow = () => (
  <div
    className="absolute w-full h-screen bg-purple-700 rounded-full blur-md"
    style={{
      transform: "rotateX(90deg) translateZ(-40px)",
      top: "50%",
      left: "50%",
      transformOrigin: "center",
    }}
  />
);

const PyramidLoader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-72 h-72">
        <motion.div
          className="absolute inset-0 w-full h-full origin-top-center"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: [0, 360] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        >
          <PyramidSide
            transform="rotateZ(-30deg) rotateY(90deg)"
            gradient="from-teal-400 via-pink-500 to-indigo-500"
          />
          <PyramidSide
            transform="rotateZ(30deg) rotateY(90deg)"
            gradient="from-indigo-500 via-purple-300 to-teal-400"
          />
          <PyramidSide
            transform="rotateX(30deg)"
            gradient="from-purple-500 via-pink-400 to-teal-400"
          />
          <PyramidSide
            transform="rotateX(-30deg)"
            gradient="from-teal-400 via-pink-500 to-indigo-500"
          />
          <Shadow />
        </motion.div>
      </div>
    </div>
  );
};

render(<PyramidLoader />);
