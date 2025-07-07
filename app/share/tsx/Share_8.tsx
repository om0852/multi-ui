"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type ShareProps = Record<string, never>;

const Button: React.FC<ShareProps> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="main_container">
        <div className="main">
          <div className="up">
            <button className="card1">
              <svg height={90} width={90} viewBox="-40 0 180 90" xmlns="http://www.w3.org/2000/svg">
                <path d="m120 60c0 33.1371-26.8629 60-60 60s-60-26.8629-60-60 26.8629-60 60-60 60 26.8629 60 60z" fill="#ffffff00" />
                <path className="youtube" d="m25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14h-42c-7.732 0-14-6.268-14-14z" fill="#fff" />
                <path className="youtube_center_Icon" d="m74 59.5-21 10.8253v-21.6506z" fill="black" />
              </svg>
            </button>
            <button className="card2">
              <svg height={90} width={90} viewBox="-30 -30 120 90" xmlns="http://www.w3.org/2000/svg">
                <path className="discord" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" fill="azure" />
              </svg>
            </button>
          </div>
          <div className="down">
            <button className="card3">
              <svg width={90} height={90} viewBox="-35 5 100 50" xmlns="http://www.w3.org/2000/svg">
                <path className="twitter" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" fill="azure" />
              </svg>
            </button>
            <button className="card4">
              <svg width={90} height={90} viewBox="-300 0 1312 530" xmlns="http://www.w3.org/2000/svg">
                <path className="twitch" d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" fill="azure" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /*Create cart*/
  .main_container {
    padding-top: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 0.8em;
  }
  .up {
    display: flex;
    flex-direction: row;
    gap: 0.8em;
  }
  .down {
    display: flex;
    flex-direction: row;
    gap: 0.8em;
  }

  .card1 {
    width: 90px;
    height: 90px;
    outline: 5px solid red;
    border: none;
    background: rgb(30, 30, 30);
    border-radius: 90px 5px 5px 5px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 0.2s;
  }
  .card2 {
    width: 90px;
    height: 90px;
    outline: 5px solid rgb(0, 166, 255);
    border: none;
    background: rgb(30, 30, 30);
    border-radius: 5px 90px 5px 5px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 0.2s;
  }
  .card3 {
    width: 90px;
    height: 90px;
    outline: 5px solid rgb(93, 250, 255);
    border: none;
    background: rgb(30, 30, 30);
    border-radius: 5px 5px 5px 90px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 0.2s;
  }
  .card4 {
    width: 90px;
    height: 90px;
    outline: 5px solid rgb(217, 0, 255);
    border: none;
    background: rgb(30, 30, 30);
    border-radius: 5px 5px 90px 5px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 0.2s;
  }

  /*Change icons color*/
  .card1:hover .youtube {
    fill: red;
  }

  .card1:hover .youtube_center_Icon {
    fill: rgb(255, 255, 255);
  }

  .card2:hover .discord {
    fill: rgb(43, 85, 255);
  }

  .card3:hover .twitter {
    fill: rgb(139, 251, 255);
  }

  .card4:hover .twitch {
    fill: rgb(225, 52, 255);
  }

  /*Change background color icons*/
  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background: rgb(161, 0, 0);
  }

  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background: rgb(0, 40, 198);
  }

  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background: rgb(0, 160, 166);
  }

  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background: rgb(169, 0, 199);
  }`;

export default Button;
