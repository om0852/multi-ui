
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
};

function StyledDialog({ children, className }) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

function StyledDialogTrigger({ children, onClick, className }) {
  return (
    <button
      className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${className || ""}`}
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 p-4 z-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.4 }}
        className={`bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-lg shadow-2xl w-full max-w-[90%] sm:max-w-md md:max-w-lg p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] border border-gray-500 ${className || ""}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-300 hover:text-gray-100 focus:outline-none z-10"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </div>
  );
}

function StyledDialogHeader({ children, className }) {
  return <div className={`mb-4 text-white text-base sm:text-lg font-semibold ${className || ""}`}>{children}</div>;
}

function StyledDialogTitle({ children, className }) {
  return <h2 className={`text-xl sm:text-2xl font-bold text-purple-300 ${className || ""}`}>{children}</h2>;
}

function StyledDialogDescription({ children, className }) {
  return <p className={`text-sm sm:text-base text-gray-400 mt-2 ${className || ""}`}>{children}</p>;
}

function StyledDialogFooter({ children, className }) {
  return <div className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 ${className || ""}`}>{children}</div>;
}

function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("slideUp");

  return (
    <div className="p-4 bg-gray-900 min-h-screen flex flex-col items-center justify-center space-y-4">
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
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Styled Dialog
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            <StyledDialogTitle>Choose Your Animation</StyledDialogTitle>
            <StyledDialogDescription>
              This dialog demonstrates multiple animation styles. Select an animation and open the dialog again to see it in action!
            </StyledDialogDescription>
          </StyledDialogHeader>
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
              className="w-full sm:w-auto bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-400"
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
