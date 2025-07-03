
const ColorPicker_8 = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [activeMood, setActiveMood] = useState('calm');
  const [isPulsing, setIsPulsing] = useState(true);

  const moodAnimation = `
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); }
      50% { box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); }
    }

    @keyframes floatIn {
      from { transform: translateY(10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  const moodPalettes = {
    calm: {
      name: 'Calm & Peaceful',
      icon: '😌',
      description: 'Soothing and tranquil colors that promote relaxation',
      colors: [
        { name: 'Ocean Blue', value: '#4a90e2' },
        { name: 'Sage Green', value: '#98b4a6' },
        { name: 'Lavender', value: '#e6e6fa' },
        { name: 'Soft Gray', value: '#d4d4d4' },
        { name: 'Sky Blue', value: '#87ceeb' },
      ],
    },
    energetic: {
      name: 'Energetic & Vibrant',
      icon: '⚡',
      description: 'Bold and dynamic colors that inspire action',
      colors: [
        { name: 'Electric Yellow', value: '#fff200' },
        { name: 'Vibrant Orange', value: '#ff7f50' },
        { name: 'Hot Pink', value: '#ff69b4' },
        { name: 'Lime Green', value: '#32cd32' },
        { name: 'Bright Purple', value: '#9370db' },
      ],
    },
    romantic: {
      name: 'Romantic & Dreamy',
      icon: '🌸',
      description: 'Soft and tender colors that evoke love',
      colors: [
        { name: 'Rose Pink', value: '#ffb6c1' },
        { name: 'Peach', value: '#ffdab9' },
        { name: 'Lilac', value: '#dcd0ff' },
        { name: 'Blush', value: '#ffe4e1' },
        { name: 'Dusty Rose', value: '#dcb4b4' },
      ],
    },
    mysterious: {
      name: 'Mysterious & Deep',
      icon: '🌙',
      description: 'Rich and enigmatic colors that create intrigue',
      colors: [
        { name: 'Deep Purple', value: '#483d8b' },
        { name: 'Midnight Blue', value: '#191970' },
        { name: 'Forest Green', value: '#2e4033' },
        { name: 'Burgundy', value: '#800020' },
        { name: 'Dark Teal', value: '#004d4d' },
      ],
    },
    cheerful: {
      name: 'Cheerful & Playful',
      icon: '😊',
      description: 'Fun and uplifting colors that spark joy',
      colors: [
        { name: 'Sunny Yellow', value: '#ffd700' },
        { name: 'Coral', value: '#ff6b6b' },
        { name: 'Turquoise', value: '#40e0d0' },
        { name: 'Bright Pink', value: '#ff69b4' },
        { name: 'Spring Green', value: '#98fb98' },
      ],
    },
    focused: {
      name: 'Focused & Professional',
      icon: '💼',
      description: 'Clean and professional colors that aid concentration',
      colors: [
        { name: 'Navy Blue', value: '#000080' },
        { name: 'Charcoal', value: '#36454f' },
        { name: 'Steel Blue', value: '#4682b4' },
        { name: 'Cool Gray', value: '#808a87' },
        { name: 'Slate', value: '#708090' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsPulsing(false);
    setTimeout(() => setIsPulsing(true), 10);
    if (onChange) {
      onChange(color);
    }
  };

  const handleMoodChange = (mood) => {
    setActiveMood(mood);
    // Set the first color of the new mood as selected
    if (moodPalettes[mood]?.colors?.[0]?.value) {
      handleColorSelect(moodPalettes[mood].colors[0].value);
    }
  };

  return (
    <div style={{
      padding: '28px',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      maxWidth: '380px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <style>{moodAnimation}</style>

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
        }}>
          Mood Color Picker
        </h2>
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '0.95rem',
        }}>
          Find the perfect color for your mood
        </p>
      </div>

      {/* Color preview */}
      <div style={{
        height: '140px',
        borderRadius: '16px',
        background: selectedColor,
        marginBottom: '28px',
        animation: isPulsing ? 'pulseGlow 2s infinite' : 'none',
        transition: 'all 0.5s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: '600',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
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
          {selectedColor.toUpperCase()}
        </div>
      </div>

      {/* Mood selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {Object.entries(moodPalettes).map(([key, { name, icon }]) => (
          <button
            key={key}
            onClick={() => handleMoodChange(key)}
            style={{
              padding: '12px 8px',
              background: activeMood === key ? '#f5f3ff' : '#f9fafb',
              border: '2px solid',
              borderColor: activeMood === key ? '#8b5cf6' : '#e5e7eb',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              },
              '&:active': {
                transform: 'translateY(1px)'
              }
            }}
          >
            <span style={{
              fontSize: '1.6rem',
              lineHeight: '1',
            }}>
              {icon}
            </span>
            <span style={{
              fontSize: '0.7rem',
              color: activeMood === key ? '#7c3aed' : '#4b5563',
              textAlign: 'center',
              fontWeight: '500',
              lineHeight: '1.2',
            }}>
              {name.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Mood description */}
      <div style={{
        padding: '16px',
        background: '#f9fafb',
        borderRadius: '14px',
        marginBottom: '24px',
        fontSize: '0.95rem',
        color: '#4b5563',
        animation: 'floatIn 0.4s ease-out',
        border: '1px solid #e5e7eb',
        textAlign: 'center',
        fontStyle: 'italic',
      }}>
        "{moodPalettes[activeMood].description}"
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {moodPalettes[activeMood].colors.map(({ value, name }, index) => (
          <button
            key={value}
            onClick={() => handleColorSelect(value)}
            title={name}
            style={{
              width: '100%',
              aspectRatio: '1',
              background: value,
              border: selectedColor === value ? '3px solid #fff' : '3px solid transparent',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              animation: `floatIn 0.3s ease-out ${index * 0.1}s`,
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
            {selectedColor === value && (
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
                color: value,
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                ✓
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Selected color info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        background: '#f9fafb',
        borderRadius: '14px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '10px',
          background: selectedColor,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '2px solid #fff',
          flexShrink: '0',
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
        Mood Color Picker
      </h1>
      
      <ColorPicker_8 
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

