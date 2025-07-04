
const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  slideRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  },
  zoomOut: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -15 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -15 },
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: 90 },
  },
  bounce: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: [0, -15, 0] },
    exit: { opacity: 0, y: -100 },
  },
  swing: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: [10, -10, 5, -5, 0] },
    exit: { opacity: 0, rotate: -10 },
  },
  wobble: {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: [10, -10, 5, -5, 0] },
    exit: { opacity: 0, x: -10 },
  },
  pulse: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: [1, 1.1, 1] },
    exit: { opacity: 0, scale: 0.8 },
  },
  flash: {
    initial: { opacity: 0 },
    animate: { opacity: [1, 0, 1] },
    exit: { opacity: 0 },
  },
};

function Dialog({ children, className }) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

function DialogTrigger({ children, onClick, className }) {
  return (
    <button
      className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-colors ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function DialogContent({
  children,
  isOpen,
  onClose,
  animationType = "fade",
  className,
}) {
  if (!isOpen) return null;

  const defaultAnimation = animations[animationType] || animations.fade;
  const animation = {
    initial: defaultAnimation.initial,
    animate: defaultAnimation.animate,
    exit: defaultAnimation.exit,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.3 }}
        className={`bg-white rounded-lg shadow-lg w-full max-w-[90%] sm:max-w-md md:max-w-lg p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] ${className || ""}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </div>
  );
}

function DialogHeader({ children, className }) {
  return <div className={`mb-4 ${className || ""}`}>{children}</div>;
}

function DialogTitle({ children, className }) {
  return <h2 className={`text-lg sm:text-xl font-semibold text-gray-900 ${className || ""}`}>{children}</h2>;
}

function DialogDescription({ children, className }) {
  return <p className={`text-sm sm:text-base text-gray-600 mt-2 ${className || ""}`}>{children}</p>;
}

function DialogFooter({ children, className }) {
  return <div className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 ${className || ""}`}>{children}</div>;
}

function Example() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Dialog
        </DialogTrigger>
        <DialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType="flip"
        >
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to perform this action? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Action confirmed!");
              }}
              className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Confirm
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

render(<Example />);
