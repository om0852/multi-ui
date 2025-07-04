
const animationStyles = {
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  },
  fadeInOut: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scaleIn: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  rotateZoom: {
    initial: { scale: 0.8, rotate: -10, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0.8, rotate: 10, opacity: 0 },
  },
};

function StyledDialog({ children, className }) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

function StyledDialogContent({
  children,
  isOpen,
  onClose,
  animationType,
  className,
}) {
  if (!isOpen) return null;

  const animation = animationStyles[animationType];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm z-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.6 }}
        className={`relative bg-gradient-to-br from-gray-800 to-black text-white rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-[90%] sm:max-w-lg overflow-y-auto max-h-[90vh] border-2 border-cyan-400 border-dotted 
          before:content-[''] before:absolute before:inset-0 before:border-[3px] before:border-dotted before:border-lime-500 before:rounded-xl before:animate-pulse ${className || ""}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-cyan-300 hover:text-white focus:outline-none transition duration-300 z-10"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </div>
  );
}

function StyledDialogTrigger({ children, onClick, className }) {
  return (
    <button
      className={`bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 sm:px-6 rounded-full shadow-lg hover:shadow-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StyledDialogHeader({ children, className }) {
  return (
    <div className={`mb-4 ${className || ""}`}>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 neon-text">{children}</h2>
    </div>
  );
}

function StyledDialogDescription({ children, className }) {
  return <p className={`text-cyan-200 mt-2 text-sm sm:text-base ${className || ""}`}>{children}</p>;
}

function StyledDialogFooter({ children, className }) {
  return (
    <div className={`mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 ${className || ""}`}>
      {children}
    </div>
  );
}

function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("slideUp");

  return (
    <div className="p-4 bg-gradient-to-bl from-gray-700 to-black min-h-screen flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400"
          onClick={() => setAnimationType("slideUp")}
        >
          Slide Up
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400"
          onClick={() => setAnimationType("fadeInOut")}
        >
          Fade In/Out
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400"
          onClick={() => setAnimationType("scaleIn")}
        >
          Scale In
        </button>
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-400"
          onClick={() => setAnimationType("rotateZoom")}
        >
          Rotate Zoom
        </button>
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Neon Dialog
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            Neon Dialog Title
          </StyledDialogHeader>
          <StyledDialogDescription>
            This dialog features a sleek gradient design with smooth animations. Experiment with the styles and enjoy the minimalist aesthetic!
          </StyledDialogDescription>
          <StyledDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Action confirmed!");
              }}
              className="w-full sm:w-auto bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-400"
            >
              Confirm
            </button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}

// Add neon text animation
const style = document.createElement('style');
style.textContent = `
  @keyframes neon-glow {
    from {
      text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff;
    }
    to {
      text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff;
    }
  }
  
  .neon-text {
    animation: neon-glow 1.5s ease-in-out infinite alternate;
  }
`;
document.head.appendChild(style);

render(<DialogExample />);
