const Label_10 = ({ text, subtext, className = "" }) => {
  return (
    <motion.div
      className={`
        relative inline-flex flex-col items-center px-4 py-2
        bg-white rounded-lg shadow-lg ${className}
      `}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
    >
      <span className="text-sm font-semibold text-gray-700">{text}</span>
      {subtext && (
        <span className="text-xs text-gray-500">{subtext}</span>
      )}
      <motion.div
        className="absolute -bottom-1 left-1/2 w-4 h-4 bg-white rotate-45"
        style={{ marginLeft: "-8px" }}
      />
    </motion.div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <Label_10 text="Premium Plan" subtext="$29/month" />
      <Label_10 text="Team Plan" subtext="$99/month" />
      <Label_10 text="Enterprise" subtext="Custom pricing" />
    </div>
  );
};

render(<Demo />);
