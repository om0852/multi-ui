const { motion, useAnimation } = require('framer-motion');
const React = require('react');

const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
  className = "",
  label = "Adjust the value",
  showValue = true,
}) => {
  const [value, setValue] = React.useState(defaultValue);
  const [isDragging, setIsDragging] = React.useState(false);
  const trackRef = React.useRef(null);
  const controls = useAnimation();

  const calculateSteppedValue = (rawValue) => {
    const steppedValue = Math.round((rawValue - min) / step) * step + min;
    return Math.min(max, Math.max(min, steppedValue));
  };

  const handleClick = React.useCallback((e) => {
    if (isDragging) return;
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newValue = min + percentage * (max - min);
    const steppedValue = calculateSteppedValue(newValue);
    setValue(steppedValue);
    onChange?.(steppedValue);
    controls.start({ width: `${((steppedValue - min) / (max - min)) * 100}%` });
  }, [isDragging, min, max, onChange]);

  const handleDrag = React.useCallback((_, info) => {
    if (!trackRef.current) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (info.point.x - rect.left) / rect.width));
    const newValue = min + percentage * (max - min);
    const steppedValue = calculateSteppedValue(newValue);
    
    setValue(steppedValue);
    onChange?.(steppedValue);
    controls.start({ width: `${((steppedValue - min) / (max - min)) * 100}%` });
  }, [min, max, onChange]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  const handleKeyDown = React.useCallback((e) => {
    let newValue = value;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        newValue = calculateSteppedValue(value + step);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        newValue = calculateSteppedValue(value - step);
        break;
      case "Home":
        newValue = min;
        break;
      case "End":
        newValue = max;
        break;
      default:
        return;
    }
    e.preventDefault();
    setValue(newValue);
    onChange?.(newValue);
    controls.start({ width: `${((newValue - min) / (max - min)) * 100}%` });
  }, [value, min, max, step, onChange]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className={`w-full space-y-3 ${className}`}>
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xl font-bold text-gray-900">Minimal Range Slider</h2>
          {showValue && (
            <span className="px-3 py-1 text-sm font-medium text-white bg-black rounded-md">
              {value.toFixed(step < 1 ? 1 : 0)}
            </span>
          )}
        </div>
        
        <div
          ref={trackRef}
          className="relative h-1.5 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleClick}
          role="presentation"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            initial={false}
            animate={controls}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />

          <motion.div
            role="slider"
            tabIndex={0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-label={label}
            className={`
              absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5
              bg-white border-2 border-blue-500 rounded-full shadow-lg
              cursor-grab focus:outline-none focus:ring-2 focus:ring-blue-200
              hover:scale-110 transition-all duration-150
              ${isDragging ? 'cursor-grabbing scale-105' : ''}
            `}
            style={{ left: `${percentage}%` }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: trackRef.current?.offsetWidth || 0
            }}
            dragElastic={0}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onKeyDown={handleKeyDown}
          />
        </div>
        
        <div className="flex justify-between px-1">
          <span className="text-xs font-medium text-gray-600">{min}</span>
          <span className="text-xs font-medium text-gray-600">{max}</span>
        </div>
        
        <div className="pt-2">
          <p className="text-sm text-gray-600">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

render(<RangeSlider />);
