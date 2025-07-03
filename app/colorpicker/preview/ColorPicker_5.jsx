
const ColorPicker_5 = ({ onChange }) => {
  const [selectedEra, setSelectedEra] = useState('psychedelic');
  const [selectedColor, setSelectedColor] = useState('#ff6b6b');
  const [isAnimating, setIsAnimating] = useState(false);

  const retroAnimation = `
    @keyframes groovy {
      0% { transform: rotate(0deg) scale(1); }
      25% { transform: rotate(3deg) scale(1.02); }
      75% { transform: rotate(-3deg) scale(0.98); }
      100% { transform: rotate(0deg) scale(1); }
    }

    @keyframes fadeRetro {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  const retroEras = {
    psychedelic: {
      name: 'Psychedelic',
      decade: '1960s',
      style: 'Peace & Love',
      description: 'Vibrant, swirling colors of the hippie movement',
      colors: [
        { name: 'Electric Purple', value: '#8a2be2', element: 'Psychedelic posters' },
        { name: 'Acid Green', value: '#7fff00', element: 'Concert flyers' },
        { name: 'Love Pink', value: '#ff69b4', element: 'Flower power' },
        { name: 'Sunshine Yellow', value: '#ffd700', element: 'Peace symbols' },
        { name: 'Orange Dream', value: '#ff7f50', element: 'Tie-dye patterns' },
      ],
    },
    disco: {
      name: 'Disco Era',
      decade: '1970s',
      style: 'Dance & Glam',
      description: 'Glittering colors of the disco dance floor',
      colors: [
        { name: 'Mirror Ball', value: '#c0c0c0', element: 'Disco balls' },
        { name: 'Neon Blue', value: '#00ffff', element: 'Dance floor' },
        { name: 'Gold Lamé', value: '#daa520', element: 'Disco fashion' },
        { name: 'Studio Pink', value: '#ff1493', element: 'Neon signs' },
        { name: 'Ultra Violet', value: '#9400d3', element: 'Stage lights' },
      ],
    },
    memphis: {
      name: 'Memphis Design',
      decade: '1980s',
      style: 'Bold & Geometric',
      description: 'Playful patterns and bold geometric shapes',
      colors: [
        { name: 'Miami Pink', value: '#ff6b6b', element: 'Geometric shapes' },
        { name: 'Pool Blue', value: '#4dc9ff', element: 'Squiggly lines' },
        { name: 'Banana Yellow', value: '#ffd93d', element: 'Pattern blocks' },
        { name: 'Grid Black', value: '#2d3436', element: 'Background dots' },
        { name: 'Mint Pop', value: '#98ff98', element: 'Accent shapes' },
      ],
    },
    grunge: {
      name: 'Grunge',
      decade: '1990s',
      style: 'Raw & Rebellious',
      description: 'Distressed and muted alternative culture colors',
      colors: [
        { name: 'Flannel Red', value: '#8b4513', element: 'Worn clothing' },
        { name: 'Dirty Denim', value: '#4a5568', element: 'Faded jeans' },
        { name: 'Army Surplus', value: '#556b2f', element: 'Military gear' },
        { name: 'Thrift Brown', value: '#8b7355', element: 'Vintage leather' },
        { name: 'Faded Black', value: '#2d3436', element: 'Band t-shirts' },
      ],
    },
    atomic: {
      name: 'Atomic Age',
      decade: '1950s',
      style: 'Retro Futurism',
      description: 'Optimistic colors of post-war modernism',
      colors: [
        { name: 'Diner Red', value: '#ff0000', element: 'Vinyl booths' },
        { name: 'Turquoise Dream', value: '#40e0d0', element: 'Car finish' },
        { name: 'Formica Yellow', value: '#ffd700', element: 'Kitchen tables' },
        { name: 'Mint Julep', value: '#98ff98', element: 'Appliances' },
        { name: 'Chrome Silver', value: '#c0c0c0', element: 'Car details' },
      ],
    },
    vaporwave: {
      name: 'Vaporwave',
      decade: '2010s',
      style: 'Digital Nostalgia',
      description: 'Retro-futuristic digital aesthetic',
      colors: [
        { name: 'Cyber Pink', value: '#ff6fff', element: 'Neon grids' },
        { name: 'Virtual Blue', value: '#00ffff', element: 'Digital space' },
        { name: 'Palm Purple', value: '#9370db', element: 'Sunset vibes' },
        { name: 'Glitch Teal', value: '#40e0d0', element: 'CRT effects' },
        { name: 'Web Safe', value: '#ff00ff', element: 'Early web' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    if (onChange) {
      onChange(color);
    }
  };

  const handleEraChange = (era) => {
    setSelectedEra(era);
    // Set the first color of the new era as selected
    if (retroEras[era]?.colors?.[0]?.value) {
      setSelectedColor(retroEras[era].colors[0].value);
      if (onChange) {
        onChange(retroEras[era].colors[0].value);
      }
    }
  };

  const currentEra = retroEras[selectedEra] || retroEras.psychedelic;

  return (
    <div style={{
      padding: '28px',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      maxWidth: '380px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <style>{retroAnimation}</style>

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
          fontSize: '1.5rem',
          fontWeight: '700',
          background: 'linear-gradient(90deg, #8a2be2, #ff69b4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Retro Color Picker
        </h2>
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '0.9rem',
        }}>
          Travel through time with colors
        </p>
      </div>

      {/* Era selector */}
      <div style={{
        marginBottom: '24px',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          paddingBottom: '8px',
          scrollbarWidth: 'thin',
          scrollbarColor: '#c7d2fe #f3f4f6',
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f3f4f6',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#c7d2fe',
            borderRadius: '3px',
          }
        }}>
          {Object.entries(retroEras).map(([key, era]) => (
            <button
              key={key}
              onClick={() => handleEraChange(key)}
              style={{
                flex: '0 0 auto',
                padding: '10px 16px',
                marginRight: '8px',
                background: selectedEra === key ? '#eef2ff' : 'transparent',
                border: '2px solid',
                borderColor: selectedEra === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: selectedEra === key && isAnimating ? 'groovy 2s infinite' : 'none',
                whiteSpace: 'nowrap',
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
                fontSize: '0.9rem',
                color: selectedEra === key ? '#4f46e5' : '#4b5563',
                fontWeight: selectedEra === key ? '600' : '500',
              }}>
                {era.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Era info */}
      <div style={{
        padding: '20px',
        background: '#f9fafb',
        borderRadius: '16px',
        marginBottom: '24px',
        border: '1px dashed #e5e7eb',
        animation: 'fadeRetro 0.5s ease-out',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}>
          <h3 style={{
            margin: '0',
            fontSize: '1.1rem',
            color: '#1f2937',
            fontWeight: '600',
          }}>
            {currentEra.name}
          </h3>
          <span style={{
            fontSize: '0.8rem',
            background: '#eef2ff',
            color: '#4f46e5',
            padding: '4px 10px',
            borderRadius: '12px',
            fontWeight: '500',
          }}>
            {currentEra.decade}
          </span>
        </div>
        <p style={{
          margin: '0 0 8px 0',
          fontSize: '0.9rem',
          color: '#4b5563',
          lineHeight: '1.5',
        }}>
          {currentEra.description}
        </p>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          fontStyle: 'italic',
        }}>
          Style: {currentEra.style}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {currentEra.colors.map((color, index) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: '16px',
              padding: '12px',
              background: selectedColor === color.value ? '#f5f3ff' : '#ffffff',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#8b5cf6' : '#f3f4f6',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              animation: `fadeRetro 0.5s ease-out ${index * 0.1}s`,
              alignItems: 'center',
              textAlign: 'left',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              background: color.value,
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0,0,0,0.05)'
            }} />
            <div>
              <div style={{
                fontSize: '1rem',
                color: '#1f2937',
                fontWeight: '600',
                marginBottom: '4px',
              }}>
                {color.name}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: selectedColor === color.value ? '#7c3aed' : '#6b7280',
                fontWeight: selectedColor === color.value ? '500' : '400',
              }}>
                {color.element}
              </div>
            </div>
          </button>
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
          animation: isAnimating ? 'groovy 1s ease' : 'none'
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
  const [selectedColor, setSelectedColor] = React.useState('#ff6b6b');
  
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
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
        background: 'linear-gradient(90deg, #8a2be2, #ff69b4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
        letterSpacing: '-0.5px'
      }}>
        Retro Color Explorer
      </h1>
      
      <ColorPicker_5 
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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)',
          zIndex: '1',
          animation: 'shimmer 3s infinite linear'
        }
      }}>
        <div style={{ position: 'relative', zIndex: '2' }}>
          <div style={{ fontSize: '0.8rem', opacity: '0.9', marginBottom: '4px' }}>SELECTED COLOR</div>
          <div style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>
            {selectedColor.toUpperCase()}
          </div>
        </div>
        <style>{
          `@keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }`
        }</style>
      </div>
    </div>
  );
};
  render(<ColorPickerWithStyles />);

