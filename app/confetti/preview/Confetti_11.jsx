
const fireworkAnimation = `
  @keyframes launch {
    0% {
      transform: translateY(300px) scale(0.1);
      opacity: 1;
    }
    50% {
      transform: translateY(150px) scale(0.2);
      opacity: 0.8;
    }
    100% {
      transform: translateY(0) scale(0.3);
      opacity: 0;
    }
  }

  @keyframes explode {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }

  @keyframes sparkle {
    0%, 100% {
      filter: brightness(1);
      transform: scale(1);
    }
    50% {
      filter: brightness(1.5);
      transform: scale(0.8);
    }
  }
`;

const Confetti = () => {
  const [fireworks, setFireworks] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#FF1493', // Deep Pink
    '#00CED1', // Dark Turquoise
    '#FFD700', // Gold
    '#FF4500', // Orange Red
    '#9370DB', // Medium Purple
    '#32CD32', // Lime Green
  ];

  const createFirework = (id, launchDelay) => {
    const pieces = [];
    const numPieces = 24;
    const angleStep = (2 * Math.PI) / numPieces;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = 20 + Math.random() * 60;
    const top = 20 + Math.random() * 60;

    for (let i = 0; i < numPieces; i++) {
      const angle = i * angleStep;
      const distance = Math.random() * 50 + 50;
      pieces.push({
        id: i,
        color,
        size: Math.random() * 4 + 2,
        angle,
        distance,
        delay: Math.random() * 0.2,
      });
    }

    return {
      id,
      pieces,
      left,
      top,
      color,
      launchDelay,
    };
  };

  const createFireworks = () => {
    const newFireworks = [];
    const numFireworks = 5;

    for (let i = 0; i < numFireworks; i++) {
      newFireworks.push(createFirework(i, i * 0.5));
    }

    setFireworks(newFireworks);
  };

  useEffect(() => {
    if (isActive) {
      createFireworks();
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      <style>{fireworkAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #FF1493, #00CED1)',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
        }}
      >
        Firework Confetti
      </button>

      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '16px',
        background: 'linear-gradient(45deg, #0f0f0f, #1a1a1a)',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)',
      }}>
        {isActive && fireworks.map((firework) => (
          <React.Fragment key={firework.id}>
            {/* Launch trail */}
            <div
              style={{
                position: 'absolute',
                width: '4px',
                height: '20px',
                left: `${firework.left}%`,
                bottom: '0',
                background: firework.color,
                borderRadius: '2px',
                animation: 'launch 1s ease-out forwards',
                animationDelay: `${firework.launchDelay}s`,
              }}
            />
            {/* Explosion pieces */}
            {firework.pieces.map((piece) => {
              const x = Math.cos(piece.angle) * piece.distance;
              const y = Math.sin(piece.angle) * piece.distance;
              
              return (
                <div
                  key={piece.id}
                  style={{
                    position: 'absolute',
                    width: `${piece.size}px`,
                    height: `${piece.size}px`,
                    left: `${firework.left}%`,
                    top: `${firework.top}%`,
                    background: piece.color,
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: `
                      explode 1s ease-out forwards,
                      sparkle 0.5s ease-in-out infinite
                    `,
                    animationDelay: `${firework.launchDelay + piece.delay}s`,
                    transformOrigin: 'center',
                    willChange: 'transform, opacity',
                  }}
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

render(<Confetti />);
