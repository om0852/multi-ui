import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface PasswordInputProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  validate?: (password: string) => string | null; // Returns an error message if invalid
  className?: string;
  inputClassName?: string;
  errorClassName?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
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
  const [shake, setShake] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setPassword(value);
    onChange?.(value);
    setError(null); // Clear error as user types
  };

  const triggerValidation = () => {
    const errorMessage = validate(password);
    if (errorMessage) {
      setError(errorMessage);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className={clsx("w-full relative", className)}>
      <motion.div
        className={clsx(
          "relative border-2 rounded-lg p-2 transition-colors",
          isFocused
            ? "border-blue-500"
            : error
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-600"
        )}
        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.label
          htmlFor={id}
          className={clsx(
            "absolute -top-3.5 left-3 px-1 text-sm transition-all pointer-events-none",
            isFocused || password
              ? "text-blue-500 dark:text-blue-400 bg-white dark:bg-gray-900"
              : "text-gray-500 dark:text-gray-400"
          )}
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
          className={clsx(
            "w-full bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none placeholder-transparent",
            inputClassName
          )}
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(!isVisible)}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Toggle password visibility"
        >
          <img
            src={
              isVisible
                ? "https://img.icons8.com/?size=100&id=85028&format=png&color=000000"
                : "https://img.icons8.com/?size=100&id=121539&format=png&color=000000"
            }
            alt={isVisible ? "Hide password" : "Show password"}
            className="w-5 h-5"
          />
        </motion.button>
      </motion.div>
      {error && (
        <motion.span
          className={clsx("mt-1 block text-sm", errorClassName)}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
};
