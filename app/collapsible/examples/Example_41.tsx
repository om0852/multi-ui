"use client"

import React, { useState } from 'react';
import Collapsible_41 from '../_components/Collapsible_41';
import { FaGamepad, FaTrophy, FaGhost, FaSkull, FaCoins } from 'react-icons/fa6';

const Example_41: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const arcadeGames = [
    {
      title: "SPACE INVADERS",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border border-indigo-700">
            <h4 className="text-cyan-400 font-bold mb-3 tracking-widest">GAME STATS</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-cyan-400 text-sm">HIGH SCORE</p>
                <p className="text-yellow-400 font-bold">25,750</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">YOUR BEST</p>
                <p className="text-yellow-400 font-bold">18,340</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">GAMES PLAYED</p>
                <p className="text-yellow-400 font-bold">42</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">ALIENS DEFEATED</p>
                <p className="text-yellow-400 font-bold">1,337</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border border-indigo-700">
            <h4 className="text-cyan-400 font-bold mb-3 tracking-widest">CONTROLS</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-indigo-800 text-cyan-400 px-2 py-1 rounded">←</span>
                <span className="text-cyan-400">MOVE LEFT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-indigo-800 text-cyan-400 px-2 py-1 rounded">→</span>
                <span className="text-cyan-400">MOVE RIGHT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-indigo-800 text-cyan-400 px-2 py-1 rounded">SPACE</span>
                <span className="text-cyan-400">FIRE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-indigo-800 text-cyan-400 px-2 py-1 rounded">P</span>
                <span className="text-cyan-400">PAUSE</span>
              </div>
            </div>
          </div>
          
          <div className="text-cyan-400 text-sm">
            <p>DEFEND EARTH FROM THE ALIEN INVASION! SHOOT DOWN WAVES OF DESCENDING ENEMIES BEFORE THEY REACH THE BOTTOM OF THE SCREEN. WATCH OUT FOR THE MOTHERSHIP THAT APPEARS OCCASIONALLY FOR BONUS POINTS!</p>
          </div>
        </div>
      )
    },
    {
      title: "PAC-MAN",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border border-indigo-700">
            <h4 className="text-cyan-400 font-bold mb-3 tracking-widest">GAME STATS</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-cyan-400 text-sm">HIGH SCORE</p>
                <p className="text-yellow-400 font-bold">143,590</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">YOUR BEST</p>
                <p className="text-yellow-400 font-bold">98,760</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">GAMES PLAYED</p>
                <p className="text-yellow-400 font-bold">67</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">GHOSTS EATEN</p>
                <p className="text-yellow-400 font-bold">412</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border border-indigo-700">
            <h4 className="text-cyan-400 font-bold mb-3 tracking-widest">GHOST GUIDE</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">👻</span>
                <div>
                  <p className="text-cyan-400">BLINKY</p>
                  <p className="text-gray-400">PURSUES PAC-MAN</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-500 text-xl">👻</span>
                <div>
                  <p className="text-cyan-400">PINKY</p>
                  <p className="text-gray-400">AMBUSHES PAC-MAN</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-500 text-xl">👻</span>
                <div>
                  <p className="text-cyan-400">INKY</p>
                  <p className="text-gray-400">UNPREDICTABLE</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500 text-xl">👻</span>
                <div>
                  <p className="text-cyan-400">CLYDE</p>
                  <p className="text-gray-400">RANDOM MOVEMENT</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-cyan-400 text-sm">
            <p>NAVIGATE THE MAZE, EAT ALL THE DOTS, AND AVOID THE GHOSTS! POWER PELLETS ALLOW YOU TO EAT THE GHOSTS FOR A SHORT TIME. COMPLETE ALL LEVELS TO BECOME THE PAC-MAN CHAMPION!</p>
          </div>
        </div>
      )
    },
    {
      title: "DONKEY KONG",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border border-indigo-700">
            <h4 className="text-cyan-400 font-bold mb-3 tracking-widest">GAME STATS</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-cyan-400 text-sm">HIGH SCORE</p>
                <p className="text-yellow-400 font-bold">87,200</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">YOUR BEST</p>
                <p className="text-yellow-400 font-bold">52,300</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">GAMES PLAYED</p>
                <p className="text-yellow-400 font-bold">31</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">HIGHEST LEVEL</p>
                <p className="text-yellow-400 font-bold">4</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border border-indigo-700">
            <h4 className="text-cyan-400 font-bold mb-3 tracking-widest">LEVEL GUIDE</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-indigo-800 text-cyan-400 px-2 py-1 rounded">L1</span>
                <span className="text-cyan-400">GIRDERS - AVOID BARRELS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-indigo-800 text-cyan-400 px-2 py-1 rounded">L2</span>
                <span className="text-cyan-400">CONVEYOR BELTS - DODGE FIREBALLS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-indigo-800 text-cyan-400 px-2 py-1 rounded">L3</span>
                <span className="text-cyan-400">ELEVATORS - WATCH YOUR TIMING</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-indigo-800 text-cyan-400 px-2 py-1 rounded">L4</span>
                <span className="text-cyan-400">RIVETS - REMOVE ALL TO WIN</span>
              </div>
            </div>
          </div>
          
          <div className="text-cyan-400 text-sm">
            <p>HELP JUMPMAN (MARIO) RESCUE PAULINE FROM THE CLUTCHES OF DONKEY KONG! CLIMB LADDERS, JUMP OVER OBSTACLES, AND AVOID BARRELS TO REACH THE TOP. GRAB HAMMERS FOR TEMPORARY INVINCIBILITY!</p>
          </div>
        </div>
      )
    },
    {
      title: "GALAGA",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border border-indigo-700">
            <h4 className="text-cyan-400 font-bold mb-3 tracking-widest">GAME STATS</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-cyan-400 text-sm">HIGH SCORE</p>
                <p className="text-yellow-400 font-bold">112,450</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">YOUR BEST</p>
                <p className="text-yellow-400 font-bold">78,920</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">GAMES PLAYED</p>
                <p className="text-yellow-400 font-bold">53</p>
              </div>
              <div>
                <p className="text-cyan-400 text-sm">ENEMIES DESTROYED</p>
                <p className="text-yellow-400 font-bold">2,456</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border border-indigo-700">
            <h4 className="text-cyan-400 font-bold mb-3 tracking-widest">ENEMY TYPES</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">👾</span>
                <div>
                  <p className="text-cyan-400">GRUNT</p>
                  <p className="text-gray-400">100 POINTS</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">👾</span>
                <div>
                  <p className="text-cyan-400">WASP</p>
                  <p className="text-gray-400">150 POINTS</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500 text-xl">👾</span>
                <div>
                  <p className="text-cyan-400">BUTTERFLY</p>
                  <p className="text-gray-400">200 POINTS</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">👾</span>
                <div>
                  <p className="text-cyan-400">BOSS</p>
                  <p className="text-gray-400">400 POINTS</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-cyan-400 text-sm">
            <p>DEFEND AGAINST WAVES OF ALIEN INSECTS! BEWARE OF ENEMIES THAT CAN CAPTURE YOUR SHIP WITH TRACTOR BEAMS. RESCUE CAPTURED SHIPS FOR DOUBLE FIREPOWER. CHALLENGE STAGES OFFER BONUS POINTS FOR DESTROYING ALL ENEMIES!</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white" style={{ 
      background: darkMode ? 'linear-gradient(135deg, #0f0f1a, #1a0a2a)' : 'linear-gradient(135deg, #f1f5f9, #e2e8f0)'
    }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3 font-mono text-cyan-400">
            <FaGamepad className="text-cyan-400" />
            RETRO ARCADE
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-indigo-900 text-cyan-400 border border-indigo-700 font-mono text-sm"
          >
            INSERT COIN
          </button>
        </div>

        <div className="space-y-6">
          {arcadeGames.map((game, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaGhost className="text-cyan-400" />}
                {index === 1 && <FaCoins className="text-yellow-400" />}
                {index === 2 && <FaSkull className="text-red-400" />}
                {index === 3 && <FaTrophy className="text-purple-400" />}
              </div>
              <div className="flex-1">
                <Collapsible_41
                  title={game.title}
                  defaultOpen={index === 0}
                >
                  {game.content}
                </Collapsible_41>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_41; 