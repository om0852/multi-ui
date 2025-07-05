const Label_4 = ({ text, count, className = "" }) => {
  return (
    <motion.div
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        bg-white border shadow-sm ${className}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2 }}
    >
      <span className="text-sm font-medium text-gray-700">{text}</span>
      {count !== undefined && (
        <motion.span
          className="ml-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {count}
        </motion.span>
      )}
    </motion.div>
  );
};

const Demo = () => {
  return (
    <div className="space-x-2">
      <Label_4 text="Messages" count={3} />
      <Label_4 text="Notifications" count={12} />
      <Label_4 text="Updates" count={5} />
    </div>
  );
};

render(<Demo />);
