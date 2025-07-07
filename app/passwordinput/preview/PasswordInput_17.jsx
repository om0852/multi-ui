
const PasswordInput = ({
  id = 'password',
  value = '',
  onChange = () => {},
  label = 'Password',
  className = '',
  onSubmit = () => {}
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [strength, setStrength] = useState(0);
  const [shake, setShake] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const calculateStrength = (pwd) => {
      let score = 0;
      if (pwd.length > 6) score++;
      if (/[A-Z]/.test(pwd)) score++;
      if (/[0-9]/.test(pwd)) score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;
      setStrength(score);
    };

    calculateStrength(password);
  }, [password]);

  const handleInputChange = (value) => {
    setPassword(value);
    onChange(value);
  };

  const strengthEmoji = ['😰', '😓', '😐', '😊', '😎'][strength];
  const isPasswordValid = strength === 4;

  const handleSubmit = () => {
    if (isPasswordValid) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        onSubmit(true);
        // Reset success state after 2 seconds
        setTimeout(() => setShowSuccess(false), 2000);
      }, 1000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onSubmit(false);
    }
  };

  const Criteria = ({ label, met }) => {
    return (
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${met ? 'bg-green-500' : 'bg-gray-300'}`}>
          {met && (
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className={`text-sm ${met ? 'text-green-700 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
          {label}
        </span>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <motion.div
          className={`relative ${className}`}
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden"
            animate={{
              boxShadow: isFocused
                ? '0 0 0 4px rgba(255, 255, 255, 0.6)'
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 py-6">
              <motion.label
                htmlFor={id}
                className="block text-sm font-semibold text-white/90 mb-2"
                animate={{
                  y: isFocused || password ? -24 : 0,
                  opacity: isFocused || password ? 0.7 : 1,
                  fontSize: isFocused || password ? '0.875rem' : '1rem',
                }}
              >
                {label}
              </motion.label>
              <div className="relative">
                <input
                  id={id}
                  type={isVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="block w-full pr-12 py-4 text-lg bg-transparent border-0 border-b-2 border-white/20 focus:border-white/50 text-white placeholder-white/50 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="Create a strong password"
                />
                <motion.button
                  type="button"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsVisible(!isVisible)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={isVisible ? 'Hide password' : 'Show password'}
                >
                  {isVisible ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
            
            <AnimatePresence>
              {password && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="bg-white/10 backdrop-blur-sm"
                >
                  <div className="px-8 py-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-medium text-white/90">
                        Password Strength
                      </div>
                      <motion.div
                        className="text-2xl"
                        key={strength}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                      >
                        {strengthEmoji}
                      </motion.div>
                    </div>
                    
                    <div className="relative pt-1 mb-6">
                      <div className="overflow-hidden h-2 text-xs flex rounded-full bg-white/20">
                        <motion.div
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(strength / 4) * 100}%` }}
                          transition={{ duration: 0.6, type: 'spring', damping: 15 }}
                        />
                      </div>
                    </div>
                    
                    <motion.div
                      className="grid grid-cols-2 gap-3"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      <Criteria label="6+ characters" met={password.length > 6} />
                      <Criteria label="Uppercase" met={/[A-Z]/.test(password)} />
                      <Criteria label="Number" met={/[0-9]/.test(password)} />
                      <Criteria label="Special char" met={/[^A-Za-z0-9]/.test(password)} />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.button
            className={`mt-6 w-full py-4 px-6 rounded-xl text-lg font-semibold text-white focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500/50 transition-all ${isSubmitting || !password ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
            onClick={handleSubmit}
            disabled={isSubmitting || !password}
            whileHover={!isSubmitting && password ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting && password ? { scale: 0.98 } : {}}
            style={{
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
              boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.39)'
            }}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Securing Account...
              </div>
            ) : 'Continue'}
          </motion.button>
          
          <AnimatePresence>
            {showSuccess && (
              <motion.div 
                className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl border border-green-200 dark:border-green-800 text-sm flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, type: 'spring', damping: 20 }}
              >
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-medium">Password set successfully!</p>
                  <p className="text-xs opacity-80 mt-0.5">Your account is now secure.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
              Sign in
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Demo component to showcase the PasswordInput
const PasswordDemo = () => {
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (isValid) => {
    console.log('Password submission status:', isValid ? 'Valid' : 'Invalid');
    if (isValid) {
      setIsSubmitted(true);
    }
  };

  return (
    <PasswordInput 
      value={password}
      onChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

render(<PasswordDemo />);
