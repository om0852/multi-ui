
const ColorPicker_12 = ({ onChange }) => {
  const [hue, setHue] = useState(220);
  const [saturation, setSaturation] = useState(75);
  const [lightness, setLightness] = useState(60);
  const [alpha, setAlpha] = useState(100);
  const [isDragging, setIsDragging] = useState(false);

  const sliderAnimation = `
    @keyframes slideIn {
      from { transform: translateX(-10px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
      50% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); }
    }
  `;

  const currentColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha / 100})`;

  // Generate color stops for the hue slider
  const hueStops = [];
  for (let i = 0; i <= 360; i += 30) {
    hueStops.push(`hsl(${i}, 100%, 50%)`);
  }

  const handleChange = (value, type) => {
    switch (type) {
      case 'hue':
        setHue(value);
        break;
      case 'saturation':
        setSaturation(value);
        break;
      case 'lightness':
        setLightness(value);
        break;
      case 'alpha':
        setAlpha(value);
        break;
    }
  };

  // Notify parent of color changes
  useEffect(() => {
    if (onChange) {
      onChange(currentColor);
    }
  }, [hue, saturation, lightness, alpha, currentColor, onChange]);

  // Generate a checkerboard pattern for alpha background
  const alphaBackground = {
    backgroundImage: 
      'linear-gradient(45deg, #e5e7eb 25%, transparent 25%), ' +
      'linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), ' +
      'linear-gradient(45deg, transparent 75%, #e5e7eb 75%), ' +
      'linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)',
    backgroundSize: '16px 16px',
    backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
  };

  // Format the color value for display
  const formatColorValue = () => {
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${(alpha / 100).toFixed(2)})`;
  };

  // Copy to clipboard function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentColor);
    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) {
      copyBtn.textContent = '✓';
      setTimeout(() => {
        copyBtn.textContent = '⎘';
      }, 2000);
    }
  };

  return (
    <div style={{
      padding: '28px',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      maxWidth: '360px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <style>{sliderAnimation}</style>

      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '24px',
      }}>
        <h2 style={{
          margin: '0 0 8px 0',
          color: '#1f2937',
          fontSize: '1.8rem',
          fontWeight: '700',
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          HSL Color Picker
        </h2>
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '0.95rem',
        }}>
          Adjust the sliders to create your perfect color
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        {/* Color preview */}
        <div style={{
          height: '120px',
          borderRadius: '16px',
          background: currentColor,
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          transform: isDragging ? 'scale(0.99)' : 'scale(1)',
        }}>
          <div style={{
            ...alphaBackground,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '14px',
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: currentColor,
            borderRadius: '14px',
          }} />
        </div>

        {/* Color code */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f9fafb',
          borderRadius: '12px',
          padding: '12px 16px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: currentColor,
            border: '2px solid #fff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            marginRight: '12px',
            flexShrink: 0,
          }} />
          <div style={{
            flex: 1,
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            color: '#1f2937',
            wordBreak: 'break-all',
          }}>
            {formatColorValue()}
          </div>
          <button
            onClick={copyToClipboard}
            style={{
              background: 'none',
              border: 'none',
              color: '#6b7280',
              cursor: 'pointer',
              fontSize: '1.1rem',
              padding: '4px',
              borderRadius: '4px',
              marginLeft: '8px',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#4b5563',
                background: 'rgba(0, 0, 0, 0.05)',
              },
            }}
            id="copy-btn"
            title="Copy to clipboard"
            aria-label="Copy color to clipboard"
          >
            ⎘
          </button>
        </div>

        {/* Sliders */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {/* Hue slider */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}>
              <label style={{
                fontSize: '0.875rem',
                color: '#4b5563',
                fontWeight: '500',
              }}>
                Hue: {hue}°
              </label>
              <span style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                fontFamily: 'monospace',
              }}>
                0-360°
              </span>
            </div>
            <div style={{
              position: 'relative',
              height: '28px',
              borderRadius: '14px',
              background: `linear-gradient(to right, ${hueStops.join(', ')})`,
              cursor: 'pointer',
              overflow: 'hidden',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}>
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => handleChange(Number(e.target.value), 'hue')}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  appearance: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  margin: 0,
                  padding: 0,
                  outline: 'none',
                  '&::-webkit-slider-thumb': {
                    appearance: 'none',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                  '&::-moz-range-thumb': {
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                }}
              />
            </div>
          </div>

          {/* Saturation slider */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}>
              <label style={{
                fontSize: '0.875rem',
                color: '#4b5563',
                fontWeight: '500',
              }}>
                Saturation: {saturation}%
              </label>
              <span style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                fontFamily: 'monospace',
              }}>
                0-100%
              </span>
            </div>
            <div style={{
              position: 'relative',
              height: '28px',
              borderRadius: '14px',
              background: `linear-gradient(to right, 
                hsl(${hue}, 0%, ${lightness}%),
                hsl(${hue}, 100%, ${lightness}%)
              )`,
              cursor: 'pointer',
              overflow: 'hidden',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}>
              <input
                type="range"
                min="0"
                max="100"
                value={saturation}
                onChange={(e) => handleChange(Number(e.target.value), 'saturation')}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  appearance: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  margin: 0,
                  padding: 0,
                  outline: 'none',
                  '&::-webkit-slider-thumb': {
                    appearance: 'none',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                  '&::-moz-range-thumb': {
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                }}
              />
            </div>
          </div>

          {/* Lightness slider */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}>
              <label style={{
                fontSize: '0.875rem',
                color: '#4b5563',
                fontWeight: '500',
              }}>
                Lightness: {lightness}%
              </label>
              <span style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                fontFamily: 'monospace',
              }}>
                0-100%
              </span>
            </div>
            <div style={{
              position: 'relative',
              height: '28px',
              borderRadius: '14px',
              background: `linear-gradient(to right, 
                #000000,
                hsl(${hue}, ${saturation}%, 50%),
                #ffffff
              )`,
              cursor: 'pointer',
              overflow: 'hidden',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}>
              <input
                type="range"
                min="0"
                max="100"
                value={lightness}
                onChange={(e) => handleChange(Number(e.target.value), 'lightness')}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  appearance: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  margin: 0,
                  padding: 0,
                  outline: 'none',
                  '&::-webkit-slider-thumb': {
                    appearance: 'none',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                  '&::-moz-range-thumb': {
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                }}
              />
            </div>
          </div>

          {/* Alpha slider */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}>
              <label style={{
                fontSize: '0.875rem',
                color: '#4b5563',
                fontWeight: '500',
              }}>
                Opacity: {alpha}%
              </label>
              <span style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                fontFamily: 'monospace',
              }}>
                0-100%
              </span>
            </div>
            <div style={{
              position: 'relative',
              height: '28px',
              borderRadius: '14px',
              ...alphaBackground,
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(to right, 
                  hsla(${hue}, ${saturation}%, ${lightness}%, 0),
                  hsla(${hue}, ${saturation}%, ${lightness}%, 1)
                )`,
              }} />
              <input
                type="range"
                min="0"
                max="100"
                value={alpha}
                onChange={(e) => handleChange(Number(e.target.value), 'alpha')}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  appearance: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  margin: 0,
                  padding: 0,
                  outline: 'none',
                  '&::-webkit-slider-thumb': {
                    appearance: 'none',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha / 100})`,
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                  '&::-moz-range-thumb': {
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha / 100})`,
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// For React Live preview
const ColorPickerWithStyles = () => {
  const [selectedColor, setSelectedColor] = React.useState('hsla(220, 75%, 60%, 1)');
  
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #f6f7f9 0%, #e9ecf1 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        color: '#1f2937', 
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '2.2rem',
        fontWeight: '800',
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
        letterSpacing: '-0.5px'
      }}>
        HSL Color Picker
      </h1>
      
      <ColorPicker_12 
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
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '320px',
        transition: 'all 0.3s ease',
        border: 'none',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ 
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)',
          zIndex: '1',
        }} />
        <div style={{ position: 'relative', zIndex: '2' }}>
          <div style={{ fontSize: '0.8rem', opacity: '0.9', marginBottom: '4px' }}>SELECTED COLOR</div>
          <div style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>
            {selectedColor.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
  render(<ColorPickerWithStyles />);

