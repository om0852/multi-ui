const Label_8 = ({ text, pulseColor = "#ef4444", className = "" }) => {
  return (
    <motion.div
      className={`
        relative inline-flex items-center px-3 py-1 bg-white
        rounded-full shadow-sm ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="absolute w-2 h-2 rounded-full"
        style={{ backgroundColor: pulseColor }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="ml-4 text-sm font-medium text-gray-700">{text}</span>
    </motion.div>
  );
};

const Demo = () => {
  return (
    <div className="space-x-4">
      <Label_8 text="Recording" pulseColor="#ef4444" />
      <Label_8 text="Live" pulseColor="#22c55e" />
      <Label_8 text="Processing" pulseColor="#3b82f6" />
    </div>
  );
};

render(<Demo />);
