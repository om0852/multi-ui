
const PasswordInput = ({
  id = "password",
  value = "",
  onChange,
  label = "Enter Access Code",
  className = "",
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [strength, setStrength] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

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

    // Trigger shake animation if password is too weak
    if (value.length > 0 && value.length < 6) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-cyan-500 shadow-lg shadow-cyan-500/50">
        <div className="px-4 py-3">
          <motion.label
            htmlFor={id}
            className="block text-sm font-medium text-cyan-400 mb-1"
            animate={{
              y: isFocused || password ? -20 : 0,
              opacity: isFocused || password ? 0 : 1,
            }}
          >
            {label}
          </motion.label>
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
              animate={{
                opacity: isFocused ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <input
              id={id}
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="block w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border-2 border-transparent rounded-md focus:outline-none focus:border-cyan-500 transition-colors duration-200 z-10 relative"
              placeholder={isFocused || password ? label : ""}
            />
            <motion.button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-cyan-500 z-20"
              onClick={() => setIsVisible(!isVisible)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isVisible ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              transition={{ duration: 0.3 }}
              className="bg-gray-800 px-4 py-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-cyan-400">
                  Security Level
                </div>
                <div className="text-sm font-medium text-cyan-400">
                  {['Critical', 'Low', 'Medium', 'High', 'Maximum'][strength]}
                </div>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                  <motion.div
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(strength / 4) * 100}%` }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  />
                </div>
              </div>
              <motion.div 
                className="mt-3 grid grid-cols-2 gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                <Criteria label="6+ characters" met={password.length > 6} />
                <Criteria label="Uppercase" met={/[A-Z]/.test(password)} />
                <Criteria label="Number" met={/[0-9]/.test(password)} />
                <Criteria label="Special char" met={/[^A-Za-z0-9]/.test(password)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Criteria = ({ label, met }) => (
  <motion.div 
    className="flex items-center space-x-2"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    <motion.div
      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
        met ? 'bg-green-900' : 'bg-red-900'
      }`}
      animate={{ rotate: met ? 0 : 180 }}
    >
      {met ? (
        <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
    </motion.div>
    <span className={`text-sm ${met ? 'text-green-400' : 'text-red-400'}`}>
      {label}
    </span>
  </motion.div>
);

const PasswordDemo = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setShowError('');
  };

  const validateForm = () => {
    if (!formData.email) return 'Email is required';
    if (!formData.password) return 'Password is required';
    if (formData.password !== formData.confirmPassword) return 'Passwords do not match';
    
    // Check password strength
    let strength = 0;
    if (formData.password.length > 6) strength++;
    if (formData.password.match(/[A-Z]/)) strength++;
    if (formData.password.match(/[0-9]/)) strength++;
    if (formData.password.match(/[^A-Za-z0-9]/)) strength++;
    
    if (strength < 3) return 'Please choose a stronger password';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setShowError(error);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div 
          className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-cyan-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cyan-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-cyan-100">Secure Access</h1>
              <p className="text-cyan-400 mt-1">Create your secure access code</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <PasswordInput
                  value={formData.password}
                  onChange={(value) => handleChange('password', value)}
                  label="Create Access Code"
                />
              </div>
              
              <div>
                <PasswordInput
                  value={formData.confirmPassword}
                  onChange={(value) => handleChange('confirmPassword', value)}
                  label="Confirm Access Code"
                />
                
                {showError && (
                  <motion.div 
                    className="mt-2 text-sm text-red-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {showError}
                  </motion.div>
                )}
                
                {showSuccess && (
                  <motion.div 
                    className="mt-2 text-sm text-green-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Access code created successfully!
                  </motion.div>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg text-sm transition-all duration-200 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-cyan-500/20'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Securing Access...
                  </div>
                ) : 'Create Secure Access'}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-cyan-500">
              Already have an account?{' '}
              <a href="#" className="text-cyan-300 hover:text-white font-medium">
                Sign in
              </a>
            </div>
          </div>
          
          <div className="px-8 py-4 bg-gray-800/50 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              Your security is our top priority. All data is encrypted and protected.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

render(<PasswordDemo />);
