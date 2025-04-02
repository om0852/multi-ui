"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Toggle = ({ defaultChecked = false, onChange }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };

  if (!mounted) return null;

  return (
    <StyledWrapper isChecked={isChecked}>
      <input
        type="checkbox"
        id="game-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="game-toggle" className="toggle-label">
        <div className="console">
          <div className="screen">
            <div className="pixel-art">
              <div className="character">{isChecked ? '😊' : '😴'}</div>
              <div className="platform"></div>
            </div>
            <div className="scan-line"></div>
          </div>
          <div className="controls">
            <div className="d-pad">
              <div className="d-button up"></div>
              <div className="d-button right"></div>
              <div className="d-button down"></div>
              <div className="d-button left"></div>
            </div>
            <div className="action-buttons">
              <div className="action-button a">A</div>
              <div className="action-button b">B</div>
            </div>
          </div>
          <div className="power-light"></div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-input { display: none; }
  .toggle-label { position: relative; display: block; width: 120px; height: 180px; cursor: pointer; }
  .console { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(145deg, #8b8b8b, #6b6b6b); border-radius: 10px; padding: 10px; }
  .screen { position: relative; width: 100%; height: 90px; background: #9ead86; border-radius: 4px; overflow: hidden; border: 4px solid #454545; }
  .character { font-size: 24px; transform: ${props => props.isChecked ? 'translateY(-10px)' : 'translateY(0)'}; transition: transform 0.3s ease; }
  .platform { position: absolute; bottom: 20px; width: 40px; height: 4px; background: #1a1a1a; }
  .power-light { position: absolute; top: 10px; right: 10px; width: 6px; height: 6px; border-radius: 50%; background: ${props => props.isChecked ? '#4ade80' : '#f87171'}; }
`;

export default Toggle;
