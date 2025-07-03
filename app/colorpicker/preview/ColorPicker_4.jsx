
const ColorPicker_4 = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [activeButton, setActiveButton] = useState(null);
  const [isPressing, setIsPressing] = useState(false);

  const colors = [
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Rose', value: '#f43f5e' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Sky', value: '#0ea5e9' },
    { name: 'Violet', value: '#8b5cf6' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Lime', value: '#84cc16' },
  ];

  const neumorphicAnimation = `
    @keyframes pressIn {
      from { 
        box-shadow: 6px 6px 12px #a8b1c1,
                   -6px -6px 12px #ffffff;
      }
      to { 
        box-shadow: inset 2px 2px 5px #a8b1c1,
                   inset -2px -2px 5px #ffffff;
      }
    }

    @keyframes pressOut {
      from { 
        box-shadow: inset 2px 2px 5px #a8b1c1,
                   inset -2px -2px 5px #ffffff;
      }
      to { 
        box-shadow: 6px 6px 12px #a8b1c1,
                   -6px -6px 12px #ffffff;
      }
    }

    @keyframes colorPop {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `;

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  const getButtonStyle = (color) => {
    const isActive = selectedColor === color.value;
    const isPressed = activeButton === color.value;
    
    return {
      padding: '16px',
      background: isPressed ? '#d1d9e6' : '#e0e5ec',
      border: 'none',
      borderRadius: '16px',
      color: isActive ? color.value : '#4b5563',
      fontSize: '0.9rem',
      fontWeight: isActive ? '600' : '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: isPressed
        ? 'inset 3px 3px 6px #a8b1c1, inset -3px -3px 6px #ffffff'
        : '6px 6px 12px #a8b1c1, -6px -6px 12px #ffffff',
      transform: isPressed ? 'translateY(2px)' : 'translateY(0)',
      '&:hover': {
        color: color.value,
        transform: 'translateY(-2px)',
        boxShadow: '8px 8px 16px #a8b1c1, -8px -8px 16px #ffffff'
      },
      '&:active': {
        transform: 'translateY(1px)'
      }
    };
  };

  return (
    <div style={{
      padding: '28px',
      background: '#e0e5ec',
      borderRadius: '24px',
      boxShadow: '8px 8px 16px #a8b1c1, -8px -8px 16px #ffffff',
      maxWidth: '360px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <style>{neumorphicAnimation}</style>

      {/* Color preview */}
      <div style={{
        marginBottom: '28px',
        padding: '4px',
        borderRadius: '20px',
        background: '#e0e5ec',
        boxShadow: 'inset 3px 3px 6px #a8b1c1, inset -3px -3px 6px #ffffff',
      }}>
        <div style={{
          height: '120px',
          borderRadius: '16px',
          background: selectedColor,
          transition: 'all 0.3s ease',
          animation: 'colorPop 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.9rem',
          fontWeight: '500',
          textShadow: '0 1px 2px rgba(0,0,0,0.2)',
          letterSpacing: '0.5px'
        }}>
          {selectedColor.toUpperCase()}
        </div>
      </div>

      {/* Color buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: '24px'
      }}>
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorChange(color.value)}
            onMouseDown={() => setActiveButton(color.value)}
            onMouseUp={() => setActiveButton(null)}
            onMouseLeave={() => setActiveButton(null)}
            style={getButtonStyle(color)}
          >
            {color.name}
          </button>
        ))}
      </div>

      {/* Color input */}
      <div style={{
        marginBottom: '24px',
        padding: '4px',
        borderRadius: '14px',
        background: '#e0e5ec',
        boxShadow: 'inset 3px 3px 6px #a8b1c1, inset -3px -3px 6px #ffffff',
      }}>
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 16px',
            background: '#e0e5ec',
            border: 'none',
            borderRadius: '12px',
            color: '#4b5563',
            fontSize: '0.95rem',
            fontFamily: 'monospace',
            textAlign: 'center',
            outline: 'none',
            boxShadow: 'inset 2px 2px 4px #a8b1c1, inset -2px -2px 4px #ffffff',
            '&:focus': {
              boxShadow: 'inset 2px 2px 4px #a8b1c1, inset -2px -2px 4px #ffffff, 0 0 0 2px rgba(99, 102, 241, 0.5)'
            }
          }}
          placeholder="Enter hex color"
        />
      </div>

      {/* Color picker */}
      <div style={{
        padding: '4px',
        borderRadius: '14px',
        background: '#e0e5ec',
        boxShadow: 'inset 3px 3px 6px #a8b1c1, inset -3px -3px 6px #ffffff',
      }}>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          style={{
            width: '100%',
            height: '50px',
            padding: '0',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            background: 'transparent',
          }}
        />
      </div>
    </div>
  );
};

// For React Live preview
const ColorPickerWithStyles = () => {
  const [selectedColor, setSelectedColor] = React.useState('#6366f1');
  
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      background: '#e0e5ec',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{ 
        color: '#4b5563', 
        marginBottom: '25px',
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: '700',
        textShadow: '2px 2px 4px #a8b1c1, -2px -2px 4px #ffffff',
        padding: '12px 24px',
        borderRadius: '16px',
        background: '#e0e5ec',
        boxShadow: '6px 6px 12px #a8b1c1, -6px -6px 12px #ffffff'
      }}>
        Neumorphic Color Picker
      </h2>
      
      <ColorPicker_4 
        onChange={(color) => {
          setSelectedColor(color);
          console.log('Selected color:', color);
        }} 
      />
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        borderRadius: '16px',
        background: selectedColor,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '0.95rem',
        boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1)',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '300px',
        transition: 'all 0.3s ease',
        border: 'none',
        outline: 'none'
      }}>
        Selected: {selectedColor.toUpperCase()}
      </div>
    </div>
  );
};

  render(<ColorPickerWithStyles />);

