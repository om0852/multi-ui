
const PasswordInput = ({
  id = "password",
  value = "",
  onChange,
  label = "Password",
  className = "",
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    const calculateStrength = (pwd) => {
      let score = 0;
      if (pwd.length > 6) score++;
      if (pwd.match(/[A-Z]/)) score++;
      if (pwd.match(/[0-9]/)) score++;
      if (pwd.match(/[^A-Za-z0-9]/)) score++;
      setStrength(score);
    };

    calculateStrength(password);
  }, [password]);

  const handleInputChange = (value) => {
    setPassword(value);
    onChange?.(value);
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative"
        initial={false}
        animate={{
          height: isFocused || password ? '72px' : '56px',
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.label
          htmlFor={id}
          className="absolute left-2 text-gray-600 pointer-events-none"
          initial={false}
          animate={{
            top: isFocused || password ? '-8px' : '16px',
            fontSize: isFocused || password ? '14px' : '18px',
            color: isFocused ? 'rgb(75, 85, 99)' : 'rgb(156, 163, 175)',
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.label>
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full h-14 px-3 pt-6 pb-2 text-gray-900 bg-transparent border-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-600 transition-all"
        />
        <button
          type="button"
          className="absolute right-3 top-5 text-gray-600 hover:text-gray-800"
          onClick={() => setIsVisible(!isVisible)}
          aria-label="Toggle password visibility"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isVisible ? 'visible' : 'hidden'}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.2 }}
            >
              {isVisible ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </motion.div>
      <AnimatePresence>
        {password && (
          <motion.div
            className="mt-3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex space-x-2">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  className="h-1 w-full rounded-md bg-gray-300"
                  initial={false}
                  animate={{
                    backgroundColor: index < strength ? 'rgb(16, 185, 129)' : 'rgb(229, 231, 235)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-500">
              <PasswordCriteria label="6+ characters" met={password.length > 6} />
              <PasswordCriteria label="Uppercase letter" met={/[A-Z]/.test(password)} />
              <PasswordCriteria label="Number" met={/[0-9]/.test(password)} />
              <PasswordCriteria label="Special character" met={/[^A-Za-z0-9]/.test(password)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PasswordCriteria = ({ label, met }) => (
  <div className="flex items-center space-x-2">
    <motion.div
      initial={false}
      animate={{
        backgroundColor: met ? 'rgb(16, 185, 129)' : 'rgb(239, 68, 68)',
      }}
      className="w-4 h-4 rounded-full flex items-center justify-center"
    >
      {met ? (
        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
    </motion.div>
    <span className={met ? 'text-green-600' : 'text-red-500'}>{label}</span>
  </div>
);

const PasswordDemo = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.email) return 'Email is required';
    if (!formData.password) return 'Password is required';
    if (formData.password !== formData.confirmPassword) return 'Passwords do not match';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form after showing success
      setTimeout(() => {
        setFormData({ email: '', password: '', confirmPassword: '' });
        setShowSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4.444 4.444 0 011.678-3.49m10.44 6.508c-.76.75-1.837 1.982-4.118 1.982s-3.357-1.232-4.118-1.982"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4.444 4.444 0 011.678-3.49m10.44 6.508c-.76.75-1.837 1.982-4.118 1.982s-3.357-1.232-4.118-1.982"></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
              <p className="text-gray-600 mt-1">Secure your account with a strong password</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <PasswordInput
                  value={formData.password}
                  onChange={(value) => handleChange('password', value)}
                  label="Create Password"
                />
              </div>
              
              <div>
                <PasswordInput
                  value={formData.confirmPassword}
                  onChange={(value) => handleChange('confirmPassword', value)}
                  label="Confirm Password"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                  isSubmitting
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : showSuccess ? (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Account Created!
                  </div>
                ) : 'Create Account'}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Sign in</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

render(<PasswordDemo />);
