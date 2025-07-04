
const Confetti = () => {
  const [pieces, setPieces] = useState([]);
  
  const colors = [
    '#FF1493', // Deep Pink
    '#00CED1', // Dark Turquoise
    '#FFD700', // Gold
    '#7B68EE', // Medium Slate Blue
    '#FF4500', // Orange Red
    '#98FB98', // Pale Green
  ];

  // Create spiral confetti pieces
  const createPieces = () => {
    const newPieces = [];
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
    // Adjust number of pieces based on screen size
    const numPieces = Math.min(60, Math.max(30, Math.floor(screenWidth / 20)));
    const angleStep = 360 / numPieces;

    for (let i = 0; i < numPieces; i++) {
      newPieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        angle: i * angleStep,
        delay: i * 0.05,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    setPieces(newPieces);
  };

  useEffect(() => {
    // Create pieces on initial render
    createPieces();
    
    // Re-create on window resize for responsiveness
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', createPieces);
      return () => window.removeEventListener('resize', createPieces);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
      <style>{
        `@keyframes spiral {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(1080deg) translateX(min(150px, 20vw)) scale(1);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
        
        .spiral-piece {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0);
          transform-origin: var(--origin);
          animation: spiral 3s cubic-bezier(0.4, 0, 0.2, 1) forwards,
                    twinkle 0.5s ease-in-out infinite;
          animation-delay: var(--delay);
        }`
      }</style>
      
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="spiral-piece"
          style={{
            '--angle': `${piece.angle}deg`,
            '--delay': `${piece.delay}s`,
            '--origin': piece.direction > 0 ? 'left center' : 'right center',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: piece.size > 6 ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
};

render(<Confetti />);
