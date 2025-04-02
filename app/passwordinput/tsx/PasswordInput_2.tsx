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
    password.length >= 8 ? null : "Password must be at least 8 characters long",
  className = "",
  inputClassName = "",
  errorClassName = "text-red-500",
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
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
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className={clsx("w-full flex flex-col", className)}>
      <motion.div
        className={clsx(
          "relative flex items-center p-2 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800",
          isShaking ? "ring-2 ring-red-500" : "ring-0"
        )}
        animate={isShaking ? { scale: [1, 1.05, 0.95, 1] } : {}}
        transition={{ duration: 0.4 }}
      >
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={triggerValidation}
          className={clsx(
            "w-full py-2 px-3 rounded-lg bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400",
            inputClassName
          )}
          placeholder={placeholder}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
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
          className={clsx("mt-2 text-sm", errorClassName)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
};
