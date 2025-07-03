
const ColorPicker_10 = ({ onChange }) => {
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(16);
  const [wcagResults, setWcagResults] = useState([]);
  const [previewText, setPreviewText] = useState('Preview Text');
  const [isAnimating, setIsAnimating] = useState(false);

  const accessibilityAnimation = `
    @keyframes checkmarkDraw {
      from { stroke-dashoffset: 100; }
      to { stroke-dashoffset: 0; }
    }

    @keyframes slideUp {
      from { transform: translateY(10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  const calculateRelativeLuminance = (hex) => {
    const rgb = hex.match(/[A-Za-z0-9]{2}/g)?.map(v => parseInt(v, 16) / 255) || [0, 0, 0];
    const [r, g, b] = rgb.map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const calculateContrastRatio = (l1, l2) => {
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };

  useEffect(() => {
    const textLuminance = calculateRelativeLuminance(textColor);
    const bgLuminance = calculateRelativeLuminance(backgroundColor);
    const ratio = calculateContrastRatio(textLuminance, bgLuminance);

    const results = [
      { level: 'AA Large', pass: ratio >= 3, ratio },
      { level: 'AA Normal', pass: ratio >= 4.5, ratio },
      { level: 'AAA Large', pass: ratio >= 4.5, ratio },
      { level: 'AAA Normal', pass: ratio >= 7, ratio },
    ];

    setWcagResults(results);
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    
    if (onChange) {
      onChange(textColor);
    }
    
    return () => clearTimeout(timer);
  }, [textColor, backgroundColor, onChange]);

  const handleColorChange = (type, value) => {
    if (type === 'text') {
      setTextColor(value);
    } else {
      setBackgroundColor(value);
    }
  };

  const renderColorInput = (type, value, label) => (
    <div style={{
      flex: 1,
      marginBottom: '16px',
    }}>
      <label style={{
        display: 'block',
        marginBottom: '8px',
        color: '#4b5563',
        fontSize: '0.875rem',
        fontWeight: '500',
      }}>
        {label}
      </label>
      <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
      }}>
        <input
          type="color"
          value={value}
          onChange={(e) => handleColorChange(type, e.target.value)}
          style={{
            width: '40px',
            height: '40px',
            padding: 0,
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            '&:focus': {
              outline: 'none',
              borderColor: '#8b5cf6',
              boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.2)'
            }
          }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => handleColorChange(type, e.target.value)}
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontFamily: 'monospace',
            color: '#1f2937',
            transition: 'all 0.2s ease',
            '&:focus': {
              outline: 'none',
              borderColor: '#8b5cf6',
              boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.2)'
            }
          }}
        />
      </div>
    </div>
  );

  return (
    <div style={{
      padding: '28px',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      maxWidth: '480px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <style>{accessibilityAnimation}</style>

      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid #f3f4f6',
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
          Accessibility Checker
        </h2>
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '0.95rem',
        }}>
          Test color contrast for WCAG compliance
        </p>
      </div>

      {/* Text preview */}
      <div 
        style={{
          padding: '20px',
          borderRadius: '14px',
          marginBottom: '24px',
          minHeight: '150px',
          background: backgroundColor,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          border: '1px solid rgba(0,0,0,0.05)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          transform: isAnimating ? 'scale(1.01)' : 'scale(1)'
        }}
      >
        <p 
          style={{
            margin: 0,
            color: textColor,
            fontSize: `${fontSize}px`,
            fontWeight: '500',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            maxWidth: '100%',
            wordBreak: 'break-word',
            padding: '0 10px',
          }}
        >
          {previewText}
        </p>
        <input
          type="text"
          value={previewText}
          onChange={(e) => setPreviewText(e.target.value)}
          style={{
            width: '80%',
            padding: '8px 12px',
            borderRadius: '8px',
            border: `1px solid ${textColor}80`,
            background: 'rgba(255, 255, 255, 0.1)',
            color: textColor,
            fontSize: '0.9rem',
            textAlign: 'center',
            outline: 'none',
            transition: 'all 0.2s ease',
            '&:focus': {
              borderColor: textColor,
              boxShadow: `0 0 0 2px ${textColor}40`
            },
            '::placeholder': {
              color: `${textColor}80`
            }
          }}
          placeholder="Edit preview text..."
        />
      </div>

      {/* Color controls */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '24px',
      }}>
        {renderColorInput('text', textColor, 'Text Color')}
        {renderColorInput('background', backgroundColor, 'Background Color')}
        
        {/* Font size control */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}>
            <label style={{
              color: '#4b5563',
              fontSize: '0.875rem',
              fontWeight: '500',
            }}>
              Font Size
            </label>
            <span style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              fontFamily: 'monospace',
            }}>
              {fontSize}px
            </span>
          </div>
          <input
            type="range"
            min="12"
            max="48"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: '#e5e7eb',
              outline: 'none',
              WebkitAppearance: 'none',
              '&::-webkit-slider-thumb': {
                WebkitAppearance: 'none',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#8b5cf6',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  background: '#7c3aed',
                }
              }
            }}
          />
        </div>
      </div>

      {/* WCAG results */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}>
        {wcagResults.map((result, index) => {
          const isLarge = result.level.includes('Large');
          const isAAA = result.level.includes('AAA');
          const pass = result.pass;
          
          return (
            <div
              key={result.level}
              style={{
                padding: '16px',
                background: pass ? '#f0fdf4' : '#fef2f2',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                border: `1px solid ${pass ? '#bbf7d0' : '#fecaca'}`,
                transition: 'all 0.3s ease',
                animation: `slideUp 0.3s ease-out ${index * 0.1}s`,
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
              }}
            >
              <div style={{
                fontSize: '0.8rem',
                color: pass ? '#15803d' : '#b91c1c',
                fontWeight: '600',
                textAlign: 'center',
              }}>
                {result.level}
              </div>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: pass ? '#22c55e' : '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}>
                {pass ? '✓' : '✕'}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#4b5563',
                fontWeight: '600',
                fontFamily: 'monospace',
              }}>
                {result.ratio.toFixed(2)}:1
              </div>
              <div style={{
                fontSize: '0.7rem',
                color: '#6b7280',
                textAlign: 'center',
                lineHeight: '1.3',
              }}>
                {isLarge ? '18pt+ or 14pt+ bold' : 'Normal text'}
              </div>
              {!pass && (
                <div style={{
                  fontSize: '0.7rem',
                  color: '#b91c1c',
                  background: 'rgba(239, 68, 68, 0.1)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginTop: '4px',
                  textAlign: 'center',
                }}>
                  {isAAA ? 'AAA not met' : 'AA not met'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WCAG Info */}
      <div style={{
        marginTop: '24px',
        padding: '16px',
        background: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        fontSize: '0.8rem',
        color: '#475569',
        lineHeight: '1.5',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px',
          color: '#334155',
          fontWeight: '600',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#64748b"/>
          </svg>
          WCAG 2.1 Guidelines
        </div>
        <ul style={{
          margin: '0',
          paddingLeft: '20px',
        }}>
          <li><strong>AA Normal:</strong> 4.5:1 contrast (minimum)</li>
          <li><strong>AA Large:</strong> 3:1 contrast (18pt+ or 14pt+ bold)</li>
          <li><strong>AAA Normal:</strong> 7:1 contrast (enhanced)</li>
          <li><strong>AAA Large:</strong> 4.5:1 contrast (18pt+ or 14pt+ bold)</li>
        </ul>
      </div>
    </div>
  );
};

// For React Live preview
const ColorPickerWithStyles = () => {
  const [selectedColor, setSelectedColor] = React.useState('#000000');
  
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px',
      maxWidth: '600px',
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
        Accessibility Checker
      </h1>
      
      <ColorPicker_10 
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

// Add to window for React Live preview
  render(<ColorPickerWithStyles />);
