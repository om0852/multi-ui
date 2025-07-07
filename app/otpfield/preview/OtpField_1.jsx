
const InputOTPSlot = ({
  index,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <motion.input
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value, index)}
      onKeyDown={onKeyDown}
      className="w-12 h-12 text-center text-xl border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-300"
    />
  );
};

const InputOTPGroup = ({ children }) => {
  return <div className="flex items-center space-x-4">{children}</div>;
};

const InputOTPSeparator = () => (
  <div className="mx-2 text-xl text-gray-800 dark:text-gray-200">-</div>
);

const InputOTP = ({
  maxLength = 6,
  onComplete = () => {},
  validationRegex = /^[A-Za-z0-9]*$/,
}) => {
  const [otp, setOtp] = useState(Array(maxLength).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleChange = (value, index) => {
    if (value.match(validationRegex)) {
      const newOtp = [...otp];
      newOtp[index] = value.toUpperCase();
      setOtp(newOtp);
      if (value && index < maxLength - 1) {
        focusNextSlot(index);
      }
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
            />
            {index === 2 && <InputOTPSeparator />}
          </React.Fragment>
        ))}
      </InputOTPGroup>
      <div className="mt-4 text-sm text-gray-500">
        {otp.every(slot => slot !== "") ? "OTP Complete!" : "Enter your 6-digit code"}
      </div>
    </div>
  );
};

const OtpFieldDemo = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleComplete = (completedOtp) => {
    setOtp(completedOtp);
    setMessage(`OTP ${completedOtp} entered successfully!`);
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          OTP Verification
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Please enter the 6-digit code sent to your device
        </p>
        
        <InputOTP 
          maxLength={6} 
          onComplete={handleComplete}
          validationRegex={/^[0-9]*$/}
        />
        
        {message && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center"
          >
            {message}
          </motion.div>
        )}
        
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Didn't receive code? <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Resend</a>
        </div>
      </div>
    </div>
  );
};

render(<OtpFieldDemo />);
