"use client"

import React, { useState } from 'react';
import Collapsible_28 from '../_components/Collapsible_28';
import { FaGamepad, FaKeyboard, FaTrophy, FaSkull, FaHeart } from 'react-icons/fa6';

const Example_28: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const gameManualSections = [
    {
      title: "Game Controls",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaKeyboard className="text-amber-700 mt-1" />
            <div>
              <h4 className="font-bold uppercase">Basic Movement</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>W - Move Forward</li>
                <li>A - Move Left</li>
                <li>S - Move Backward</li>
                <li>D - Move Right</li>
                <li>SPACE - Jump</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaKeyboard className="text-amber-700 mt-1" />
            <div>
              <h4 className="font-bold uppercase">Combat Controls</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>LEFT CLICK - Primary Attack</li>
                <li>RIGHT CLICK - Secondary Attack / Block</li>
                <li>Q - Use Health Potion</li>
                <li>E - Interact with Objects</li>
                <li>R - Reload Weapon</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Character Classes",
      content: (
        <div className="space-y-4">
          <div className="border-2 border-amber-700 p-3">
            <h4 className="font-bold uppercase text-center border-b-2 border-amber-700 pb-2 mb-2">WARRIOR</h4>
            <p className="mb-2">The Warrior excels in close combat with high strength and defense.</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="font-bold">STRENGTH</div>
                <div className="flex justify-center">
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-red-700" />
                </div>
              </div>
              <div>
                <div className="font-bold">AGILITY</div>
                <div className="flex justify-center">
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-gray-400" />
                  <FaHeart className="text-gray-400" />
                </div>
              </div>
              <div>
                <div className="font-bold">MAGIC</div>
                <div className="flex justify-center">
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-gray-400" />
                  <FaHeart className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-amber-700 p-3">
            <h4 className="font-bold uppercase text-center border-b-2 border-amber-700 pb-2 mb-2">MAGE</h4>
            <p className="mb-2">The Mage wields powerful spells but has lower physical defense.</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="font-bold">STRENGTH</div>
                <div className="flex justify-center">
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-gray-400" />
                  <FaHeart className="text-gray-400" />
                </div>
              </div>
              <div>
                <div className="font-bold">AGILITY</div>
                <div className="flex justify-center">
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-gray-400" />
                </div>
              </div>
              <div>
                <div className="font-bold">MAGIC</div>
                <div className="flex justify-center">
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-red-700" />
                  <FaHeart className="text-red-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Enemies & Bosses",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaSkull className="text-amber-700 mt-1" />
            <div>
              <h4 className="font-bold uppercase">Common Enemies</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-bold">Goblins</span> - Weak but attack in groups. Vulnerable to fire.
                </li>
                <li>
                  <span className="font-bold">Skeletons</span> - Ranged attackers. Weak against blunt weapons.
                </li>
                <li>
                  <span className="font-bold">Wolves</span> - Fast and agile. Can be stunned with electric attacks.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaSkull className="text-amber-700 mt-1" />
            <div>
              <h4 className="font-bold uppercase">Boss Enemies</h4>
              <div className="border-2 border-amber-700 p-3 mt-2">
                <h5 className="font-bold text-center">THE DRAGON KING</h5>
                <p className="text-center italic mb-2">"The ancient terror of the mountains"</p>
                <p>Attacks with fire breath and tail swipes. Target the glowing crystal on its forehead for critical damage.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Secret Codes",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaTrophy className="text-amber-700 mt-1" />
            <div>
              <h4 className="font-bold uppercase">Cheat Codes</h4>
              <div className="font-mono bg-amber-100 text-amber-900 p-3 mt-2 border-2 border-dashed border-amber-700">
                <div>UNLIMITED LIVES: ↑ ↑ ↓ ↓ ← → ← → B A</div>
                <div>ALL WEAPONS: L1 R1 L2 R2 ← ↓ → ↑ ← ↓ → ↑</div>
                <div>INVINCIBILITY: ← → A B A B START</div>
              </div>
              <p className="text-xs italic mt-2">*Use these codes at your own risk! They may disable achievements.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-amber-900'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3 font-mono uppercase">
            <FaGamepad className="text-amber-700" />
            Retro Quest Manual
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-amber-100 text-amber-900'
            } shadow-md font-mono border-2 border-amber-700`}
          >
            {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
          </button>
        </div>

        <div className="space-y-4">
          {gameManualSections.map((section, index) => (
            <Collapsible_28
              key={index}
              title={section.title}
              defaultOpen={index === 0}
            >
              {section.content}
            </Collapsible_28>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_28; 