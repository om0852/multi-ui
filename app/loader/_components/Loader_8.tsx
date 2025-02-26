'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // Import framer-motion
import 'tailwindcss/tailwind.css';  // Import Tailwind CSS

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="200px"
        width="200px"
        viewBox="0 0 200 200"
        className="pencil"
        initial={{ rotate: 0 }}
        animate={{ rotate: 720 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      >
        <defs>
          <clipPath id="pencil-eraser">
            <rect height={30} width={30} ry={5} rx={5} />
          </clipPath>
        </defs>
        <circle
          transform="rotate(-113,100,100)"
          strokeLinecap="round"
          strokeDashoffset="439.82"
          strokeDasharray="439.82 439.82"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          r={70}
          className="pencil__stroke"
        />
        <g transform="translate(100,100)" className="pencil__rotate">
          <g fill="none">
            <motion.circle
              transform="rotate(-90)"
              strokeDashoffset={402}
              strokeDasharray="402.12 402.12"
              strokeWidth={30}
              stroke="hsl(223,90%,50%)"
              r={64}
              className="pencil__body1"
              animate={{ strokeDashoffset: [351.86, 150.8, 351.86] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            />
            <motion.circle
              transform="rotate(-90)"
              strokeDashoffset={465}
              strokeDasharray="464.96 464.96"
              strokeWidth={10}
              stroke="hsl(223,90%,60%)"
              r={74}
              className="pencil__body2"
              animate={{ strokeDashoffset: [406.84, 174.36, 406.84] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            />
            <motion.circle
              transform="rotate(-90)"
              strokeDashoffset={339}
              strokeDasharray="339.29 339.29"
              strokeWidth={10}
              stroke="hsl(223,90%,40%)"
              r={54}
              className="pencil__body3"
              animate={{ strokeDashoffset: [296.88, 127.23, 296.88] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            />
          </g>
          <motion.g
            transform="rotate(-90) translate(49,0)"
            className="pencil__eraser"
            animate={{ rotate: [0, -45, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <g className="pencil__eraser-skew">
              <rect height={30} width={30} ry={5} rx={5} fill="hsl(223,90%,70%)" />
              <rect clipPath="url(#pencil-eraser)" height={30} width={5} fill="hsl(223,90%,60%)" />
              <rect height={20} width={30} fill="hsl(223,10%,90%)" />
              <rect height={20} width={15} fill="hsl(223,10%,70%)" />
              <rect height={20} width={5} fill="hsl(223,10%,80%)" />
              <rect height={2} width={30} y={6} fill="hsla(223,10%,10%,0.2)" />
              <rect height={2} width={30} y={13} fill="hsla(223,10%,10%,0.2)" />
            </g>
          </motion.g>
          <motion.g
            transform="rotate(-90) translate(49,-30)"
            className="pencil__point"
            animate={{ rotate: [0, -225, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          >
            <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)" />
            <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)" />
            <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)" />
          </motion.g>
        </g>
      </motion.svg>
    </div>
  );
};

export default Loader;
