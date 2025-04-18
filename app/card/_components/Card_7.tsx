"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Define the Card component as a functional React component with TypeScript

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  btnText: string;
}

const Card_7: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
        />
      </div>

      {/* Glass Effect Container */}
      <div className="absolute inset-0 rounded-lg backdrop-blur-md bg-white/10 p-6 flex flex-col justify-end transform perspective-1000">
        {/* Content Container with Glass Effect */}
        <div className="relative z-10 bg-white/20 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-white/30 transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base mb-4">
            {description}
          </p>
          <Link 
            href={link}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/30 transition-colors"
          >
            {btnText}
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl transform group-hover:translate-x-4 transition-transform duration-700" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg transform group-hover:-translate-x-4 transition-transform duration-700" />
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #243137;
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  #logo-main, #logo-second {
    height: 100%;
  }

  #logo-main {
    fill: #bd9f67;
  }

  #logo-second {
    padding-bottom: 10px;
    fill: none;
    stroke: #bd9f67;
    stroke-width: 1px;
  }

  .border {
    position: absolute;
    inset: 0px;
    border: 2px solid #bd9f67;
    opacity: 0;
    transform: rotate(10deg);
    transition: all 0.5s ease-in-out;
  }

  .bottom-text {
    position: absolute;
    left: 50%;
    bottom: 13px;
    transform: translateX(-50%);
    font-size: 6px;
    text-transform: uppercase;
    padding: 0px 5px 0px 8px;
    color: #bd9f67;
    background: #243137;
    opacity: 0;
    letter-spacing: 7px;
    transition: all 0.5s ease-in-out;
  }

  .content {
    transition: all 0.5s ease-in-out;
  }

  .content .logo {
    height: 35px;
    position: relative;
    width: 33px;
    overflow: hidden;
    transition: all 1s ease-in-out;
  }

  .content .logo .logo1 {
    height: 33px;
    position: absolute;
    left: 0;
  }

  .content .logo .logo2 {
    height: 33px;
    position: absolute;
    left: 33px;
  }

  .content .logo .trail {
    position: absolute;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  .content .logo-bottom-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 30px;
    color: #bd9f67;
    padding-left: 8px;
    font-size: 11px;
    opacity: 0;
    letter-spacing: none;
    transition: all 0.5s ease-in-out 0.5s;
  }

  .card:hover {
    border-radius: 0;
    transform: scale(1.1);
  }

  .card:hover .logo {
    width: 134px;
    animation: opacity 1s ease-in-out;
  }

  .card:hover .border {
    inset: 15px;
    opacity: 1;
    transform: rotate(0);
  }

  .card:hover .bottom-text {
    letter-spacing: 3px;
    opacity: 1;
    transform: translateX(-50%);
  }

  .card:hover .content .logo-bottom-text {
    opacity: 1;
    letter-spacing: 9.5px;
  }

  .card:hover .trail {
    animation: trail 1s ease-in-out;
  }

  @keyframes opacity {
    0% {
      border-right: 1px solid transparent;
    }

    10% {
      border-right: 1px solid #bd9f67;
    }

    80% {
      border-right: 1px solid #bd9f67;
    }

    100% {
      border-right: 1px solid transparent;
    }
  }

  @keyframes trail {
    0% {
      background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
      opacity: 0;
    }

    30% {
      background: linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%);
      opacity: 1;
    }

    70% {
      background: linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%);
      opacity: 1;
    }

    95% {
      background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
      opacity: 0;
    }
  }`;

export default Card_7;
