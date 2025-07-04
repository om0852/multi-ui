
const rainAnimation = `
  @keyframes fall {
    0% {
      transform: translateY(-20px) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(320px) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes sway {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px);
    }
  }

  @keyframes glisten {
    0%, 100% {
      filter: brightness(1) contrast(1);
    }
    50% {
      filter: brightness(1.3) contrast(1.1);
    }
  }
`;

const Confetti = () => {
  const [drops, setDrops] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#4169E1', // Royal Blue
    '#87CEEB', // Sky Blue
    '#B0E0E6', // Powder Blue
    '#00CED1', // Dark Turquoise
    '#48D1CC', // Medium Turquoise
    '#40E0D0', // Turquoise
  ];

  const shapes = ['circle', 'line', 'diamond'];

  const createDrops = () => {
    const newDrops = [];
    const numDrops = 100;

    for (let i = 0; i < numDrops; i++) {
      newDrops.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 2,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: Math.random() * 1 + 2,
        swayAmount: Math.random() * 30 - 15,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      });
    }

    setDrops(newDrops);
  };

  useEffect(() => {
    if (isActive) {
      createDrops();
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const getShapeStyle = (shape, size) => {
    switch (shape) {
      case 'circle':
        return {
          borderRadius: '50%',
          width: `${size}px`,
          height: `${size}px`,
        };
      case 'line':
        return {
          width: `${size / 2}px`,
          height: `${size * 2}px`,
          borderRadius: `${size / 4}px`,
        };
      case 'diamond':
        return {
          width: `${size}px`,
          height: `${size}px`,
          transform: 'rotate(45deg)',
        };
      default:
        return {};
    }
  };

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      <style>{rainAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #4169E1, #00CED1)',
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
        Rain Confetti
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
        {isActive && drops.map((drop) => {
          const shapeStyle = getShapeStyle(drop.shape, drop.size);
          return (
            <div
              key={drop.id}
              style={{
                position: 'absolute',
                left: `${drop.left}%`,
                top: '-20px',
                background: drop.color,
                ...shapeStyle,
                animation: `
                  fall ${drop.duration}s linear infinite,
                  sway ${drop.duration * 0.5}s ease-in-out infinite,
                  glisten ${drop.duration * 0.3}s ease-in-out infinite
                `,
                animationDelay: `${drop.delay}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

render(<Confetti />);
