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
  const dragStartX = React.useRef(0);
  const dragStartValue = React.useRef(0);
  const controls = useAnimation();

  const calculateSteppedValue = (rawValue) => {
    const steppedValue = Math.round((rawValue - min) / step) * step + min;
    return Math.min(max, Math.max(min, steppedValue));
  };

  const handleClick = React.useCallback((e) => {
    if (isDragging) return;
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const percentage = (e.clientX - rect.left) / rect.width;
    const newValue = min + percentage * (max - min);
    const steppedValue = calculateSteppedValue(newValue);
    setValue(steppedValue);
    onChange?.(steppedValue);
    controls.start({ width: `${((steppedValue - min) / (max - min)) * 100}%` });
  }, [isDragging, min, max, onChange, step]);

  const handleDragStart = React.useCallback((event) => {
    setIsDragging(true);
    dragStartX.current = 'touches' in event ? event.touches[0].clientX : event.clientX;
    dragStartValue.current = value;
  }, [value]);

  const handleDrag = React.useCallback((event, info) => {
    if (!trackRef.current) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const deltaX = info.point.x - dragStartX.current;
    const deltaPercentage = deltaX / rect.width;
    const deltaValue = deltaPercentage * (max - min);
    const newValue = calculateSteppedValue(dragStartValue.current + deltaValue);
    
    setValue(newValue);
    onChange?.(newValue);
    controls.start({ width: `${((newValue - min) / (max - min)) * 100}%` });
  }, [min, max, onChange, step]);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

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
    <div className={`w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md`}>
      <div className={`w-full space-y-2 ${className}`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">Range Slider</h2>
          {showValue && (
            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {value.toFixed(step < 1 ? 1 : 0)}
            </div>
          )}
        </div>
        
        <div
          ref={trackRef}
          className="relative h-3 bg-gray-100 rounded-full cursor-pointer shadow-inner"
          onClick={handleClick}
          role="presentation"
        >
          <motion.div
            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            initial={false}
            animate={controls}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />

          <motion.div
            role="slider"
            tabIndex={0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-label={label}
            className={`
              absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6
              rounded-full bg-white border-2 border-white shadow-lg
              cursor-grab focus:outline-none focus:ring-4 focus:ring-blue-200
              hover:scale-110 transition-transform
              ${isDragging ? 'cursor-grabbing ring-4 ring-blue-200' : ''}
            `}
            style={{ left: `${percentage}%` }}
            drag="x"
            dragConstraints={trackRef}
            dragElastic={0}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            onKeyDown={handleKeyDown}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full m-0.5" />
          </motion.div>
        </div>
        
        <div className="flex justify-between px-1 mt  -1">
          <span className="text-xs text-gray-500">{min}</span>
          <span className="text-xs text-gray-500">{max}</span>
        </div>
        
        <div className="pt-4">
          <p className="text-sm text-gray-600">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

render(<RangeSlider />);
