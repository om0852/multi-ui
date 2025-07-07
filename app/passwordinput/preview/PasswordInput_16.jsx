
const PasswordInput = ({
  id = 'password',
  label = 'Password',
  value = '',
  onChange = () => {},
  showStrength = true,
  showRequirements = true,
  className = '',
  onSubmit = () => {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [strength, setStrength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [touched, setTouched] = useState(false);
  const [shake, setShake] = useState(false);

  // Calculate password strength
  useEffect(() => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    setStrength(score);
  }, [value]);

  const handleInputChange = (e) => {
    setTouched(true);
    onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (strength >= 3) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        onSubmit(value);
        // Reset success state after 2 seconds
        setTimeout(() => setShowSuccess(false), 2000);
      }, 1000);
    } else {
      // Trigger shake animation
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  const strengthLabels = ['Very Weak', 'Weak', 'Good', 'Strong'];
  const strengthColors = ['bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const strengthIcons = ['🔴', '🟡', '🔵', '🟢'];

  const requirements = [
    { id: 'length', text: 'At least 8 characters', valid: value.length >= 8 },
    { id: 'uppercase', text: 'At least one uppercase letter', valid: /[A-Z]/.test(value) },
    { id: 'number', text: 'At least one number', valid: /[0-9]/.test(value) },
    { id: 'special', text: 'At least one special character', valid: /[^A-Za-z0-9]/.test(value) },
  ];

  const allRequirementsMet = requirements.every(req => req.valid);
  const showError = touched && !allRequirementsMet && value.length > 0;

  return (
    <div className={`max-w-md mx-auto p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl ${className}`}>
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl flex items-center justify-center mx-auto mb-5">
          <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Account Security</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Create a strong and secure password</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {label}
            </label>
            <motion.div 
              className="relative"
              animate={shake ? { 
                x: [0, -10, 10, -10, 0],
                transition: { duration: 0.6 }
              } : {}}
            >
              <input
                id={id}
                type={isVisible ? 'text' : 'password'}
                value={value}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full px-6 py-4 border-2 rounded-2xl focus:outline-none focus:ring-4 transition-all text-lg ${
                  showError 
                    ? 'border-red-500 focus:ring-red-500/20 bg-red-50 dark:bg-red-900/10' 
                    : isFocused 
                      ? 'border-indigo-500 focus:ring-indigo-500/20 bg-white dark:bg-gray-700' 
                      : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700'
                }`}
                placeholder="••••••••"
                aria-invalid={showError}
                aria-describedby={showError ? `${id}-error` : undefined}
              />
              <motion.button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 p-1"
                whileHover={{ scale: 1.3, rotate: 20 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
            </motion.div>

            {showStrength && value && (
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Password Strength</span>
                  <div className={`text-sm font-medium px-3 py-1 rounded-full ${strengthColors[strength - 1] || 'bg-gray-400'} text-white flex items-center`}>
                    <span className="mr-1.5">{strengthIcons[strength - 1] || '⚪'}</span>
                    {strengthLabels[strength - 1] || 'Very Weak'}
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className={`h-full rounded-full ${strengthColors[strength - 1] || 'bg-gray-400'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(strength / 4) * 100}%` }}
                    transition={{ duration: 0.6, type: 'spring', damping: 15 }}
                  />
                </div>
              </div>
            )}

            {showRequirements && (touched || value) && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Password requirements:</p>
                <div className="space-y-2">
                  {requirements.map((req) => (
                    <div key={req.id} className="flex items-center">
                      <motion.div 
                        className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                          req.valid ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-700'
                        }`}
                        animate={req.valid ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {req.valid ? (
                          <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                        )}
                      </motion.div>
                      <span className={`text-sm ${req.valid ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showError && (
              <motion.div 
                className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl border border-red-100 dark:border-red-800 text-sm flex items-start"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>Please ensure all password requirements are met before continuing.</span>
              </motion.div>
            )}
          </div>

          <div className="pt-2">
            <motion.button
              type="submit"
              disabled={isSubmitting || !allRequirementsMet || !touched}
              className={`w-full py-4 rounded-xl font-semibold text-white focus:outline-none focus:ring-4 focus:ring-opacity-30 transition-all text-lg ${
                isSubmitting || !allRequirementsMet || !touched
                  ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:ring-indigo-500 active:from-indigo-800 active:to-indigo-900 shadow-lg'
              }`}
              whileHover={!isSubmitting && allRequirementsMet && touched ? { 
                scale: 1.02,
                boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
              } : {}}
              whileTap={!isSubmitting && allRequirementsMet && touched ? { 
                scale: 0.98,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              } : {}}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Securing Your Account...
                </div>
              ) : 'Continue'}
            </motion.button>

            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  className="mt-5 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-xl border border-green-200 dark:border-green-800 text-sm flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, type: 'spring', damping: 20 }}
                >
                  <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Password set successfully!</p>
                    <p className="text-xs opacity-80">Redirecting to your account...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </form>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?{' '}
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
          Sign in here
        </a>
      </div>
    </div>
  );
};

// Demo component to showcase the PasswordInput
const PasswordDemo = () => {
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (value) => {
    console.log('Password submitted:', value);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <PasswordInput 
        value={password}
        onChange={setPassword}
        onSubmit={handleSubmit}
        showStrength={true}
        showRequirements={true}
      />
    </div>
  );
};

render(<PasswordDemo />);
