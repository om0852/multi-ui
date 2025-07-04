
const confettiImages = [
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTEyIDEuNWwzLjA5IDYuMjYgNi45MSAxLS41IDcuMjUtNi41IDQuOTlMMTIgMTcuMjVsLTMuMDkgMy43NS02LjUtNC45OS0uNS03LjI1IDYuOTEtMUwxMiAxLjV6Ii8+PC9zdmc+",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM0MTY5RTEiLz48L3N2Zz4=",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGNjk0NyIgZD0iTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc4IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6Ii8+PC9zdmc+",
];

const generateRandom = (min, max) => Math.random() * (max - min) + min;

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    const generatePieces = () => {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
      const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 600;
      
      const pieces = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        delay: generateRandom(0, 2),
        duration: generateRandom(3, 6),
        startX: generateRandom(0, screenWidth),
        endX: generateRandom(-screenWidth/4, screenWidth/4),
        endY: generateRandom(screenHeight/2, screenHeight),
        size: generateRandom(20, 40),
        imageIndex: Math.floor(generateRandom(0, confettiImages.length)),
        rotate: generateRandom(0, 360),
      }));

      setConfettiPieces(pieces);
    };

    generatePieces();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', generatePieces);
      return () => window.removeEventListener('resize', generatePieces);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
      <style>{
        `@keyframes fall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(5vh) translateX(5vw) rotate(45deg) scale(1);
          }
          100% {
            transform: translateY(100vh) translateX(var(--end-x)) rotate(var(--rotate-end)) scale(0.5);
            opacity: 0;
          }
        }
        .confetti-piece {
          position: absolute;
          top: -50px;
          animation: fall var(--duration) ease-in-out forwards;
          animation-delay: var(--delay);
        }`
      }</style>
      
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            '--delay': `${piece.delay}s`,
            '--duration': `${piece.duration}s`,
            '--end-x': `${piece.endX}px`,
            '--rotate-end': `${piece.rotate}deg`,
            left: `${piece.startX}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
          }}
        >
          <img 
            src={confettiImages[piece.imageIndex]} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

render(<Confetti />);
