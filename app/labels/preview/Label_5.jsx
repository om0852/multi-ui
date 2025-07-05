const Label_5 = ({ text, status, className = "" }) => {
  const statusColors = {
    online: "bg-green-500",
    away: "bg-yellow-500",
    offline: "bg-gray-500",
    busy: "bg-red-500",
  };

  return (
    <motion.div
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-lg
        bg-gray-100 ${className}
      `}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.span
        className={`w-2 h-2 rounded-full ${statusColors[status]}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: status === "offline" ? 0.5 : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </motion.div>
  );
};

const Demo = () => {
  return (
    <div className="space-x-2">
      <Label_5 text="John Doe" status="online" />
      <Label_5 text="Jane Smith" status="away" />
      <Label_5 text="Bob Johnson" status="offline" />
      <Label_5 text="Alice Brown" status="busy" />
    </div>
  );
};

render(<Demo />);
