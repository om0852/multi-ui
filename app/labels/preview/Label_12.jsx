const Label_12 = ({ text, time, type = "countdown", className = "" }) => {
  const colors = {
    countdown: "bg-amber-50 text-amber-700 border-amber-200",
    elapsed: "bg-indigo-50 text-indigo-700 border-indigo-200",
  };

  return (
    <motion.div
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-md
        border ${colors[type]} ${className}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-sm font-medium">{text}</span>
      <motion.span
        className="text-sm font-semibold"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {time}
      </motion.span>
    </motion.div>
  );
};

const Demo = () => {
  const [time, setTime] = React.useState(150); // 2:30 in seconds
  const [elapsed, setElapsed] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0));
      setElapsed(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  return (
    <div className="flex flex-wrap gap-4">
      <Label_12 
        text="Starts in" 
        time={formatTime(time)} 
        type="countdown" 
      />
      <Label_12 
        text="Time elapsed" 
        time={formatTime(elapsed)} 
        type="elapsed" 
      />
    </div>
  );
};

render(<Demo />);
