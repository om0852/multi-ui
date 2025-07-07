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
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    let score = 0;
    if (password.length > 8) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^A-Za-z0-9]/)) score++;
    setStrength(score);
  }, [password]);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      onSubmit?.(strength === 4);
    }, 1000);
  };

  const strengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'][strength];
  const strengthColor = ['red', 'orange', 'yellow', 'blue', 'green'][strength];

  return (
    <div className={`max-w-md mx-auto p-6 bg-white rounded-xl shadow-md ${className}`}>
      <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {isVisible ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>

      {password && (
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span>Strength:</span>
            <span className={`font-medium text-${strengthColor}-600`}>
              {strengthText}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-full rounded-full bg-${strengthColor}-500`} 
              style={{ width: `${(strength / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={isLoading || password.length === 0}
        className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${
          isLoading || password.length === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-purple-600 hover:bg-purple-700'
        }`}
      >
        {isLoading ? 'Processing...' : isSubmitted ? '✓ Submitted' : 'Submit'}
      </button>

      {isSubmitted && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center">
          {strength >= 3 ? '✅ Password is strong!' : '⚠️ Consider a stronger password'}
        </div>
      )}
    </div>
  );
};

// Example usage
const App = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <PasswordInput 
      onSubmit={(isValid) => console.log('Is valid:', isValid)} 
    />
  </div>
);

// Render the app
render(<App />);
