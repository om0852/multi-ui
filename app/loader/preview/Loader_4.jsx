
const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
    },
    loader: {
      position: 'relative',
      width: '120px',
      height: '90px',
      margin: '0 auto',
    },
    loaderBefore: {
      content: '""',
      position: 'absolute',
      bottom: '30px',
      left: '50px',
      height: '30px',
      width: '30px',
      borderRadius: '50%',
      background: '#2a9d8f',
      animation: 'loading-bounce 0.5s ease-in-out infinite alternate',
    },
    loaderAfter: {
      content: '""',
      position: 'absolute',
      right: '0',
      top: '0',
      height: '7px',
      width: '45px',
      borderRadius: '4px',
      boxShadow: '0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2',
      animation: 'loading-step 1s ease-in-out infinite',
    },
    keyframes: `
      @keyframes loading-bounce {
        0% { transform: scale(1, 0.7); }
        40% { transform: scale(0.8, 1.2); }
        60% { transform: scale(1, 1); }
        100% { bottom: 140px; }
      }
      @keyframes loading-step {
        0% {
          box-shadow: 0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 90px 0 #f2f2f2;
        }
        100% {
          box-shadow: 0 10px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 90px 0 #f2f2f2, -70px 90px 0 rgba(0, 0, 0, 0);
        }
      }
    `,
  };

  return (
    <div style={styles.wrapper}>
      <style>{styles.keyframes}</style>
      <div style={styles.loader}>
        <div style={styles.loaderBefore} />
        <div style={styles.loaderAfter} />
      </div>
    </div>
  );
};

render(<Loader />);
