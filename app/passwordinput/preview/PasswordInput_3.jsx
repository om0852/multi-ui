
const PasswordInput = ({
  id = "password",
  value = "",
  onChange,
  placeholder = "Password",
  validate = (password) =>
    password.length >= 8 ? null : "Password must be at least 8 characters long",
  className = "",
  inputClassName = "",
  errorClassName = "text-red-500",
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (value) => {
    setPassword(value);
    onChange?.(value);
    setError(null);
  };

  const triggerValidation = () => {
    const errorMessage = validate(password);
    if (errorMessage) {
      setError(errorMessage);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <motion.div
        className={`relative border-2 rounded-lg p-2 transition-colors ${
          isFocused
            ? "border-blue-500"
            : error
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-600"
        }`}
        animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.label
          htmlFor={id}
          className={`absolute -top-3.5 left-3 px-1 text-sm transition-all pointer-events-none ${
            isFocused || password
              ? "text-blue-500 dark:text-blue-400 bg-white dark:bg-gray-900"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {placeholder}
        </motion.label>
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            triggerValidation();
          }}
          className={`w-full bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none placeholder-transparent ${inputClassName}`}
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(!isVisible)}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Toggle password visibility"
        >
          {isVisible ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17Z" fill="currentColor"/>
              <path d="M12 5C7.03 5 3 8.03 3 12C3 15.97 7.03 19 12 19C16.97 19 21 15.97 21 12C21 8.03 16.97 5 12 5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 23 12C21.27 7.61 16.99 5 12 5C10.73 5 9.51 5.2 8.36 5.57L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7.01 19 12 19C13.27 19 14.49 18.8 15.64 18.43L15.99 18.8L19.73 22.54L21 21.27L2.73 3L2 3.73V4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z" fill="currentColor"/>
            </svg>
          )}
        </motion.button>
      </motion.div>
      {error && (
        <motion.span
          className={`mt-1 block text-sm ${errorClassName}`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
};

const PasswordDemo = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validatePassword = (pwd) => {
    if (pwd.length === 0) return "";
    if (pwd.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(pwd)) return "Include at least one uppercase letter";
    if (!/[0-9]/.test(pwd)) return "Include at least one number";
    return null;
  };

  const validateConfirmPassword = (confirmPwd) => {
    if (confirmPwd === "") return "";
    if (confirmPwd !== password) return "Passwords do not match";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert('Password updated successfully!');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Update Password</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Create a new password for your account</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                  placeholder="New Password"
                  validate={validatePassword}
                />
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Must be at least 8 characters with a number and uppercase letter
                </div>
              </div>
              
              <div>
                <PasswordInput
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  placeholder="Confirm Password"
                  validate={validateConfirmPassword}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !password || password !== confirmPassword}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                  isSubmitting || !password || password !== confirmPassword
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </div>
                ) : 'Update Password'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

render(<PasswordDemo />);
