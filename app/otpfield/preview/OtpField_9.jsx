
const InputOTPSlot = ({
  index,
  value,
  onChange,
  onKeyDown,
  invalid,
}) => {
  return (
    <motion.input
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value, index)}
      onKeyDown={onKeyDown}
      className={`w-14 h-14 text-center text-2xl font-bold rounded-lg ${
        invalid
          ? "bg-red-600/20 text-red-300 border-red-500"
          : "bg-black text-green-300 border-green-500"
      } border-2 focus:outline-none focus:ring ${
        invalid ? "focus:ring-red-500" : "focus:ring-green-400"
      }`}
      animate={invalid ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 0.3 }}
    />
  );
};

const InputOTPGroup = ({ children }) => {
  return <div className="flex items-center space-x-4">{children}</div>;
};

const InputOTPSeparator = () => (
  <div className="text-3xl font-bold text-green-300 animate-pulse">|</div>
);

const InputOTP = ({
  maxLength = 6,
  onComplete = () => {},
  validationRegex = /^[0-9]*$/,
}) => {
  const [otp, setOtp] = useState(Array(maxLength).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [invalidIndexes, setInvalidIndexes] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const handleChange = (value, index) => {
    if (value.match(validationRegex)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setInvalidIndexes((prev) => prev.filter((i) => i !== index));
      
      const allFilled = newOtp.every(slot => slot !== "");
      setIsComplete(allFilled);
      
      if (value && index < maxLength - 1) {
        focusNextSlot(index);
      }
    } else {
      setInvalidIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
    }
  };

  const focusNextSlot = (index) => {
    const nextIndex = index + 1;
    if (nextIndex < maxLength) {
      setFocusedIndex(nextIndex);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (newOtp[index] === "" && index > 0) {
        setFocusedIndex(index - 1);
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
        setIsComplete(false);
        setShowSuccess(false);
      }
    } else if (e.key === "ArrowRight" && index < maxLength - 1) {
      setFocusedIndex(index + 1);
    } else if (e.key === "ArrowLeft" && index > 0) {
      setFocusedIndex(index - 1);
    }
  };

  useEffect(() => {
    if (focusedIndex !== null) {
      document.querySelectorAll("input")[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  useEffect(() => {
    if (isComplete && otp.every((slot) => slot !== "")) {
      onComplete(otp.join(""));
      setShowSuccess(true);
    }
  }, [isComplete, otp, onComplete]);

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => setRemainingTime(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [remainingTime]);

  const handleComplete = async (completedOtp) => {
    setIsLoading(true);
    setStatus("Verifying your code...");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, consider 123456 as the correct OTP
    const isValid = completedOtp === "123456";
    
    if (isValid) {
      setStatus("Verification successful!");
      setShowSuccess(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      setStatus("Invalid code. Please try again.");
    }
    
    setIsLoading(false);
  };

  const handleResend = () => {
    if (!canResend) return;
    
    setStatus("New code sent to your device");
    setCanResend(false);
    setRemainingTime(60);
    
    // Clear status after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [0.1, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </motion.div>
        ))}
      </div>
      
      {showConfetti && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `hsl(${Math.random() * 60 + 100}, 100%, 50%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: Math.sin(i * 7.2 * (Math.PI / 180)) * 300,
                y: Math.cos(i * 7.2 * (Math.PI / 180)) * 300,
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                repeat: 1,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      )}
      
      <div className="relative w-full max-w-md z-10">
        <motion.div 
          className="bg-black/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border-2 border-green-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 text-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-green-400/30 to-transparent blur-sm"></div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-green-300 mb-2 font-mono">
              SECURE ACCESS
            </h2>
            <p className="text-green-200/80 mb-8 text-sm">
              ENTER VERIFICATION CODE
            </p>
            
            <div className="relative">
              <InputOTP 
                maxLength={6} 
                onComplete={handleComplete}
                validationRegex={/^[0-9]*$/}
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-xl -z-10"></div>
            </div>
            
            <div className="mt-8 min-h-8">
              {isLoading ? (
                <div className="inline-flex items-center text-green-400 text-sm">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {status}
                </div>
              ) : status ? (
                <div className={`text-sm font-mono ${
                  status.includes("successful") 
                    ? "text-green-400" 
                    : "text-red-400"
                }`}>
                  {status}
                </div>
              ) : null}
            </div>
            
            <div className="mt-8 pt-6 border-t border-green-500/20">
              <button 
                onClick={handleResend}
                disabled={!canResend}
                className={`text-sm font-mono ${
                  canResend 
                    ? "text-green-400 hover:text-green-300"
                    : "text-green-600 cursor-not-allowed"
                } transition-colors duration-200`}
              >
                {canResend 
                  ? "[ RESEND CODE ]" 
                  : `[ RESEND IN ${remainingTime}S ]`}
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 text-center border-t border-green-500/10">
            <p className="text-xs text-green-400/60 font-mono">
              SECURITY PROTOCOL ACTIVE • EXPIRES IN 5:00
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button className="text-sm text-green-500/70 hover:text-green-400 transition-colors duration-200 flex items-center justify-center mx-auto font-mono">
            [ RETURN TO LOGIN ]
          </button>
        </motion.div>
      </div>
    </div>
  );
};

render(<OtpFieldDemo />);
