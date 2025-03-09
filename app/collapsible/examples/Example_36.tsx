"use client"

import React, { useState } from 'react';
import Collapsible_36 from '../_components/Collapsible_36';
import { FaScroll, FaDragon, FaGem, FaCrown, FaShieldHalved } from 'react-icons/fa6';

const Example_36: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const questSections = [
    {
      title: "The Dragon's Hoard",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">📜</div>
            <div>
              <h4 className="font-bold text-amber-900">Quest Description</h4>
              <p className="text-amber-800 italic">
                The ancient dragon Fyretalon has been terrorizing the countryside for generations. 
                His mountain lair is said to contain treasures beyond imagination, collected over centuries of plunder.
                The king has offered a lordship to any brave soul who can slay the beast and return with proof of the deed.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">⚔️</div>
            <div>
              <h4 className="font-bold text-amber-900">Objectives</h4>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Locate Fyretalon's mountain lair in the Dragonspine Range</li>
                <li>Defeat Fyretalon the Ancient Red Dragon</li>
                <li>Collect a dragon scale as proof of your victory</li>
                <li>Return to King Aldric with the scale</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">💰</div>
            <div>
              <h4 className="font-bold text-amber-900">Rewards</h4>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Title: Dragon Slayer</li>
                <li>Land: Eastmarch Estate</li>
                <li>Gold: 5,000 pieces</li>
                <li>Item: Amulet of Dragonkind</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-3 text-amber-800 text-sm italic">
            <p>Recommended Level: 15+ | Difficulty: Legendary | Time: 4-6 hours</p>
          </div>
        </div>
      )
    },
    {
      title: "The Lost Artifacts",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">📜</div>
            <div>
              <h4 className="font-bold text-amber-900">Quest Description</h4>
              <p className="text-amber-800 italic">
                The Archmage Therin seeks three ancient artifacts of immense power that were lost during the Cataclysm. 
                These relics—the Crystal Staff, the Orb of Visions, and the Runestone of Power—must be recovered before 
                they fall into the wrong hands. Each is hidden in a different location, guarded by magical traps and fearsome guardians.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">⚔️</div>
            <div>
              <h4 className="font-bold text-amber-900">Objectives</h4>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Find the Crystal Staff in the Frozen Caverns</li>
                <li>Recover the Orb of Visions from the Sunken Temple</li>
                <li>Retrieve the Runestone of Power from the Obsidian Tower</li>
                <li>Return all three artifacts to Archmage Therin</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">💰</div>
            <div>
              <h4 className="font-bold text-amber-900">Rewards</h4>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Gold: 3,000 pieces</li>
                <li>Item: Spellbook of Greater Magics</li>
                <li>Access to the Arcane Library</li>
                <li>Reputation: +500 with the Mages Guild</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-3 text-amber-800 text-sm italic">
            <p>Recommended Level: 10+ | Difficulty: Hard | Time: 3-5 hours</p>
          </div>
        </div>
      )
    },
    {
      title: "The Cursed Village",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">📜</div>
            <div>
              <h4 className="font-bold text-amber-900">Quest Description</h4>
              <p className="text-amber-800 italic">
                The once-thriving village of Ravenhollow has fallen under a mysterious curse. Crops wither, livestock perish, 
                and villagers fall ill with an unknown malady. The village elder believes an ancient evil has awakened in the 
                old burial grounds north of the village. Someone must investigate the source of this curse and lift it before 
                Ravenhollow is lost forever.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">⚔️</div>
            <div>
              <h4 className="font-bold text-amber-900">Objectives</h4>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Speak with the afflicted villagers to gather information</li>
                <li>Investigate the old burial grounds</li>
                <li>Confront the source of the curse</li>
                <li>Perform the ritual to cleanse the village</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">💰</div>
            <div>
              <h4 className="font-bold text-amber-900">Rewards</h4>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Gold: 1,500 pieces</li>
                <li>Item: Amulet of Protection</li>
                <li>Free lodging in Ravenhollow</li>
                <li>Reputation: +300 with the Kingdom</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-3 text-amber-800 text-sm italic">
            <p>Recommended Level: 8+ | Difficulty: Medium | Time: 2-3 hours</p>
          </div>
        </div>
      )
    },
    {
      title: "The Tournament of Champions",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">📜</div>
            <div>
              <h4 className="font-bold text-amber-900">Quest Description</h4>
              <p className="text-amber-800 italic">
                The annual Tournament of Champions is being held in the capital city. Warriors, mages, and rogues from across 
                the realm gather to test their skills in combat, magic, and cunning. The champion will receive glory, gold, and 
                a magical weapon from the royal armory. Will you prove yourself worthy against the realm's finest?
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">⚔️</div>
            <div>
              <h4 className="font-bold text-amber-900">Objectives</h4>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Register for the tournament in the capital city</li>
                <li>Compete in three trials: Combat, Magic, and Cunning</li>
                <li>Defeat your rivals in the final championship match</li>
                <li>Claim your prize from the King</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="text-amber-800 mt-1">💰</div>
            <div>
              <h4 className="font-bold text-amber-900">Rewards</h4>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Gold: 2,000 pieces</li>
                <li>Item: Enchanted weapon of your choice</li>
                <li>Title: Champion of the Realm</li>
                <li>Reputation: +400 with all factions</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-3 text-amber-800 text-sm italic">
            <p>Recommended Level: 5+ | Difficulty: Varies | Time: 2-4 hours</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-amber-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif flex items-center gap-3">
            <FaScroll className="text-amber-700" />
            The Adventurer's Questbook
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-amber-100 text-amber-900'
            } shadow-md font-serif`}
          >
            {darkMode ? 'Light Torch' : 'Extinguish Torch'}
          </button>
        </div>

        <div className="space-y-6">
          {questSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaDragon className="text-red-600" />}
                {index === 1 && <FaGem className="text-blue-500" />}
                {index === 2 && <FaShieldHalved className="text-gray-600" />}
                {index === 3 && <FaCrown className="text-yellow-600" />}
              </div>
              <div className="flex-1">
                <Collapsible_36
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_36>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_36; 