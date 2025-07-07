const PasswordInput = ({
  id = "password",
  value = "",
  onChange,
  label = "Password",
  className = "",
  onSubmit,
}) => {
  const [password, setPassword] = React.useState(value);
  const [isVisible, setIsVisible] = React.useState(false);
  const [strength, setStrength] = React.useState(0);
  const [isValid, setIsValid] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const calculateStrength = (pwd) => {
      let score = 0;
      if (pwd.length > 8) score++;
      if (pwd.match(/[A-Z]/)) score++;
      if (pwd.match(/[0-9]/)) score++;
      if (pwd.match(/[^A-Za-z0-9]/)) score++;
      setStrength(score);
      setIsValid(score === 4);
    };

    calculateStrength(password);
  }, [password]);

  const handleInputChange = (value) => {
    setPassword(value);
    onChange?.(value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (isValid) {
        onSubmit?.(true);
      } else {
        onSubmit?.(false);
      }
    }, 1500);
  };

  const strengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'][strength];
  const strengthColors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-blue-500',
    'bg-teal-500'
  ][strength];

  return (
    <motion.div
      className={`relative max-w-md mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative bg-gradient-to-r from-teal-500 to-cyan-400 dark:from-teal-700 dark:to-cyan-700 rounded-xl shadow-lg overflow-hidden"
        animate={{
          boxShadow: isSubmitted 
            ? (isValid 
                ? '0 0 20px 8px rgba(72, 187, 120, 0.7)' 
                : '0 0 10px 4px rgba(244, 63, 94, 0.7)')
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-5">
          <motion.label
            htmlFor={id}
            className="block text-lg font-semibold text-white dark:text-gray-200 mb-2"
            animate={{ 
              y: password ? -20 : 0, 
              opacity: password ? 0 : 1,
              fontSize: password ? '0.875rem' : '1.125rem'
            }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
          <div className="relative">
            <motion.input
              id={id}
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => handleInputChange(e.target.value)}
              className="block w-full pr-10 sm:text-lg border-transparent rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white/20 text-white placeholder-gray-200 outline-none transition-all duration-200 px-4 py-3"
              placeholder="Enter your password"
              animate={{
                backgroundColor: password ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'
              }}
            />
            <motion.button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={() => setIsVisible(!isVisible)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isVisible ? (
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 px-6 py-4 rounded-b-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <motion.div
                  className="text-lg text-gray-600 dark:text-gray-200"
                  animate={{ opacity: 1 }}
                >
                  Password Strength
                </motion.div>
                <motion.div
                  className={`text-lg font-semibold ${strengthColors} text-white px-2 py-1 rounded`}
                  animate={{ opacity: strength > 0 ? 1 : 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {strengthText}
                </motion.div>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
                  <motion.div
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${strengthColors}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(strength / 4) * 100}%` }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                  />
                </div>
              </div>
              
              <motion.ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <motion.li 
                  className={`flex items-center ${password.length > 8 ? 'text-green-500' : 'text-gray-400'}`}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {password.length > 8 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
                  </svg>
                  At least 8 characters
                </motion.li>
                <motion.li 
                  className={`flex items-center ${/[A-Z]/.test(password) ? 'text-green-500' : 'text-gray-400'}`}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/[A-Z]/.test(password) ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
                  </svg>
                  At least one uppercase letter
                </motion.li>
                <motion.li 
                  className={`flex items-center ${/[0-9]/.test(password) ? 'text-green-500' : 'text-gray-400'}`}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/[0-9]/.test(password) ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
                  </svg>
                  At least one number
                </motion.li>
                <motion.li 
                  className={`flex items-center ${/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : 'text-gray-400'}`}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/[^A-Za-z0-9]/.test(password) ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
                  </svg>
                  At least one special character
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        className={`mt-5 w-full py-3 px-4 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : isValid 
              ? 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 hover:scale-105' 
              : 'bg-gray-400 cursor-not-allowed'
        }`}
        onClick={handleSubmit}
        disabled={!isValid || isLoading}
        whileHover={{ scale: isValid && !isLoading ? 1.02 : 1 }}
        whileTap={{ scale: isValid && !isLoading ? 0.98 : 1 }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Verifying...
          </div>
        ) : isSubmitted && isValid ? (
          <div className="flex items-center justify-center">
            <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Password Accepted!
          </div>
        ) : isSubmitted && !isValid ? (
          <div className="flex items-center justify-center">
            <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Please fix errors
          </div>
        ) : (
          'Submit'
        )}
      </motion.button>

      {isSubmitted && (
        <motion.div 
          className={`mt-4 p-3 rounded-lg text-center text-sm font-medium ${
            isValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {isValid 
            ? '✅ Your password is strong and secure!'
            : '❌ Please ensure your password meets all requirements.'
          }
        </motion.div>
      )}
    </motion.div>
  );
};

// Example usage
const PasswordInputDemo = () => {
  const [password, setPassword] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);

  const handleSubmit = (valid) => {
    setSubmitted(true);
    setIsValid(valid);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Secure Password</h1>
          <p className="text-gray-600 dark:text-gray-300">Create a strong password to protect your account</p>
        </motion.div>
        
        <PasswordInput 
          value={password}
          onChange={setPassword}
          onSubmit={handleSubmit}
          className="mb-6"
        />
        
        {submitted && (
          <motion.div 
            className={`p-4 rounded-lg text-center ${
              isValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isValid 
              ? '✅ Your password is strong and secure!'
              : '❌ Please ensure your password meets all requirements.'
            }
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Render the demo component
render(<PasswordInputDemo />);
