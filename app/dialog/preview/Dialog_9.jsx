
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

function StyledDialogTrigger({ children, onClick, className }) {
  return (
    <button
      className={`bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 text-white py-2 px-4 rounded-xl shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-xl z-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.6 }}
        className={`bg-gradient-to-br from-gray-900 via-slate-800 to-gray-600 text-white rounded-lg shadow-xl w-full max-w-[90%] sm:max-w-lg p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] border border-gray-500 ${className || ""}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-200 hover:text-white focus:outline-none z-10"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </div>
  );
}

function StyledDialogHeader({ children, className }) {
  return <div className={`mb-4 text-white text-lg font-semibold ${className || ""}`}>{children}</div>;
}

function StyledDialogTitle({ children, className }) {
  return <h2 className={`text-2xl sm:text-3xl font-extrabold text-lime-400 ${className || ""}`}>{children}</h2>;
}

function StyledDialogDescription({ children, className }) {
  return <p className={`text-gray-300 mt-2 text-sm sm:text-base ${className || ""}`}>{children}</p>;
}

function StyledDialogFooter({ children, className }) {
  return <div className={`mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 ${className || ""}`}>{children}</div>;
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
          Open Gradient Dialog
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            <StyledDialogTitle>Sleek Gradient Design</StyledDialogTitle>
            <StyledDialogDescription>
              This dialog features a sleek gradient design with smooth animations. Experiment with the styles and enjoy the minimalist aesthetic!
            </StyledDialogDescription>
          </StyledDialogHeader>
          <StyledDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto bg-gray-400 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Action confirmed!");
              }}
              className="w-full sm:w-auto bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-400"
            >
              Confirm
            </button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}

render(<DialogExample />);
