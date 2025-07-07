
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
      className={`w-14 h-14 text-center text-2xl font-semibold border-2 rounded-lg focus:outline-none ${
        invalid
          ? "border-red-500 bg-red-100 dark:bg-red-800"
          : "border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700"
      } focus:ring-2 focus:ring-blue-500 hover:shadow-lg`}
      animate={invalid ? { x: [-10, 10, -10, 0] } : {}}
      transition={{ duration: 0.2 }}
    />
  );
};

const InputOTPGroup = ({ children }) => {
  return <div className="flex items-center space-x-4">{children}</div>;
};

const InputOTPSeparator = () => (
  <div className="mx-2 text-2xl font-semibold text-gray-600 dark:text-gray-300">-</div>
);

const InputOTP = ({
  maxLength = 6,
  onComplete = () => {},
  validationRegex = /^[0-9]*$/,
}) => {
  const [otp, setOtp] = useState(Array(maxLength).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [invalidIndexes, setInvalidIndexes] = useState([]);

  const handleChange = (value, index) => {
    if (value.match(validationRegex)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setInvalidIndexes((prev) => prev.filter((i) => i !== index));
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
      }
      setOtp(newOtp);
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
    if (otp.every((slot) => slot !== "")) {
      onComplete(otp.join(""));
    }
  }, [otp, onComplete]);

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
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {invalidIndexes.length > 0 ? (
          <span className="text-red-500">Please enter numbers only</span>
        ) : otp.every(slot => slot !== "") ? (
          <span className="text-green-500">OTP Verified!</span>
        ) : (
          "Enter the 6-digit code"
        )}
      </div>
    </div>
  );
};

const OtpFieldDemo = () => {
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async (completedOtp) => {
    setIsLoading(true);
    setStatus("Verifying...");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setOtp(completedOtp);
    const isValid = Math.random() > 0.3; // 70% success rate for demo
    
    if (isValid) {
      setStatus("Verification successful!");
    } else {
      setStatus("Invalid code. Please try again.");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600 dark:text-blue-400"
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
            Verify Your Identity
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Enter the 6-digit code sent to your device
          </p>
        </div>
        
        <InputOTP 
          maxLength={6} 
          onComplete={handleComplete}
          validationRegex={/^[0-9]*$/}
        />
        
        <div className="mt-6 text-center">
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
              status.includes("successful") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}>
              {status}
            </div>
          ) : null}
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Didn't receive a code?{' '}
          <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none">
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
};

render(<OtpFieldDemo />);
