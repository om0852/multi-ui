
const PasswordInput = ({
  id = 'password',
  value = '',
  onChange,
  label = 'Password',
  className = '',
  onSubmit,
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [strength, setStrength] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const calculateStrength = (pwd) => {
      let score = 0;
      if (pwd.length >= 8) score++;
      if (/[A-Z]/.test(pwd)) score++;
      if (/[0-9]/.test(pwd)) score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;
      setStrength(score);
    };

    calculateStrength(password);
  }, [password]);

  const handleInputChange = (value) => {
    setPassword(value);
    onChange?.(value);
  };

  const isPasswordValid = strength === 4;

  const handleSubmit = () => {
    onSubmit?.(isPasswordValid);
  };

  const strengthColors = ['bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-500'];
  const strengthLabels = ['Too Weak', 'Weak', 'Moderate', 'Strong'];
  const strengthIcons = ['😟', '😐', '🙂', '😎'];
  const strengthDescriptions = [
    'Add more characters, numbers, and symbols',
    'Add uppercase letters and symbols',
    'Looking good! Add a symbol to make it stronger',
    'Excellent! Your password is strong'
  ];

  return (
    <motion.div 
      className={`p-6 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Create Account</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Secure your account with a strong password</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
          <div className="relative">
            <input
              id={id}
              type={isVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              placeholder="Create a strong password"
            />
            <motion.button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isVisible ? "Hide password" : "Show password"}
            >
              {isVisible ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {password && (
              <motion.div
                className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Password Strength</span>
                  <motion.div
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${strengthColors[strength - 1] || 'bg-gray-400'} text-white flex items-center`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  >
                    <span className="mr-1">{strengthIcons[strength - 1] || '😰'}</span>
                    {strengthLabels[strength - 1] || 'Very Weak'}
                  </motion.div>
                </div>
                
                <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className={`absolute top-0 left-0 h-full ${strengthColors[strength - 1] || 'bg-gray-400'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(strength / 4) * 100}%` }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {strengthDescriptions[strength - 1] || 'Enter a password to check its strength'}
                </p>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 ${password.length >= 8 ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-500'}`}></div>
                    <span className={`text-xs ${password.length >= 8 ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                      At least 8 characters
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 ${/[A-Z]/.test(password) ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-500'}`}></div>
                    <span className={`text-xs ${/[A-Z]/.test(password) ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                      At least one uppercase letter
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 ${/[0-9]/.test(password) ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-500'}`}></div>
                    <span className={`text-xs ${/[0-9]/.test(password) ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                      At least one number
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 ${/[^A-Za-z0-9]/.test(password) ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-500'}`}></div>
                    <span className={`text-xs ${/[^A-Za-z0-9]/.test(password) ? 'text-green-600 dark:text-green-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                      At least one special character
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.button
          onClick={handleSubmit}
          disabled={!isPasswordValid || !password}
          className={`w-full py-3 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all ${
            isPasswordValid && password
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:ring-indigo-400'
              : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
          }`}
          whileHover={isPasswordValid && password ? { scale: 1.01 } : {}}
          whileTap={isPasswordValid && password ? { scale: 0.99 } : {}}
        >
          Create Account
        </motion.button>
        
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
          By creating an account, you agree to our <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Terms</a> and <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </motion.div>
  );
};

const PasswordDemo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  
  const handleSubmit = (isValid) => {
    setIsValid(isValid);
    setIsSubmitted(true);
    
    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              className={`mb-6 p-4 rounded-lg text-center ${
                isValid 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {isValid ? (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Account created successfully! Redirecting...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Please fix the errors and try again.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        <PasswordInput 
          onSubmit={handleSubmit}
          className="shadow-2xl"
        />
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

render(<PasswordDemo />);
