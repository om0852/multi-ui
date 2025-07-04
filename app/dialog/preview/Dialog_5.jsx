
const neonAnimations = {
  glow: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, boxShadow: "0 0 20px #0ff, 0 0 40px #0ff" },
    exit: { opacity: 0, scale: 0.8, boxShadow: "0 0 0 #0ff" },
  },
};

function NeonDialog({ children, className }) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

function NeonDialogTrigger({ children, onClick, className }) {
  return (
    <button
      className={`bg-black text-cyan-300 py-2 px-4 rounded-lg hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function NeonDialogContent({
  children,
  isOpen,
  onClose,
  className,
}) {
  if (!isOpen) return null;

  const animation = neonAnimations.glow;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 z-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.4 }}
        className={`bg-black text-cyan-300 rounded-lg shadow-lg w-full max-w-[90%] sm:max-w-md md:max-w-lg p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] border border-cyan-300 ${className || ""}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-cyan-400 hover:text-cyan-500 focus:outline-none z-10"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </div>
  );
}

function NeonDialogHeader({ children, className }) {
  return <div className={`mb-4 text-cyan-400 ${className || ""}`}>{children}</div>;
}

function NeonDialogTitle({ children, className }) {
  return <h2 className={`text-xl sm:text-2xl font-bold text-cyan-300 ${className || ""}`}>{children}</h2>;
}

function NeonDialogDescription({ children, className }) {
  return <p className={`text-sm sm:text-base text-cyan-500 mt-2 ${className || ""}`}>{children}</p>;
}

function NeonDialogFooter({ children, className }) {
  return <div className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 ${className || ""}`}>{children}</div>;
}

function NeonExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-4 bg-black min-h-screen flex items-center justify-center">
      <NeonDialog>
        <NeonDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Neon Dialog
        </NeonDialogTrigger>
        <NeonDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        >
          <NeonDialogHeader>
            <NeonDialogTitle>Neon Action Required</NeonDialogTitle>
            <NeonDialogDescription>
              Confirm your neon-powered action. This will light up your day!
            </NeonDialogDescription>
          </NeonDialogHeader>
          <NeonDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto bg-gray-800 text-cyan-300 py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Neon action confirmed!");
              }}
              className="w-full sm:w-auto bg-cyan-300 text-black py-2 px-4 rounded-lg hover:bg-cyan-400"
            >
              Confirm
            </button>
          </NeonDialogFooter>
        </NeonDialogContent>
      </NeonDialog>
    </div>
  );
}

// Add neon glow animation
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

render(<NeonExample />);
