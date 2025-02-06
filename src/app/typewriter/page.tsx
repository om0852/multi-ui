"use client"
import React from "react";
import Typewriter_13 from "./_components/Typewriter_13";
import Typewriter_14 from "./_components/Typewriter_14";
import Typewriter_15 from "./_components/Typewriter_15";
import Typewriter_16 from "./_components/Typewriter_16";
import Typewriter_17 from "./_components/Typewriter_17";

const TypewriterShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Spiral 3D Animation */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Spiral 3D Effect:</h2>
        <Typewriter_13 
          text={[
            "Spinning in 3D Space! 🌀",
            "Watch the spiral effect! 🎡",
            "Dynamic rotations! 🔄"
          ]}
          typingSpeed={70}
          cursorColor="#8b5cf6"
          textColor="#8b5cf6"
          fontSize="2.5rem"
          glowColor="rgba(139, 92, 246, 0.6)"
          spiral3dEffect={true}
          perspective="1200px"
        />
      </div>

      {/* Matrix Rain Effect */}
      <div className="mb-12 bg-black p-6 rounded-lg">
        <h2 className="text-white mb-4 text-xl">Matrix Code Rain:</h2>
        <Typewriter_14 
          text={[
            "DECRYPTING_MATRIX>>",
            "ACCESSING_MAINFRAME..",
            "BREACH_SUCCESSFUL!"
          ]}
          typingSpeed={40}
          cursorColor="#22c55e"
          textColor="#22c55e"
          fontSize="2rem"
          scrambleEffect={true}
        />
      </div>

      {/* Neon Flicker */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Neon Sign Effect:</h2>
        <Typewriter_15 
          text="Welcome to Cyber City! ⚡"
          typingSpeed={80}
          primaryColor="#f0abfc"
          secondaryColor="#818cf8"
          fontSize="3rem"
          flickerIntensity={0.7}
        />
      </div>

      {/* Handwriting Effect */}
      <div className="mb-12 bg-white p-6 rounded-lg">
        <h2 className="text-gray-800 mb-4 text-xl">Handwritten Notes:</h2>
        <Typewriter_16 
          text={[
            "Dear Diary... ✍️",
            "Today was amazing! 📖",
            "Let me tell you why... 💭"
          ]}
          typingSpeed={60}
          inkColor="#1d4ed8"
          fontSize="2.4rem"
          strokeWidth={2}
          inkSpread={3}
        />
      </div>

      {/* Smoke Effect */}
      <div className="mb-12">
        <h2 className="text-white mb-4 text-xl">Mystic Smoke:</h2>
        <Typewriter_17 
          text={[
            "Dissolving into mist... 💨",
            "Like smoke in the wind... 🌫️",
            "Fading away... ✨"
          ]}
          typingSpeed={50}
          smokeColor="#6366f1"
          fontSize="2.8rem"
        />
      </div>
    </div>
  );
};

export default TypewriterShowcase;