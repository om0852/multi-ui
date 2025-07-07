"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type ShareProps = Record<string, never>; // You can add props here if needed in the future

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
      <div className="tooltip-container">
        <span className="text">
          <svg viewBox="0 0 16 16" className="bi bi-send-fill" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
        </span>
        <span className="tooltip1">
          <svg viewBox="0 0 16 16" className="bi bi-twitter" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
          </svg>
        </span>
        <span className="tooltip2">
          <svg viewBox="0 0 16 16" className="bi bi-facebook" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </span>
        <span className="tooltip3">
          <svg viewBox="0 0 16 16" className="bi bi-whatsapp" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </span>
        <span className="tooltip4">
          <svg viewBox="0 0 16 16" className="bi bi-discord" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
          </svg>
        </span>
        <span className="tooltip9"> </span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* This is an example, feel free to delete this code */
  .tooltip-container {
    background: rgb(3, 169, 244);
    background: linear-gradient(
      138deg,
      rgba(3, 169, 244, 1) 15%,
      rgba(63, 180, 233, 1) 65%
    );
    position: relative;
    cursor: pointer;
    font-size: 17px;
    padding: 0.7em 0.7em;
    border-radius: 50px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
  .tooltip-container:hover {
    background: #fff;
    transition: all 0.6s;
  }
  .tooltip-container .text {
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #fff;
    transition: all 0.2s;
  }
  .tooltip-container:hover .text {
    fill: rgb(3, 169, 244);
    transition: all 0.6s;
  }

  /* Inicio do tooltip twitter */
  .tooltip1 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #03a9f4;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip1 {
    top: 150%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    border-radius: 50px;
    transform: translate(-50%, -5px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip1:hover {
    background: #03a9f4;
    fill: #fff;
  }
  /* Fim do tooltip twitter */

  /* Inicio do tooltip facebook */
  .tooltip2 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #0462df;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip2 {
    top: -120%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(-50%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tooltip-container:hover .tooltip2:hover {
    background: #0462df;
    fill: #fff;
  }
  /* Fim do tooltip facebook */

  /* Inicio do tooltip whatsApp */
  .tooltip3 {
    position: absolute;
    top: 100%;
    left: 60%;
    transform: translateX(80%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #1db954;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip3 {
    top: 10%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(85%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip3:hover {
    background: #1db954;
    fill: #fff;
  }
  /* Fim do tooltip whatsApp */

  /* Inicio do tooltip Discord */
  .tooltip4 {
    position: absolute;
    top: 100%;
    left: -190%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #8c9eff;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip4 {
    top: 10%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip4:hover {
    background: #8c9eff;
    fill: #fff;
  }
  /* Fim do tooltip Discord */

  /* Inicio do tooltip pinterest */
  .tooltip5 {
    position: absolute;
    top: 100%;
    left: -145%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #bd081c;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip5 {
    top: -78%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip5:hover {
    background: #bd081c;
    fill: #fff;
  }
  /* Fim do tooltip pinterest */

  /* Inicio do tooltip dribbble */
  .tooltip6 {
    position: absolute;
    top: 100%;
    left: 35%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #ea4c89;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip6 {
    top: -79%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip6:hover {
    background: #ea4c89;
    fill: #fff;
  }
  /* Fim do tooltip dribbble */

  /* Inicio do tooltip github */
  .tooltip7 {
    position: absolute;
    top: 100%;
    left: 39%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #000;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip7 {
    top: 104%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip7:hover {
    background: #000;
    fill: #fff;
  }
  /* Fim do tooltip github */

  /* Inicio do tooltip reddit */
  .tooltip8 {
    position: absolute;
    top: 100%;
    left: -150%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #ff4500;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip8 {
    top: 101%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip8:hover {
    background: #ff4500;
    fill: #fff;
  }
  /* Fim do tooltip reddit */

  /* Inicio do tooltip fixo */
  .tooltip9 {
    position: absolute;
    top: 0;
    left: -115%;
    opacity: 0;
    visibility: hidden;
    width: 150px;
    height: 150px;
    z-index: -1;
  }

  .tooltip-container:hover .tooltip9 {
    top: -110%;
    opacity: 1;
    visibility: visible;
    border-radius: 50%;
    z-index: -1;
  }
  /* Fim do tooltip fixo */
  /* Por meio desse ultimo tooltip todos os outros podem
  ficar fixos quando houver no principal, para vê-lo dê um
  background black acima*/`;

export default Button;
