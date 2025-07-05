const Label_13 = ({ text, glowColor = "#3b82f6", className = "" }) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg blur-lg"
        style={{ backgroundColor: glowColor }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="relative inline-block px-4 py-2 rounded-lg text-white font-medium"
        style={{ backgroundColor: glowColor }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-900 rounded-lg">
      <Label_13 text="Trending" glowColor="#3b82f6" />
      <Label_13 text="Popular" glowColor="#ec4899" />
      <Label_13 text="Featured" glowColor="#8b5cf6" />
    </div>
  );
};

render(<Demo />);
