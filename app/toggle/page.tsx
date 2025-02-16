"use client";

import React from 'react';
import styled from 'styled-components';
import Toggle1 from './_components/Toggle_1';
import Toggle2 from './_components/Toggle_2';
import Toggle3 from './_components/Toggle_3';
import Toggle4 from './_components/Toggle_4';
import Toggle5 from './_components/Toggle_5';
import Toggle6 from './_components/Toggle_6';
import Toggle7 from './_components/Toggle_7';
import Toggle8 from './_components/Toggle_8';
import Toggle9 from './_components/Toggle_9';
import Toggle10 from './_components/Toggle_10';

export default function TogglesPage() {
  const handleToggleChange = (id: string) => (checked: boolean) => {
    console.log(`Toggle ${id} state:`, checked);
  };

  return (
    <StyledWrapper>
      <h1>Modern Toggle Collection</h1>
      
      <section className="toggle-section">
        <h2>Gradient Toggle</h2>
        <div className="toggle-example">
          <Toggle1 onChange={handleToggleChange('gradient')} />
          <p>Sleek toggle with smooth gradient transitions and minimal design</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Liquid Bubble Toggle</h2>
        <div className="toggle-example">
          <Toggle2 onChange={handleToggleChange('bubble')} />
          <p>Playful toggle with floating bubble animations in liquid</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Day/Night Toggle</h2>
        <div className="toggle-example">
          <Toggle3  />
          <p>Theme switcher with day and night mode transitions</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Drawer Toggle</h2>
        <div className="toggle-example">
          <Toggle4 onChange={handleToggleChange('drawer')} />
          <p>3D drawer effect with smooth sliding animation</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Flip Card Toggle</h2>
        <div className="toggle-example">
          <Toggle5 onChange={handleToggleChange('flip')} />
          <p>Rotating card with dynamic icon transitions</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Morphing Toggle</h2>
        <div className="toggle-example">
          <Toggle6 onChange={handleToggleChange('morph')} />
          <p>Shape-shifting toggle with smooth morphing animations</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Wave Toggle</h2>
        <div className="toggle-example">
          <Toggle7 onChange={handleToggleChange('wave')} />
          <p>Dynamic toggle with flowing wave animations</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Sliding Panel Toggle</h2>
        <div className="toggle-example">
          <Toggle8 onChange={handleToggleChange('panel')} />
          <p>3D panel sliding effect with status indicators</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Cube Toggle</h2>
        <div className="toggle-example">
          <Toggle9 onChange={handleToggleChange('cube')} />
          <p>3D rotating cube with dynamic face transitions</p>
        </div>
      </section>

      <section className="toggle-section">
        <h2>Magnetic Toggle</h2>
        <div className="toggle-example">
          <Toggle10 onChange={handleToggleChange('magnetic')} />
          <p>Interactive toggle with magnetic snap effect</p>
        </div>
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }

  .toggle-section {
    margin-bottom: 3rem;
    padding: 2rem;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #444;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
  }

  .toggle-example {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    p {
      color: #666;
      text-align: center;
      margin: 0;
      font-size: 1.1rem;
      max-width: 400px;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }

    .toggle-section {
      padding: 1.5rem;
      margin-bottom: 2rem;

      h2 {
        font-size: 1.25rem;
      }
    }

    .toggle-example p {
      font-size: 1rem;
    }
  }
`;

