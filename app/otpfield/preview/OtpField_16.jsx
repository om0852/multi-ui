
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
      className={`w-16 h-16 text-center text-2xl font-semibold rounded-[25%] border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${
        invalid
          ? "border-red-600 bg-red-100 text-red-600 ring-red-500"
          : "border-gray-300 bg-white text-gray-800 ring-blue-500"
      }`}
      animate={{
        scale: value ? 1.1 : 1,
        opacity: value ? 1 : 0.6,
        y: value ? [0, -10, 0] : 0, // Bounce effect when entering text
        rotate: invalid ? [0, 10, -10, 0] : 0, // Shake effect for invalid input
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    />
  );
};

const InputOTPGroup = ({ children }) => {
  return <div className="flex space-x-4 items-center">{children}</div>;
};

const InputOTPSeparator = () => (
  <div className="text-2xl font-medium text-gray-600">|</div>
);

const InputOTP = ({
  maxLength = 6,
  onComplete = () => {},
  validationRegex = /^[A-Za-z0-9]*$/,
}) => {
  const [otp, setOtp] = useState(Array(maxLength).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [invalidIndexes, setInvalidIndexes] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <motion.div 
        className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <motion.div 
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
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
            </motion.div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Enter Verification Code</h1>
            <p className="text-gray-600">
              We've sent a 6-digit code to your device
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-center">
              <InputOTP 
                maxLength={6} 
                onComplete={handleComplete}
                validationRegex={/^[0-9]*$/}
              >
                <InputOTPGroup>
                  {[...Array(6)].map((_, i) => (
                    <React.Fragment key={i}>
                      <InputOTPSlot
                        index={i}
                        value=""
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        invalid={invalidIndexes.includes(i)}
                      />
                      {i === 2 && <InputOTPSeparator />}
                    </React.Fragment>
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            
            <AnimatePresence>
              {invalidIndexes.length > 0 && (
                <motion.div 
                  className="mt-4 text-red-500 text-sm text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Please enter numbers only
                </motion.div>
              )}
              
              {(status || showSuccess) && (
                <motion.div 
                  className={`mt-4 text-sm text-center ${
                    showSuccess ? 'text-green-600' : 'text-blue-600'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {status}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex flex-col items-center">
            <button 
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 mb-4"
              disabled={!isComplete || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </div>
              ) : 'Verify Code'}
            </button>
            
            <div className="text-sm text-gray-600">
              Didn't receive a code?{' '}
              <button 
                onClick={handleResend}
                disabled={!canResend}
                className={`font-medium ${
                  canResend 
                    ? "text-indigo-600 hover:text-indigo-700"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                {canResend ? 'Resend code' : `Resend in ${remainingTime}s`}
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            Having trouble? <a href="#" className="text-indigo-600 hover:underline">Contact support</a>
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to login
        </button>
      </motion.div>
    </div>
  );
};

render(<InputOTP />);
