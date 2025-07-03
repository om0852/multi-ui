const Collapsible_3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left bg-indigo-600 text-white rounded-lg"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">Animated with Framer Motion</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="inline-block"
          >
            ▼
          </motion.span>
        </div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white border border-t-0 rounded-b-lg">
              <p className="text-gray-700">
                This collapsible uses Framer Motion for smooth animations.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

render(<Collapsible_3 />);
