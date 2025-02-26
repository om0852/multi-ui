"use client"
import React from "react";
import Typewriter_12 from "./_components/Typewriter_12";

const TypewriterPage12 = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Bouncing Letters Example */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Bouncing Letters Animation:</h2>
        <Typewriter_12 
          text={[
            "Watch these letters bounce! 🎾",
            "Each character has its own animation",
            "Isn't this fun? 🎯"
          ]}
          typingSpeed={80}
          animationStyle="bounce"
          cursorColor="#f472b6"
          textColor="#f472b6"
          fontSize="2.5rem"
          glowColor="rgba(244, 114, 182, 0.6)"
          letterSpacing="0.1em"
        />
      </div>

      {/* Wave Animation Example */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Wave Animation:</h2>
        <Typewriter_12 
          text="Making waves with animated text! 🌊"
          typingSpeed={100}
          animationStyle="wave"
          cursorColor="#38bdf8"
          textColor="#38bdf8"
          fontSize="3rem"
          glowColor="rgba(56, 189, 248, 0.5)"
          textAlign="center"
        />
      </div>

      {/* Scale Animation with Gradient */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Scale Animation with Gradient:</h2>
        <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">
          <Typewriter_12 
            text={[
              "Scaling up! ⬆️",
              "Scaling down! ⬇️",
              "Pop! Pop! Pop! 💫"
            ]}
            typingSpeed={70}
            animationStyle="scale"
            cursorColor="#0ea5e9"
            textColor="transparent"
            fontSize="2.8rem"
            fontFamily="'Poppins', sans-serif"
            textAlign="center"
          />
        </div>
      </div>

      {/* Slide Animation with Split Text */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Slide Animation:</h2>
        <Typewriter_12 
          text={[
            "Sliding ← Left",
            "Sliding → Right",
            "Moving → ← Both Ways!"
          ]}
          typingSpeed={60}
          animationStyle="slide"
          cursorColor="#a78bfa"
          textColor="#a78bfa"
          fontSize="2.2rem"
          glowColor="rgba(167, 139, 250, 0.5)"
          fontFamily="'Space Grotesk', sans-serif"
          letterSpacing="0.2em"
        />
      </div>

      {/* Fade Animation with Retro Style */}
      <div className="mb-12 bg-black p-6 rounded-lg">
        <h2 className="text-white mb-4 text-xl">Retro Fade Effect:</h2>
        <Typewriter_12 
          text={[
            "LOADING SYSTEM...",
            "INITIALIZING...",
            "ACCESS GRANTED",
            "WELCOME USER_01"
          ]}
          typingSpeed={40}
          animationStyle="fade"
          cursorColor="#22c55e"
          textColor="#22c55e"
          fontSize="1.8rem"
          glowColor="rgba(34, 197, 94, 0.7)"
          fontFamily="'VT323', monospace"
          letterSpacing="0.15em"
          delay={1500}
        />
      </div>

      {/* Rotating Letters Animation */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Rotating Letters:</h2>
        <Typewriter_12 
          text={[
            "Watch me spin! 🌀",
            "Round and round we go! 🎡",
            "Rotating text is cool! 💫"
          ]}
          typingSpeed={90}
          animationStyle="rotate"
          cursorColor="#ec4899"
          textColor="#ec4899"
          fontSize="2.4rem"
          glowColor="rgba(236, 72, 153, 0.6)"
          fontFamily="'Righteous', cursive"
          textAlign="center"
        />
      </div>

      {/* 3D Flip Animation */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">3D Flip Effect:</h2>
        <div style={{ perspective: "1000px" }}>
          <Typewriter_12 
            text="Flipping in 3D space! 🎲"
            typingSpeed={75}
            animationStyle="flip"
            cursorColor="#8b5cf6"
            textColor="#8b5cf6"
            fontSize="2.6rem"
            glowColor="rgba(139, 92, 246, 0.5)"
            fontFamily="'Orbitron', sans-serif"
          />
        </div>
      </div>

      {/* Shaking Text */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Earthquake Text:</h2>
        <Typewriter_12 
          text={[
            "Shake it off! 🌋",
            "Everything is moving! 🌊",
            "Can you feel it? 💥"
          ]}
          typingSpeed={50}
          animationStyle="shake"
          cursorColor="#f97316"
          textColor="#f97316"
          fontSize="2.2rem"
          glowColor="rgba(249, 115, 22, 0.6)"
          fontFamily="'Bangers', cursive"
          letterSpacing="0.1em"
        />
      </div>

      {/* Rainbow Colors */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Rainbow Magic:</h2>
        <Typewriter_12 
          text="Colors of the rainbow! 🌈"
          typingSpeed={100}
          animationStyle="rainbow"
          cursorColor="#ffffff"
          fontSize="3rem"
          fontFamily="'Comic Sans MS', cursive"
          textAlign="center"
        />
      </div>

      {/* Glitch Effect */}
      <div className="mb-12 bg-black p-6 rounded-lg">
        <h2 className="text-white mb-4 text-xl">Cyberpunk Glitch:</h2>
        <Typewriter_12 
          text={[
            "ERROR_DETECTED//",
            "SYSTEM_MALFUNCTION>>",
            "REALITY_GLITCH.exe",
            "MATRIX_BREACH=TRUE"
          ]}
          typingSpeed={30}
          animationStyle="glitch"
          cursorColor="#14b8a6"
          textColor="#14b8a6"
          fontSize="2rem"
          glowColor="rgba(20, 184, 166, 0.8)"
          fontFamily="'Share Tech Mono', monospace"
          letterSpacing="0.2em"
          delay={2000}
        />
      </div>
    </div>
  );
};

export default TypewriterPage12; 