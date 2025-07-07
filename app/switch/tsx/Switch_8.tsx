import { motion } from "framer-motion";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Switch = ({ checked = false, onChange, disabled = false }: SwitchProps) => {
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className="flex items-center">
      <label htmlFor="switch" className="relative cursor-pointer">
        <input
          id="switch"
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={handleToggle}
          disabled={disabled}
        />
        {/* Switch Background */}
        <motion.div
          className={`w-16 h-8 rounded-full ${checked ? "bg-blue-500" : "bg-gray-300"} ${disabled ? "cursor-not-allowed" : ""}`}
          transition={{ duration: 0.3 }}
        />
        {/* Knob */}
        <motion.div
          className="absolute w-6 h-6 bg-white rounded-full shadow-md top-1 left-1"
          style={{ transform: checked ? "translateX(32px)" : "translateX(0)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </label>
    </div>
  );
};

export default Switch;
