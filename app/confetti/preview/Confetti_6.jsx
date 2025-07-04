
const images = [
  "https://img.icons8.com/?size=100&id=63230&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=t0pRVC1Kipju&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=17570&format=png&color=000000",
];

const generateRandom = (min, max) => Math.random() * (max - min) + min;

const ConfettiPiece = ({
  delay,
  duration,
  startX,
  endX,
  endY,
  size,
  imageUrl,
}) => {
  return (
    <motion.div
      className="absolute"
      style={{ width: `${size}px`, height: `${size}px` }}
      initial={{ opacity: 0, x: startX, y: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x: endX,
        y: endY,
        rotate: [0, 720],
        scale: [1, 1.5, 1],
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img src={imageUrl} alt="confetti" className="w-full h-full object-contain" />
    </motion.div>
  );
};

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    const pieces = Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      delay: generateRandom(0, 2),
      duration: generateRandom(3, 6),
      startX: generateRandom(0, typeof window !== 'undefined' ? window.innerWidth : 800),
      endX: generateRandom(-300, 300),
      endY: generateRandom(
        typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
        typeof window !== 'undefined' ? window.innerHeight : 800
      ),
      size: generateRandom(30, 60),
      imageUrl: images[Math.floor(generateRandom(0, images.length))],
    }));

    setConfettiPieces(pieces);
  }, []);

  if (confettiPieces.length === 0) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {confettiPieces.map(({ id, delay, duration, startX, endX, endY, size, imageUrl }) => (
        <ConfettiPiece
          key={id}
          delay={delay}
          duration={duration}
          startX={startX}
          endX={endX + startX}
          endY={endY}
          size={size}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

render(<Confetti />);
