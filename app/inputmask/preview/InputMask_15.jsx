
const EmailInput = ({
  label = "Get Started",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  onChange,
  onSubmit,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Apply mask for email input
  const applyMask = (value) => {
    // Allow only valid email characters
    let cleanedValue = value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
    
    // Ensure only one @ symbol
    const atIndex = cleanedValue.indexOf('@');
    if (atIndex !== -1) {
      const parts = cleanedValue.split('@');
      if (parts.length > 2) {
        cleanedValue = parts[0] + '@' + parts[1];
      }
      
      // Clean domain part (after @)
      const domainParts = cleanedValue.split('@');
      if (domainParts.length === 2) {
        domainParts[1] = domainParts[1].replace(/[^a-zA-Z0-9.-]/g, '');
        cleanedValue = domainParts.join('@');
      }
    }
    
    return cleanedValue;
  };
  
  const handleChange = (e) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    const valid = validateEmail(value);
    setIsValid(valid);
    if (onChange) onChange(valid ? value : null);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSubmit) onSubmit(inputValue);
      
      // Reset after showing success
      setTimeout(() => {
        setInputValue('');
        setIsValid(false);
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  const handleFocus = () => {
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.2
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    },
    disabled: {
      scale: 1,
      opacity: 0.7,
      cursor: "not-allowed"
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full max-w-2xl ${className}`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 p-8 shadow-xl">
        {/* Background decoration */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        
        <div className="relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            variants={itemVariants}
          >
            {label}
          </motion.h2>
          
          <motion.p 
            className="text-indigo-100 text-lg mb-6 max-w-lg"
            variants={itemVariants}
          >
            Join our newsletter and stay updated with the latest news and offers.
          </motion.p>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
                variants={itemVariants}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    className={`w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 ${
                      isFocused ? 'bg-white/20 text-white placeholder-white/70' : 'bg-white/10 text-white placeholder-white/50'
                    }`}
                    disabled={isSubmitting}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className={`px-8 py-4 rounded-xl font-semibold text-white whitespace-nowrap ${
                    !isValid || isSubmitting 
                      ? 'bg-white/20 cursor-not-allowed' 
                      : 'bg-white text-indigo-600 hover:bg-indigo-50'
                  } transition-colors duration-300`}
                  disabled={!isValid || isSubmitting}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover={isValid && !isSubmitting ? "hover" : "disabled"}
                  whileTap={isValid && !isSubmitting ? "tap" : "disabled"}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    buttonText
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                <p className="text-indigo-100">You've been subscribed to our newsletter.</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.p 
            className="text-indigo-100/70 text-sm mt-4 text-center sm:text-left"
            variants={itemVariants}
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <EmailInput
        onSubmit={(email) => {
          console.log("Subscribed with:", email);
        }}
      />
    </div>
  );
};

render(<App />);
