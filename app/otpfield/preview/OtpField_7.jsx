
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
      className={`w-14 h-14 text-center text-2xl font-mono font-bold rounded-lg ${
        invalid
          ? "border-red-500 text-red-500"
          : "border-transparent text-white"
      } bg-gray-900/80 border-2 shadow-lg focus:ring-4 ${
        invalid ? "focus:ring-red-500" : "focus:ring-cyan-500"
      } focus:outline-none backdrop-blur-sm`}
      style={{
        boxShadow: invalid
          ? "0 0 10px 2px rgba(255, 0, 0, 0.8)"
          : "0 0 10px 2px rgba(0, 255, 255, 0.8)",
      }}
      animate={invalid ? { x: [-10, 10, -5, 5, 0] } : {}}
      transition={{ duration: 0.4 }}
    />
  );
};

const InputOTPGroup = ({ children }) => {
  return <div className="flex items-center space-x-3">{children}</div>;
};

const InputOTPSeparator = () => (
  <div className="text-xl font-semibold text-cyan-200">-</div>
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

  return (
    <div className="flex flex-col items-center">
      <InputOTPGroup>
        {otp.map((value, index) => (
          <React.Fragment key={index}>
            <InputOTPSlot
              index={index}
              value={value}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, index)}
              invalid={invalidIndexes.includes(index)}
            />
            {index === 2 && <InputOTPSeparator />}
          </React.Fragment>
        ))}
      </InputOTPGroup>
      
      <AnimatePresence>
        {invalidIndexes.length > 0 && (
          <motion.div 
            className="mt-6 text-red-300 font-medium text-sm flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Please enter numbers only
          </motion.div>
        )}
        
        {showSuccess && (
          <motion.div 
            className="mt-6 text-white font-medium text-sm flex items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verification successful!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OtpFieldDemo = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {showConfetti && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: Math.sin(i * 36 * (Math.PI / 180)) * 200,
                y: Math.cos(i * 36 * (Math.PI / 180)) * 200,
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
      
      <div className="relative w-full max-w-md">
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 text-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
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
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"></div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2">
              Verify Your Identity
            </h2>
            <p className="text-white/80 mb-8">
              Enter the 6-digit code sent to your device
            </p>
            
            <div className="relative">
              <InputOTP 
                maxLength={6} 
                onComplete={handleComplete}
                validationRegex={/^[0-9]*$/}
              />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-full h-full bg-white/10 rounded-xl blur-xl"></div>
              </div>
            </div>
            
            <div className="mt-8 min-h-8">
              {isLoading ? (
                <div className="inline-flex items-center text-white">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {status}
                </div>
              ) : status ? (
                <div className={`text-sm font-medium ${
                  status.includes("successful") 
                    ? "text-white" 
                    : "text-red-200"
                }`}>
                  {status}
                </div>
              ) : null}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <button 
                onClick={handleResend}
                disabled={!canResend}
                className={`text-sm font-medium ${
                  canResend 
                    ? "text-white hover:text-cyan-200"
                    : "text-white/50 cursor-not-allowed"
                } transition-colors duration-200`}
              >
                {canResend 
                  ? "Didn't receive a code? Resend" 
                  : `Resend code in ${remainingTime}s`}
              </button>
            </div>
          </div>
          
          <div className="bg-black/20 p-4 text-center border-t border-white/10">
            <p className="text-xs text-white/60">
              For security, this code will expire in 5 minutes
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button className="text-sm text-white/80 hover:text-white transition-colors duration-200 flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to login
          </button>
        </motion.div>
      </div>
    </div>
  );
};

render(<OtpFieldDemo />);
