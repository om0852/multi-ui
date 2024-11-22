import React, { useState } from 'react';

const PopMenu: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const distance = 12 * 16; // 12em in pixels
  const angles = [0, 72, 144, 216, 288]; // Divide the circle into 5 parts (360/5)

  const menuStyles = (index: number) => {
    if (!isChecked) {
      return {
        transform: `translate(0px, 0px) rotate(360deg)`,
        opacity: 0,
        transitionDelay: `${0.1 * index}s`,
      };
    }

    const angle = (angles[index] * Math.PI) / 180; // Convert to radians
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return {
      transform: `translate(${x}px, ${y}px) rotate(0deg)`,
      opacity: 1,
      transitionDelay: `${0.1 * index}s`,
    };
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#333',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          style={{ display: 'none' }}
        />
        <label
          htmlFor="checkbox"
          style={{
            background: '#4791FF',
            width: '10em',
            height: '10em',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '16px',
            position: 'relative',
            zIndex: 10,
            cursor: 'pointer',
          }}
        >
          Click me
        </label>
        {['GitHub', 'Facebook', 'Twitter', 'Link', 'WeChat'].map(
          (platform, index) => (
            <a
              key={platform}
              href="#"
              style={{
                position: 'absolute',
                background: '#FFB66F',
                width: '70px',
                height: '70px',
                color: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease-in-out',
                ...menuStyles(index),
              }}
            >
              {platform}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default PopMenu;
