
const ColorPicker_2 = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [activePreset, setActivePreset] = useState(0);

  const gradientPresets = [
    {
      name: 'Sunset',
      colors: ['#ff6b6b', '#ffd93d', '#ff8e3c'],
      gradient: 'linear-gradient(45deg, #ff6b6b, #ffd93d, #ff8e3c)',
    },
    {
      name: 'Ocean',
      colors: ['#4ecdc4', '#45b7d1', '#2d98da'],
      gradient: 'linear-gradient(45deg, #4ecdc4, #45b7d1, #2d98da)',
    },
    {
      name: 'Forest',
      colors: ['#2ecc71', '#27ae60', '#1abc9c'],
      gradient: 'linear-gradient(45deg, #2ecc71, #27ae60, #1abc9c)',
    },
    {
      name: 'Twilight',
      colors: ['#9b59b6', '#8e44ad', '#2c3e50'],
      gradient: 'linear-gradient(45deg, #9b59b6, #8e44ad, #2c3e50)',
    },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  const gradientAnimation = `
    @keyframes shimmer {
      0% { background-position: 100% 0; }
      100% { background-position: -100% 0; }
    }

    @keyframes fadeScale {
      from { transform: scale(0.98); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `;

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: '0 auto'
    }}>
      <style>{gradientAnimation}</style>

      {/* Gradient preview */}
      <div style={{
        height: '120px',
        borderRadius: '12px',
        background: gradientPresets[activePreset].gradient,
        backgroundSize: '200% 100%',
        animation: 'shimmer 3s linear infinite',
        marginBottom: '24px',
      }} />

      {/* Gradient presets */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {gradientPresets.map((preset, index) => (
          <button
            key={index}
            onClick={() => setActivePreset(index)}
            style={{
              padding: '12px',
              border: activePreset === index ? '2px solid #6366f1' : '2px solid transparent',
              borderRadius: '8px',
              background: preset.gradient,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              height: '60px',
              animation: 'fadeScale 0.3s ease-out',
            }}
          >
            <span style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              color: '#ffffff',
              fontSize: '0.8rem',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              fontWeight: '500'
            }}>
              {preset.name}
            </span>
          </button>
        ))}
      </div>

      {/* Color swatches */}
      <div style={{
        marginBottom: '24px',
      }}>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
          marginBottom: '12px',
          fontWeight: '500'
        }}>
          Colors in Gradient
        </div>
        <div style={{
          display: 'flex',
          gap: '8px',
        }}>
          {gradientPresets[activePreset].colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorSelect(color)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: color,
                border: selectedColor === color ? '2px solid #000' : 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                animation: 'fadeScale 0.3s ease-out',
                '&:hover': {
                  transform: 'translateY(-2px)'
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Selected color */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        background: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          background: selectedColor,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0,0,0,0.1)'
        }} />
        <div style={{
          flex: 1,
        }}>
          <input
            type="text"
            value={selectedColor}
            onChange={(e) => handleColorSelect(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: '#1e293b',
              fontFamily: 'monospace',
              background: '#ffffff',
              outline: 'none',
              transition: 'all 0.2s ease',
              '&:focus': {
                borderColor: '#6366f1',
                boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)'
              }
            }}
          />
        </div>
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
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
      }}>
        Gradient Color Picker
      </h2>
      
      <ColorPicker_2 
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
        maxWidth: '300px',
        transition: 'all 0.3s ease'
      }}>
        Selected: {selectedColor.toUpperCase()}
      </div>
    </div>
  );
};

  root.render(<ColorPickerWithStyles />);

