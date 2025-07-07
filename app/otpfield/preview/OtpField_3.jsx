
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
      className={`w-14 h-14 text-center text-2xl font-bold rounded-full focus:outline-none ${
        invalid
          ? "border-2 border-red-500 bg-red-50 dark:bg-red-800"
          : "border-2 border-gray-300 bg-white dark:bg-gray-800"
      } focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-600`}
      animate={invalid ? { scale: [1, 1.2, 1], y: [0, -10, 0] } : {}}
      transition={{ duration: 0.3 }}
    />
  );
};

const InputOTPGroup = ({ children }) => {
  return <div className="flex items-center space-x-4">{children}</div>;
};

const InputOTPSeparator = () => (
  <div className="mx-2 text-2xl font-semibold text-gray-500 dark:text-gray-300">-</div>
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

  const handleChange = (value, index) => {
    if (value.match(validationRegex)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setInvalidIndexes((prev) => prev.filter((i) => i !== index));
      
      // Check if all fields are filled
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
      <div className="mt-6 text-sm">
        {invalidIndexes.length > 0 ? (
          <motion.div 
            className="text-red-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Please enter numbers only
          </motion.div>
        ) : isComplete ? (
          <motion.div 
            className="text-green-500 font-medium"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            ✓ Code verified!
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

const OtpFieldDemo = () => {
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleComplete = async (completedOtp) => {
    setIsLoading(true);
    setStatus("Verifying...");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const isValid = completedOtp === "123456"; // Hardcoded for demo
    setOtp(completedOtp);
    
    if (isValid) {
      setStatus("Verification successful! Redirecting...");
      setAttempts(0);
    } else {
      setAttempts(prev => prev + 1);
      setStatus(`Invalid code. ${3 - attempts > 0 ? 3 - attempts + ' attempts remaining' : 'No attempts left'}`);
      if (attempts >= 2) {
        setCountdown(30); // 30-second cooldown
      }
    }
    
    setIsLoading(false);
  };

  const handleResend = () => {
    if (countdown > 0) return;
    setStatus("New code sent!");
    setCountdown(30);
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600 dark:text-blue-400"
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
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Two-Factor Authentication
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Enter the 6-digit code from your authenticator app
            </p>
            
            <InputOTP 
              maxLength={6} 
              onComplete={handleComplete}
              validationRegex={/^[0-9]*$/}
            />
            
            <div className="mt-6 min-h-6">
              {isLoading ? (
                <div className="inline-flex items-center text-blue-600 dark:text-blue-400">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {status}
                </div>
              ) : status ? (
                <div className={`text-sm font-medium ${
                  status.includes("successful") 
                    ? "text-green-600 dark:text-green-400" 
                    : "text-red-600 dark:text-red-400"
                }`}>
                  {status}
                </div>
              ) : null}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
              <button 
                onClick={handleResend}
                disabled={countdown > 0}
                className={`text-sm font-medium ${
                  countdown > 0 
                    ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : "text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                }`}
              >
                {countdown > 0 
                  ? `Resend code in ${countdown}s` 
                  : "Didn't receive a code? Resend"}
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 px-8 py-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              For security reasons, this code will expire in 5 minutes
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

render(<OtpFieldDemo />);
