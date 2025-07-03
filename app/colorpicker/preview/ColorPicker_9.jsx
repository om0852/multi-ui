
const ColorPicker_9 = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [activeBrand, setActiveBrand] = useState('tech');
  const [isAnimating, setIsAnimating] = useState(false);

  const brandAnimation = `
    @keyframes brandSlide {
      from { transform: translateX(-10px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    @keyframes logoSpin {
      from { transform: rotateY(0deg); }
      to { transform: rotateY(360deg); }
    }
  `;

  const brandPalettes = {
    tech: {
      name: 'Tech Giants',
      brands: [
        {
          name: 'Google',
          logo: '🔍',
          colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335'],
        },
        {
          name: 'Microsoft',
          logo: '⊞',
          colors: ['#f25022', '#7fba00', '#00a4ef', '#ffb900'],
        },
        {
          name: 'Apple',
          logo: '🍎',
          colors: ['#000000', '#555555', '#7d7d7d', '#ffffff'],
        },
      ],
    },
    social: {
      name: 'Social Media',
      brands: [
        {
          name: 'Facebook',
          logo: '📘',
          colors: ['#1877f2', '#ffffff', '#3b5998', '#8b9dc3'],
        },
        {
          name: 'Instagram',
          logo: '📸',
          colors: ['#405de6', '#5851db', '#833ab4', '#c13584', '#e1306c', '#fd1d1d'],
        },
        {
          name: 'Twitter',
          logo: '🐦',
          colors: ['#1da1f2', '#14171a', '#657786', '#aab8c2'],
        },
      ],
    },
    retail: {
      name: 'Retail',
      brands: [
        {
          name: 'Target',
          logo: '🎯',
          colors: ['#cc0000', '#ffffff', '#333333'],
        },
        {
          name: 'Walmart',
          logo: '🛒',
          colors: ['#0071ce', '#ffc220', '#ffffff'],
        },
        {
          name: 'Amazon',
          logo: '📦',
          colors: ['#ff9900', '#146eb4', '#232f3e'],
        },
      ],
    },
    food: {
      name: 'Food & Beverage',
      brands: [
        {
          name: 'Coca-Cola',
          logo: '🥤',
          colors: ['#f40009', '#ffffff', '#000000'],
        },
        {
          name: 'Starbucks',
          logo: '☕',
          colors: ['#00704a', '#27251f', '#f1f8f6'],
        },
        {
          name: "McDonald's",
          logo: '🍔',
          colors: ['#ffc72c', '#da291c', '#000000'],
        },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    if (onChange) {
      onChange(color);
    }
  };

  const handleBrandChange = (brand) => {
    setActiveBrand(brand);
    // Set the first color of the first brand in the category as selected
    if (brandPalettes[brand]?.brands?.[0]?.colors?.[0]) {
      handleColorSelect(brandPalettes[brand].brands[0].colors[0]);
    }
  };

  return (
    <div style={{
      padding: '28px',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <style>{brandAnimation}</style>

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
          Brand Color Picker
        </h2>
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '0.95rem',
        }}>
          Explore colors from famous brands
        </p>
      </div>

      {/* Category selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        marginBottom: '28px',
      }}>
        {Object.entries(brandPalettes).map(([key, { name }]) => {
          const isActive = activeBrand === key;
          return (
            <button
              key={key}
              onClick={() => handleBrandChange(key)}
              style={{
                padding: '14px 12px',
                background: isActive ? '#f5f3ff' : '#f9fafb',
                border: '2px solid',
                borderColor: isActive ? '#8b5cf6' : '#e5e7eb',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                color: isActive ? '#7c3aed' : '#4b5563',
                fontWeight: isActive ? '600' : '500',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                },
                '&:active': {
                  transform: 'translateY(1px)'
                }
              }}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* Brand palettes */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginBottom: '28px',
      }}>
        {brandPalettes[activeBrand].brands.map((brand, index) => (
          <div
            key={`${activeBrand}-${brand.name}-${index}`}
            style={{
              animation: `brandSlide 0.4s ease-out ${index * 0.1}s`,
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '14px',
              padding: '0 4px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#f9fafb',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                animation: 'logoSpin 8s linear infinite',
                animationPlayState: isAnimating ? 'running' : 'paused',
              }}>
                {brand.logo}
              </div>
              <span style={{
                fontSize: '1.1rem',
                color: '#1f2937',
                fontWeight: '600',
                letterSpacing: '-0.3px',
              }}>
                {brand.name}
              </span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
              gap: '12px',
            }}>
              {brand.colors.map((color, colorIndex) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    background: color,
                    border: selectedColor === color ? '3px solid #fff' : '3px solid transparent',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.05)',
                      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
                    },
                    '&:active': {
                      transform: 'translateY(-1px) scale(0.98)'
                    }
                  }}
                >
                  {selectedColor === color && (
                    <div style={{
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: color,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected color display */}
      <div style={{
        padding: '16px',
        background: '#f9fafb',
        borderRadius: '14px',
        border: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '10px',
          background: selectedColor,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '2px solid #fff',
          flexShrink: '0',
          transition: 'all 0.3s ease',
          transform: isAnimating ? 'scale(1.05)' : 'scale(1)',
        }} />
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '0.8rem',
            color: '#6b7280',
            marginBottom: '4px',
            fontWeight: '500',
          }}>
            SELECTED COLOR
          </div>
          <input
            type="text"
            value={selectedColor}
            onChange={(e) => handleColorSelect(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              color: '#1f2937',
              fontFamily: 'monospace',
              background: '#ffffff',
              outline: 'none',
              transition: 'all 0.2s ease',
              '&:focus': {
                borderColor: '#8b5cf6',
                boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)'
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
        Brand Color Explorer
      </h1>
      
      <ColorPicker_9 
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

