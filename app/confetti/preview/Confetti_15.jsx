
const bubbleAnimation = `
  @keyframes float {
    0% {
      transform: translate(0, 100vh) scale(1);
      opacity: 0;
    }
    10% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      transform: translate(var(--x-move), -20px) scale(1.2);
      opacity: 0;
    }
  }

  @keyframes wobble {
    0%, 100% {
      transform: translateX(0) scale(1);
    }
    33% {
      transform: translateX(-5px) scale(1.1);
    }
    66% {
      transform: translateX(5px) scale(0.9);
    }
  }

  @keyframes shine {
    0%, 100% {
      filter: brightness(1) contrast(1);
    }
    50% {
      filter: brightness(1.3) contrast(1.1);
    }
  }
`;

const Confetti = () => {
  const [bubbles, setBubbles] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    'rgba(135, 206, 235, 0.6)', // Sky Blue
    'rgba(176, 224, 230, 0.6)', // Powder Blue
    'rgba(0, 191, 255, 0.6)',   // Deep Sky Blue
    'rgba(72, 209, 204, 0.6)',  // Medium Turquoise
    'rgba(127, 255, 212, 0.6)', // Aquamarine
    'rgba(175, 238, 238, 0.6)', // Pale Turquoise
  ];

  const createBubbles = () => {
    const newBubbles = [];
    const numBubbles = 50;

    for (let i = 0; i < numBubbles; i++) {
      newBubbles.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 20 + 10,
        xMove: Math.random() * 100 - 50,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 4,
        wobbleSpeed: Math.random() * 0.5 + 0.5,
      });
    }

    setBubbles(newBubbles);
  };

  useEffect(() => {
    if (isActive) {
      createBubbles();
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 7000);
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
      <style>{bubbleAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #87CEEB, #48D1CC)',
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
        Bubble Confetti
      </button>

      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '16px',
        background: 'linear-gradient(45deg, #1a1a1a, #2d2d2d)',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)',
      }}>
        {isActive && bubbles.map((bubble) => {
          const bubbleStyle = {
            position: 'absolute',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: '50%',
            bottom: '-20px',
            background: bubble.color,
            borderRadius: '50%',
            transform: 'translateX(-50%)',
            '--x-move': `${bubble.xMove}px`,
            animation: `
              float ${bubble.duration}s ease-out forwards,
              wobble ${bubble.wobbleSpeed}s ease-in-out infinite,
              shine ${bubble.wobbleSpeed * 0.5}s ease-in-out infinite
            `,
            animationDelay: `${bubble.delay}s`,
            boxShadow: 'inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.1)',
          };
          
          return (
            <div
              key={bubble.id}
              style={bubbleStyle}
            >
              {/* Bubble shine effect */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '30%',
                height: '30%',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '50%',
                transform: 'rotate(-45deg)',
              }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

render(<Confetti />);
