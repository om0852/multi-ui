
const ColorPicker_11 = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [isRotating, setIsRotating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const colorAnimation = `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
  `;

  const colors = [
    '#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#8b5cf6',
    '#ef4444', '#22c55e', '#3b82f6', '#f97316', '#06b6d4',
    '#a855f7', '#10b981', '#f43f5e', '#0ea5e9', '#84cc16'
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setIsRotating(true);
    if (onChange) {
      onChange(color);
    }
    setTimeout(() => setIsRotating(false), 800);
  };

  const getTextColor = (bgColor) => {
    // Convert hex to RGB
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);
    
    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Return black for light colors, white for dark colors
    return brightness > 155 ? '#000000' : '#ffffff';
  };

  return (
    <div style={{
      padding: '28px',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      maxWidth: '320px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <style>{colorAnimation}</style>

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
          Color Wheel Picker
        </h2>
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '0.95rem',
        }}>
          Click on a color to select it
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        {/* Selected color preview */}
        <div style={{
          position: 'relative',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${selectedColor} 0%, ${adjustColor(selectedColor, 20)} 100%)`,
          boxShadow: `0 10px 30px ${selectedColor}40`,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: isRotating ? 'pulse 0.8s ease' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: getTextColor(selectedColor),
          fontSize: '1.1rem',
          fontWeight: '600',
          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            zIndex: '1',
          }} />
          <span style={{ position: 'relative', zIndex: '2' }}>{selectedColor}</span>
        </div>

        {/* Color wheel */}
        <div 
          style={{
            position: 'relative',
            width: '240px',
            height: '240px',
            animation: isRotating ? 'rotate 0.8s ease' : 'none',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Center circle */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: selectedColor,
            boxShadow: `0 0 20px ${selectedColor}80`,
            zIndex: '10',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: getTextColor(selectedColor),
            fontSize: '0.7rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            animation: isHovered ? 'float 2s ease-in-out infinite' : 'none',
          }}>
            Pick
          </div>
          
          {/* Color dots */}
          {colors.map((color, index) => {
            const angle = (index * 360) / colors.length;
            const radius = 90;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const isSelected = selectedColor === color;

            return (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  width: isSelected ? '36px' : '30px',
                  height: isSelected ? '36px' : '30px',
                  borderRadius: '50%',
                  background: color,
                  border: isSelected ? '3px solid #ffffff' : 'none',
                  boxShadow: isSelected 
                    ? `0 0 20px ${color}80, 0 4px 12px rgba(0, 0, 0, 0.15)` 
                    : `0 4px 12px ${color}40`,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  outline: 'none',
                  zIndex: isSelected ? '5' : '1',
                  '&:hover': {
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(1.2)`,
                    boxShadow: `0 0 25px ${color}80, 0 6px 15px rgba(0, 0, 0, 0.2)`,
                  },
                  '&:active': {
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(0.95)`,
                  },
                  animation: isHovered && !isSelected ? 'float 2s ease-in-out infinite' : 'none',
                  animationDelay: `${index * 0.1}s`,
                }}
                title={color}
                aria-label={`Select color ${color}`}
              />
            );
          })}
        </div>

        {/* Color code */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: '#f9fafb',
          padding: '12px 20px',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '220px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            background: selectedColor,
            border: '2px solid #fff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            flexShrink: '0',
          }} />
          <input
            type="text"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{
              flex: '1',
              background: 'transparent',
              border: 'none',
              fontSize: '0.95rem',
              fontFamily: 'monospace',
              color: '#1f2937',
              outline: 'none',
              minWidth: '0',
              '&::selection': {
                background: selectedColor,
                color: getTextColor(selectedColor),
              },
            }}
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(selectedColor);
              const copyBtn = document.getElementById('copy-btn');
              if (copyBtn) {
                copyBtn.textContent = '✓';
                setTimeout(() => {
                  copyBtn.textContent = '⎘';
                }, 2000);
              }
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#6b7280',
              cursor: 'pointer',
              fontSize: '1.1rem',
              padding: '4px',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#4b5563',
                background: 'rgba(0, 0, 0, 0.05)',
              },
              '&:active': {
                transform: 'scale(0.9)',
              },
            }}
            id="copy-btn"
            title="Copy to clipboard"
            aria-label="Copy color to clipboard"
          >
            ⎘
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to adjust color brightness
function adjustColor(color, amount) {
  // Convert hex to RGB
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  // Adjust brightness
  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));

  // Convert back to hex
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

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
        Color Wheel Picker
      </h1>
      
      <ColorPicker_11 
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

