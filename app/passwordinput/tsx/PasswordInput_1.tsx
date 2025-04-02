import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

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
  placeholder = "Enter password",
  validate = (password) =>
    password.length >= 6 ? null : "Password must be at least 6 characters long",
  className = "",
  inputClassName = "",
  errorClassName = "text-red-500",
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const handleInputChange = (value: string) => {
    setPassword(value);
    onChange?.(value);
    setError(null); // Clear error as user types
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
    <div className={clsx("w-full", className)}>
      <motion.div
        className={clsx(
          "relative flex items-center border-b-2 transition-colors",
          isFocused
            ? "border-blue-500"
            : "border-gray-300 dark:border-gray-600"
        )}
        animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            triggerValidation(); // Validate on blur
          }}
          className={clsx(
            "peer w-full py-2 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400",
            inputClassName
          )}
          placeholder={placeholder}
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          onClick={() => setIsVisible(!isVisible)}
          aria-label="Toggle password visibility"
        >
          <Image
            src={
              isVisible
                ? "https://img.icons8.com/?size=100&id=85028&format=png&color=000000"
                : "https://img.icons8.com/?size=100&id=121539&format=png&color=000000"
            }
            alt={isVisible ? "Hide password" : "Show password"}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </motion.button>
      </motion.div>
      {error && (
        <motion.span
          className={clsx("block mt-1 text-xs", errorClassName)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
};
