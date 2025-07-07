
const PasswordInput = ({
  id = "password",
  value = "",
  onChange,
  placeholder = "Enter password",
  validate = (password) =>
    password.length >= 8 ? null : "Password must be at least 8 characters long",
  className = "",
  inputClassName = "",
  errorClassName = "text-red-500",
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
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
    <div className={`w-full flex flex-col ${className}`}>
      <motion.div
        className={`relative flex items-center p-2 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 ${
          isShaking ? "ring-2 ring-red-500" : "ring-0"
        }`}
        animate={isShaking ? { scale: [1, 1.05, 0.95, 1] } : {}}
        transition={{ duration: 0.4 }}
      >
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={triggerValidation}
          className={`w-full py-2 px-3 rounded-lg bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 ${inputClassName}`}
          placeholder={placeholder}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
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
          className={`mt-2 text-sm ${errorClassName}`}
          initial={{ opacity: 0, y: -10 }}
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
  
  const validatePassword = (pwd) => {
    if (pwd.length === 0) return "";
    if (pwd.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(pwd)) return "Include at least one uppercase letter";
    if (!/[0-9]/.test(pwd)) return "Include at least one number";
    if (!/[^A-Za-z0-9]/.test(pwd)) return "Include at least one special character";
    return null;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Create Secure Account</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Create Password
          </label>
          <PasswordInput
            id="password"
            value={password}
            onChange={setPassword}
            placeholder="Enter a strong password"
            validate={validatePassword}
          />
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Password must be at least 8 characters with uppercase, number, and special character
          </div>
        </div>
        <button
          className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
            password.length >= 8
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={password.length < 8}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

render(<PasswordDemo />);
