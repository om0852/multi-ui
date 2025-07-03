
const ColorPicker_14 = ({ onChange }) => {
  const [selectedGenre, setSelectedGenre] = useState('jazz');
  const [selectedColor, setSelectedColor] = useState('#b8860b');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const musicAnimation = `
    @keyframes soundWave {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(1.5); }
    }

    @keyframes vinylSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
    }
  `;

  const musicGenres = {
    jazz: {
      name: 'Jazz & Blues',
      era: '1920s-Present',
      icon: '🎷',
      description: 'Smooth, soulful colors of late-night jazz clubs',
      colors: [
        { name: 'Brass Gold', value: '#b8860b', element: 'Saxophone shine' },
        { name: 'Midnight Blue', value: '#191970', element: 'Club atmosphere' },
        { name: 'Bourbon Brown', value: '#8b4513', element: 'Wooden stage' },
        { name: 'Smoke Gray', value: '#708090', element: 'Misty ambiance' },
        { name: 'Piano Black', value: '#000000', element: 'Grand piano' },
      ],
    },
    rock: {
      name: 'Rock & Metal',
      era: '1950s-Present',
      icon: '🎸',
      description: 'Bold, electric colors of rock concerts',
      colors: [
        { name: 'Electric Red', value: '#ff0000', element: 'Stage lights' },
        { name: 'Chrome Silver', value: '#c0c0c0', element: 'Guitar strings' },
        { name: 'Leather Black', value: '#1a1a1a', element: 'Jacket texture' },
        { name: 'Neon Blue', value: '#00ffff', element: 'Lightning effects' },
        { name: 'Purple Haze', value: '#4b0082', element: 'Smoke effects' },
      ],
    },
    classical: {
      name: 'Classical',
      era: '1700s-1900s',
      icon: '🎻',
      description: 'Elegant colors of concert halls',
      colors: [
        { name: 'Mahogany Red', value: '#8b0000', element: 'Violin wood' },
        { name: 'Gold Leaf', value: '#daa520', element: 'Ornate frames' },
        { name: 'Velvet Red', value: '#800000', element: 'Theater curtains' },
        { name: 'Ivory White', value: '#fffff0', element: 'Piano keys' },
        { name: 'Bronze Age', value: '#cd853f', element: 'Brass section' },
      ],
    },
    electronic: {
      name: 'Electronic',
      era: '1970s-Present',
      icon: '🎹',
      description: 'Vibrant colors of digital soundscapes',
      colors: [
        { name: 'Neon Pink', value: '#ff1493', element: 'LED lights' },
        { name: 'Cyber Blue', value: '#00ffff', element: 'Digital waves' },
        { name: 'Grid Green', value: '#00ff00', element: 'Matrix patterns' },
        { name: 'UV Purple', value: '#9400d3', element: 'Blacklight glow' },
        { name: 'Tech Black', value: '#0a0a0a', element: 'Digital void' },
      ],
    },
    reggae: {
      name: 'Reggae',
      era: '1960s-Present',
      icon: '🥁',
      description: 'Vibrant colors of Caribbean rhythm',
      colors: [
        { name: 'Rasta Red', value: '#ff0000', element: 'Cultural symbol' },
        { name: 'Island Green', value: '#008000', element: 'Palm leaves' },
        { name: 'Sun Gold', value: '#ffd700', element: 'Tropical light' },
        { name: 'Ocean Blue', value: '#00bfff', element: 'Caribbean sea' },
        { name: 'Earth Brown', value: '#8b4513', element: 'Wooden drums' },
      ],
    },
    hiphop: {
      name: 'Hip Hop',
      era: '1970s-Present',
      icon: '🎤',
      description: 'Urban colors of street culture',
      colors: [
        { name: 'Graffiti Gold', value: '#ffd700', element: 'Street art' },
        { name: 'Concrete Gray', value: '#808080', element: 'City streets' },
        { name: 'Night Black', value: '#0a0a0a', element: 'Urban nights' },
        { name: 'Brick Red', value: '#b22222', element: 'City walls' },
        { name: 'Chain Silver', value: '#c0c0c0', element: 'Bling aesthetic' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
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

  const currentGenre = musicGenres[selectedGenre];
  const textColor = getTextColor(selectedColor);
  const isDarkBg = textColor === '#ffffff';

  return (
    <div style={{
      padding: '28px',
      background: '#1a1a1a',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      maxWidth: '360px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#e5e7eb',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <style>{musicAnimation}</style>

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        transform: 'translate(30%, -30%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '24px',
        position: 'relative',
        zIndex: '1',
      }}>
        <h2 style={{
          margin: '0 0 8px 0',
          fontSize: '1.8rem',
          fontWeight: '700',
          background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Music Color Picker
        </h2>
        <p style={{
          margin: '0',
          color: '#9ca3af',
          fontSize: '0.95rem',
        }}>
          Find colors that match your music vibe
        </p>
      </div>

      {/* Vinyl player */}
      <div style={{
        position: 'relative',
        marginBottom: '24px',
        padding: '24px',
        background: '#252525',
        borderRadius: '16px',
        boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          position: 'relative',
          zIndex: '2',
        }}>
          {/* Vinyl */}
          <div style={{
            position: 'relative',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: isPlaying ? 'vinylSpin 2s linear infinite' : 'none',
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#000',
              border: '2px solid #333',
              position: 'relative',
              zIndex: '2',
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#555',
              }} />
            </div>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              borderRadius: '50%',
              border: '2px solid #333',
              padding: '10px',
              boxSizing: 'border-box',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px dashed #444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '1.2',
                padding: '10px',
              }}>
                MUSIC<br />COLOR
              </div>
            </div>
          </div>

          {/* Player controls */}
          <div style={{
            flex: 1,
          }}>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: '1.1rem',
              color: '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                fontSize: '1.5rem',
                animation: isPlaying ? 'soundWave 1s infinite' : 'none',
                animationDelay: '0.2s',
              }}>
                {currentGenre.icon}
              </span>
              {currentGenre.name}
            </h3>
            <p style={{
              margin: '0 0 16px 0',
              fontSize: '0.8rem',
              color: '#9ca3af',
              fontStyle: 'italic',
            }}>
              {currentGenre.description}
            </p>
            
            <button
              onClick={togglePlay}
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
              }}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            
            <div style={{
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                color: '#9ca3af',
                fontSize: '0.8rem',
              }}>
                🔈
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                style={{
                  flex: 1,
                  height: '4px',
                  WebkitAppearance: 'none',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '2px',
                  outline: 'none',
                  '&::-webkit-slider-thumb': {
                    WebkitAppearance: 'none',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: '#8b5cf6',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  },
                  '&::-webkit-slider-thumb:hover': {
                    background: '#7c3aed',
                    transform: 'scale(1.2)',
                  },
                }}
              />
              <span style={{
                color: '#9ca3af',
                fontSize: '0.8rem',
                width: '30px',
                textAlign: 'right',
              }}>
                {volume}%
              </span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Genre selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          marginBottom: '16px',
        }}>
          {Object.entries(musicGenres).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedGenre(key)}
              style={{
                padding: '10px 8px',
                background: selectedGenre === key ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: '1px solid',
                borderColor: selectedGenre === key ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: selectedGenre === key ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <span style={{
                fontSize: '1.5rem',
                lineHeight: '1',
                opacity: selectedGenre === key ? 1 : 0.8,
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.7rem',
                color: selectedGenre === key ? '#e5e7eb' : '#9ca3af',
                fontWeight: selectedGenre === key ? 500 : 400,
              }}>
                {name.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        marginBottom: '24px',
      }}>
        <div style={{
          display: 'grid',
          gap: '12px',
        }}>
          {currentGenre.colors.map((color, index) => {
            const isSelected = selectedColor === color.value;
            return (
              <button
                key={`${color.value}-${index}`}
                onClick={() => handleColorSelect(color.value)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '12px',
                  padding: '12px',
                  background: isSelected ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  border: '1px solid',
                  borderColor: isSelected ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.05)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: color.value,
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: getTextColor(color.value),
                  fontSize: '1.2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: isSelected ? 'pulse 1.5s infinite' : 'none',
                }}>
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    }} />
                  )}
                  {isSelected && '✓'}
                </div>
                <div style={{
                  textAlign: 'left',
                }}>
                  <div style={{
                    fontSize: '0.95rem',
                    color: '#e5e7eb',
                    fontWeight: 500,
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    {color.name}
                    {isSelected && (
                      <span style={{
                        fontSize: '0.7rem',
                        background: 'rgba(99, 102, 241, 0.2)',
                        color: '#8b5cf6',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontWeight: '600',
                      }}>
                        SELECTED
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#9ca3af',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: color.value,
                    }} />
                    {color.element}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected color display */}
      <div style={{
        padding: '16px',
        background: '#252525',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.2)',
      }}>
        <div style={{
          position: 'relative',
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: selectedColor,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          flexShrink: '0',
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
          }} />
        </div>
        <div style={{
          flex: 1,
          minWidth: 0,
        }}>
          <div style={{
            fontSize: '0.8rem',
            color: '#9ca3af',
            marginBottom: '4px',
          }}>
            SELECTED COLOR
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <input
              type="text"
              value={selectedColor}
              onChange={(e) => handleColorSelect(e.target.value)}
              style={{
                flex: 1,
                padding: '8px 12px',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: '#e5e7eb',
                fontFamily: 'monospace',
                outline: 'none',
                minWidth: '0',
              }}
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(selectedColor);
                const copyBtn = document.getElementById('copy-btn-music');
                if (copyBtn) {
                  copyBtn.textContent = '✓';
                  setTimeout(() => {
                    copyBtn.textContent = '⎘';
                  }, 2000);
                }
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e5e7eb',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-1px)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
              id="copy-btn-music"
              title="Copy to clipboard"
              aria-label="Copy color to clipboard"
            >
              ⎘
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// For React Live preview
const ColorPickerWithStyles = () => {
  const [selectedColor, setSelectedColor] = React.useState('#b8860b');
  
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#e5e7eb',
    }}>
      <h1 style={{ 
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '2.2rem',
        fontWeight: '800',
        background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '0 2px 10px rgba(0,0,0,0.2)',
        letterSpacing: '-0.5px',
      }}>
        Music Color Picker
      </h1>
      
      <ColorPicker_14 
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
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '0.95rem',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
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
window.ColorPicker_14 = ColorPicker_14;

  render(<ColorPickerWithStyles />);
