
const Loader = () => {
  const [mounted, setMounted] = useState(false);
  const size = 200;
  const color = "#000000";
  const speed = 2;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const hexArray = Array.from({ length: 3 * 6 }, (_, index) => index);

  const styles = {
    socket: {
      width: `${size}px`,
      height: `${size}px`,
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
    hexBrick: {
      background: color,
      width: `${size / 7}px`,
      height: `${size / 14}px`,
      position: 'absolute',
      top: '5px',
      animation: `fade ${speed}s infinite`,
    },
    h2: {
      transform: 'rotate(60deg)',
    },
    h3: {
      transform: 'rotate(-60deg)',
    },
    gel: {
      height: `${size / 7}px`,
      width: `${size / 7}px`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      animation: `pulse ${speed}s infinite`,
    },
    keyframes: `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(0.01); }
        100% { transform: scale(1); }
      }
      @keyframes fade {
        0% { background: #252525; }
        50% { background: ${color}; }
        100% { background: #353535; }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.socket}>
        {hexArray.map((_, index) => (
          <div key={index} style={styles.gel}>
            <div style={styles.hexBrick} className="h1" />
            <div style={{ ...styles.hexBrick, ...styles.h2 }} className="h2" />
            <div style={{ ...styles.hexBrick, ...styles.h3 }} className="h3" />
          </div>
        ))}
      </div>
    </>
  );
};

render(<Loader />);
