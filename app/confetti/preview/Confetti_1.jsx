
const colors = ["bg-red-500", "bg-yellow-400", "bg-green-500", "bg-blue-500", "bg-pink-500"];

const generateRandom = (min, max) => Math.random() * (max - min) + min;

const ConfettiPiece = ({ delay, duration, startX, endX, endY, color }) => (
  <motion.div
    className={`absolute w-3 h-3 rounded-full ${color}`}
    initial={{ opacity: 0, x: startX, y: 0 }}
    animate={{
      opacity: [0, 1, 0],
      x: endX,
      y: endY,
    }}
    transition={{
      delay,
      duration,
      repeat: Infinity,
    }}
  />
);

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      delay: generateRandom(0, 2),
      duration: generateRandom(1, 3),
      startX: generateRandom(0, typeof window !== 'undefined' ? window.innerWidth : 500),
      endX: generateRandom(-50, 50),
      endY: generateRandom(300, 600),
      color: colors[Math.floor(generateRandom(0, colors.length))],
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {confettiPieces.map(({ id, delay, duration, startX, endX, endY, color }) => (
        <ConfettiPiece
          key={id}
          delay={delay}
          duration={duration}
          startX={startX}
          endX={endX + startX}
          endY={endY}
          color={color}
        />
      ))}
    </div>
  );
};

render(<Confetti />);
