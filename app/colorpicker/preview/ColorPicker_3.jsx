
const ColorPicker_3 = ({ initialColor = "#ffffff", className = "", onChange }) => {
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedShade, setSelectedShade] = useState('500');
  const [rippleColor, setRippleColor] = useState('');
  const [activePalette, setActivePalette] = useState('Blue');

  const materialColors = {
    'Blue': {
      '50': '#e3f2fd',
      '100': '#bbdefb',
      '200': '#90caf9',
      '300': '#64b5f6',
      '400': '#42a5f5',
      '500': '#2196f3',
      '600': '#1e88e5',
      '700': '#1976d2',
      '800': '#1565c0',
      '900': '#0d47a1',
    },
    'Red': {
      '50': '#ffebee',
      '100': '#ffcdd2',
      '200': '#ef9a9a',
      '300': '#e57373',
      '400': '#ef5350',
      '500': '#f44336',
      '600': '#e53935',
      '700': '#d32f2f',
      '800': '#c62828',
      '900': '#b71c1c',
    },
    'Green': {
      '50': '#e8f5e9',
      '100': '#c8e6c9',
      '200': '#a5d6a7',
      '300': '#81c784',
      '400': '#66bb6a',
      '500': '#4caf50',
      '600': '#43a047',
      '700': '#388e3c',
      '800': '#2e7d32',
      '900': '#1b5e20',
    },
    'Purple': {
      '50': '#f3e5f5',
      '100': '#e1bee7',
      '200': '#ce93d8',
      '300': '#ba68c8',
      '400': '#ab47bc',
      '500': '#9c27b0',
      '600': '#8e24aa',
      '700': '#7b1fa2',
      '800': '#6a1b9a',
      '900': '#4a148c',
    },
    'Amber': {
      '50': '#fff8e1',
      '100': '#ffecb3',
      '200': '#ffe082',
      '300': '#ffd54f',
      '400': '#ffca28',
      '500': '#ffc107',
      '600': '#ffb300',
      '700': '#ffa000',
      '800': '#ff8f00',
      '900': '#ff6f00',
    },
    'Teal': {
      '50': '#e0f2f1',
      '100': '#b2dfdb',
      '200': '#80cbc4',
      '300': '#4db6ac',
      '400': '#26a69a',
      '500': '#009688',
      '600': '#00897b',
      '700': '#00796b',
      '800': '#00695c',
      '900': '#004d40',
    }
  };

  const handleColorSelect = (color, shade) => {
    setSelectedColor(color);
    setSelectedShade(shade);
    setRippleColor(color);
    setTimeout(() => setRippleColor(''), 500);
    if (onChange) {
      onChange(color);
    }
  };

  const materialAnimation = `
    @keyframes ripple {
      0% { transform: scale(0); opacity: 0.4; }
      100% { transform: scale(2); opacity: 0; }
    }

    @keyframes slideIn {
      from { transform: translateY(10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <style>{materialAnimation}</style>

      {/* Color Preview */}
      <motion.div
        style={{
          position: 'relative',
          marginBottom: '24px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '16px',
            backgroundColor: selectedColor,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
          }}
        >
          {rippleColor && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '40px',
                height: '40px',
                background: rippleColor,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'ripple 0.5s ease-out',
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Color Picker */}
      <motion.input
        type="color"
        value={selectedColor}
        onChange={(e) => handleColorSelect(e.target.value, 'custom')}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '3px solid #f3f4f6',
          cursor: 'pointer',
          marginBottom: '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        whileHover={{
          scale: 1.1,
          rotate: 90,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.9,
          rotate: -90,
          transition: { duration: 0.2 },
        }}
      />

      {/* Palette Selector */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {Object.keys(materialColors).map(palette => (
          <button
            key={palette}
            onClick={() => setActivePalette(palette)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              background: activePalette === palette ? materialColors[palette][500] : '#f3f4f6',
              color: activePalette === palette ? '#fff' : '#4b5563',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              boxShadow: activePalette === palette ? `0 2px 8px ${materialColors[palette][500]}40` : 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: activePalette === palette 
                  ? `0 4px 12px ${materialColors[palette][500]}60` 
                  : '0 2px 8px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            {palette}
          </button>
        ))}
      </div>

      {/* Color Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '8px',
        width: '100%',
        marginBottom: '20px'
      }}>
        {Object.entries(materialColors[activePalette]).map(([shade, color]) => (
          <motion.button
            key={shade}
            onClick={() => handleColorSelect(color, shade)}
            style={{
              aspectRatio: '1',
              borderRadius: '8px',
              border: 'none',
              background: color,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: selectedColor === color ? `0 0 0 3px #fff, 0 0 0 6px #000` : 'none',
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                zIndex: 1
              }
            }}
            whileHover={{ scale: 1.1, zIndex: 1 }}
            whileTap={{ scale: 0.95 }}
            title={`${activePalette} ${shade}`}
          >
            <div style={{
              position: 'absolute',
              bottom: '4px',
              left: '4px',
              background: 'rgba(0,0,0,0.5)',
              color: '#fff',
              fontSize: '10px',
              padding: '1px 4px',
              borderRadius: '4px',
              lineHeight: 1
            }}>
              {shade}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected Color Info */}
      <div style={{
        width: '100%',
        padding: '16px',
        background: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '4px'
        }}>
          <span style={{
            fontSize: '0.9rem',
            color: '#4b5563',
            fontWeight: '500'
          }}>
            Selected Color
          </span>
          <span style={{
            fontSize: '0.9rem',
            color: '#1e293b',
            fontWeight: '600',
            fontFamily: 'monospace',
            background: 'rgba(0,0,0,0.05)',
            padding: '2px 8px',
            borderRadius: '4px'
          }}>
            {selectedShade}
          </span>
        </div>
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorSelect(e.target.value, 'custom')}
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '0.95rem',
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
  );
};

// For React Live preview
const ColorPickerWithStyles = () => {
  const [selectedColor, setSelectedColor] = React.useState('#2196f3');
  
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
        background: 'linear-gradient(90deg, #2196f3, #00bcd4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
      }}>
        Material Color Picker
      </h2>
      
      <ColorPicker_3 
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
        maxWidth: '300px',
        transition: 'all 0.3s ease'
      }}>
        Selected: {selectedColor.toUpperCase()}
      </div>
    </div>
  );
};
  render(<ColorPickerWithStyles />);
