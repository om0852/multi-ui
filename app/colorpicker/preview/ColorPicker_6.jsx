
const ColorPicker_6 = ({ initialColor = "#ffffff", className = "", onChange }) => {
  const [baseColor, setBaseColor] = useState(initialColor);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturate: 100,
    hueRotate: 0,
    blur: 0,
    opacity: 100,
  });

  const filterRanges = {
    brightness: { min: 0, max: 200, unit: '%' },
    contrast: { min: 0, max: 200, unit: '%' },
    saturate: { min: 0, max: 200, unit: '%' },
    hueRotate: { min: 0, max: 360, unit: 'deg' },
    blur: { min: 0, max: 10, unit: 'px' },
    opacity: { min: 0, max: 100, unit: '%' },
  };

  const getFilterStyle = () => {
    return `
      brightness(${filters.brightness}%)
      contrast(${filters.contrast}%)
      saturate(${filters.saturate}%)
      hue-rotate(${filters.hueRotate}deg)
      blur(${filters.blur}px)
      opacity(${filters.opacity}%)
    `;
  };

  useEffect(() => {
    if (onChange) {
      onChange(baseColor);
    }
  }, [baseColor, onChange]);

  const handleFilterChange = (filter, value) => {
    setFilters(prev => ({
      ...prev,
      [filter]: value,
    }));
  };

  const FilterSlider = ({ name, label }) => (
    <div style={{
      marginBottom: '16px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4px',
      }}>
        <label style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          {label}
        </label>
        <span style={{
          fontSize: '0.9rem',
          color: '#6b7280',
          fontFamily: 'monospace',
        }}>
          {filters[name]}{filterRanges[name].unit}
        </span>
      </div>
      <input
        type="range"
        min={filterRanges[name].min}
        max={filterRanges[name].max}
        value={filters[name]}
        onChange={(e) => handleFilterChange(name, Number(e.target.value))}
        style={{
          width: '100%',
          height: '6px',
          borderRadius: '3px',
          background: `linear-gradient(90deg, 
            ${baseColor}40,
            ${baseColor}
          )`,
          backgroundSize: '200% 100%',
          animation: 'sliderPulse 2s ease infinite',
          WebkitAppearance: 'none',
          cursor: 'pointer',
        }}
      />
    </div>
  );

  const filterAnimation = `
    @keyframes filterPreview {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }

    @keyframes sliderPulse {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
  `;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '320px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <style>{filterAnimation}</style>

      {/* Animated Color Box */}
      <motion.div
        style={{
          width: '144px',
          height: '144px',
          borderRadius: '8px',
          backgroundColor: baseColor,
          filter: getFilterStyle(),
          animation: 'filterPreview 2s ease infinite',
        }}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Color Picker */}
      <div style={{
        position: 'relative',
        marginTop: '16px',
        width: '100%',
        maxWidth: '240px',
      }}>
        <motion.input
          type="color"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          style={{
            width: '100%',
            height: '40px',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            padding: '0',
            background: `linear-gradient(to right, ${baseColor} 0%, #ffffff 100%)`,
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.2 },
          }}
        />
      </div>

      {/* Filter Controls */}
      <div style={{
        width: '100%',
        marginTop: '20px',
      }}>
        <FilterSlider name="brightness" label="Brightness" />
        <FilterSlider name="contrast" label="Contrast" />
        <FilterSlider name="saturate" label="Saturation" />
        <FilterSlider name="hueRotate" label="Hue Rotate" />
        <FilterSlider name="blur" label="Blur" />
        <FilterSlider name="opacity" label="Opacity" />
      </div>

      {/* Reset Button */}
      <motion.button
        onClick={() => setFilters({
          brightness: 100,
          contrast: 100,
          saturate: 100,
          hueRotate: 0,
          blur: 0,
          opacity: 100,
        })}
        style={{
          width: '100%',
          marginTop: '16px',
          padding: '12px',
          background: '#f3f4f6',
          border: 'none',
          borderRadius: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        whileHover={{
          background: '#e5e7eb',
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
      >
        Reset Filters
      </motion.button>
    </div>
  );
};

// For React Live preview
const ColorPickerWithStyles = () => {
  const [selectedColor, setSelectedColor] = React.useState('#4F46E5');
  
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      background: '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{ 
        color: '#1e293b', 
        marginBottom: '25px',
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: '700',
        background: 'linear-gradient(90deg, #4F46E5, #8B5CF6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
      }}>
        Color Filter Picker
      </h2>
      
      <ColorPicker_6 
        initialColor={selectedColor}
        onChange={(color) => {
          setSelectedColor(color);
          console.log('Selected color:', color);
        }} 
      />
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        borderRadius: '12px',
        background: selectedColor,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '0.95rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '300px'
      }}>
        Selected: {selectedColor.toUpperCase()}
      </div>
    </div>
  );
};

  render(<ColorPickerWithStyles />);

