
const animations = {
  dropIn: {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100vh", opacity: 0 },
  },
  zoomBounce: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: [1, 1.1, 1], opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  slideDiagonal: {
    initial: { x: "100vw", y: "-100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "100vw", y: "-100vh", opacity: 0 },
  },
};

function Dialog({ children, className }) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

function DialogTrigger({ children, onClick, className }) {
  return (
    <button
      className={`bg-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-colors ${className || ""}`}
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
  animationType = "dropIn",
  className,
}) {
  if (!isOpen) return null;

  const animation = animations[animationType] || animations.dropIn;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 z-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`bg-white rounded-lg shadow-xl w-full max-w-[90%] sm:max-w-md md:max-w-lg p-4 sm:p-8 relative overflow-y-auto max-h-[90vh] ${className || ""}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>
  );
}

function DialogHeader({ children, className }) {
  return <div className={`mb-4 text-center ${className || ""}`}>{children}</div>;
}

function DialogTitle({ children, className }) {
  return <h2 className={`text-lg sm:text-2xl font-bold text-gray-900 ${className || ""}`}>{children}</h2>;
}

function DialogDescription({ children, className }) {
  return <p className={`text-sm sm:text-base text-gray-600 mt-2 text-center ${className || ""}`}>{children}</p>;
}

function DialogFooter({ children, className }) {
  return <div className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 ${className || ""}`}>{children}</div>;
}

function Example() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-8">
      <Dialog>
        <DialogTrigger onClick={() => setIsDialogOpen(true)}>
          Launch Modal
        </DialogTrigger>
        <DialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType="zoomBounce"
        >
          <DialogHeader>
            <DialogTitle>Attention Required</DialogTitle>
            <DialogDescription>
              Do you wish to proceed with this action? Please confirm below.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Action confirmed!");
              }}
              className="w-full sm:w-auto bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
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
