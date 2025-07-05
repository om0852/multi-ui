const Label_15 = ({ text, type = "loading", className = "" }) => {
  const variants = {
    success: {
      bg: "bg-green-50",
      text: "text-green-700",
      icon: (
        <motion.svg
          className="w-4 h-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </motion.svg>
      ),
    },
    error: {
      bg: "bg-red-50",
      text: "text-red-700",
      icon: (
        <motion.svg
          className="w-4 h-4 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </motion.svg>
      ),
    },
    loading: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      icon: (
        <motion.svg
          className="w-4 h-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </motion.svg>
      ),
    },
  };

  return (
    <motion.div
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-md
        ${variants[type].bg} ${variants[type].text} ${className}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {variants[type].icon}
      <span className="text-sm font-medium">{text}</span>
    </motion.div>
  );
};

const Demo = () => {
  const [status, setStatus] = React.useState("loading");
  
  React.useEffect(() => {
    const timer1 = setTimeout(() => setStatus("success"), 2000);
    const timer2 = setTimeout(() => setStatus("error"), 4000);
    const timer3 = setTimeout(() => setStatus("loading"), 6000);
    
    const interval = setInterval(() => {
      setStatus(prev => {
        if (prev === "loading") return "success";
        if (prev === "success") return "error";
        return "loading";
      });
    }, 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, []);
  
  const getStatusText = () => {
    switch(status) {
      case "success": return "Operation successful";
      case "error": return "Failed to connect";
      default: return "Processing request...";
    }
  };
  
  return (
    <div className="space-y-4">
      <Label_15 text={getStatusText()} type={status} />
      <div className="space-x-4">
        <button 
          onClick={() => setStatus("success")}
          className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200"
        >
          Show Success
        </button>
        <button 
          onClick={() => setStatus("loading")}
          className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
        >
          Show Loading
        </button>
        <button 
          onClick={() => setStatus("error")}
          className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200"
        >
          Show Error
        </button>
      </div>
    </div>
  );
};

render(<Demo />);
