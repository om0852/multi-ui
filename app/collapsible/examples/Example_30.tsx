"use client"

import React, { useState } from 'react';
import Collapsible_30 from '../_components/Collapsible_30';
import { FaRocket, FaSatellite, FaUserAstronaut, FaRadiation } from 'react-icons/fa6';

const Example_30: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const missionData = [
    {
      title: "MISSION OVERVIEW",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-cyan-400 font-mono text-lg">OPERATION NEBULA</h3>
              <p className="text-cyan-300 opacity-70 text-sm">CLASSIFIED LEVEL 3 // AUTHORIZED PERSONNEL ONLY</p>
            </div>
            <div className="bg-cyan-900 bg-opacity-30 px-3 py-1 rounded border border-cyan-500">
              <p className="text-cyan-400 font-mono">STATUS: <span className="text-green-400">ACTIVE</span></p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
              <h4 className="text-cyan-400 font-mono text-sm mb-2">MISSION OBJECTIVE</h4>
              <p className="text-cyan-100 text-sm">Establish first permanent human settlement on Europa, Jupiter&apos;s moon, and conduct deep ice drilling to search for signs of extraterrestrial life in subsurface ocean.</p>
            </div>
            <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
              <h4 className="text-cyan-400 font-mono text-sm mb-2">TIMELINE</h4>
              <ul className="text-cyan-100 text-sm space-y-1">
                <li>Launch: 2045-03-15</li>
                <li>Jupiter Arrival: 2046-08-22</li>
                <li>Europa Landing: 2046-09-10</li>
                <li>Mission Duration: 5 years</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
            <h4 className="text-cyan-400 font-mono text-sm mb-2">MISSION PARAMETERS</h4>
            <div className="grid grid-cols-3 gap-2 text-cyan-100 text-sm">
              <div>Crew: 8 specialists</div>
              <div>Vessel: Artemis XI</div>
              <div>Distance: 628.3M km</div>
              <div>Comms Delay: 45 min</div>
              <div>Gravity: 0.134 g</div>
              <div>Temp: -160&deg;C avg</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "CREW MANIFEST",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
              <div className="flex items-start gap-3">
                <FaUserAstronaut className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h4 className="text-cyan-400 font-mono">CDR. ELENA RODRIGUEZ</h4>
                  <p className="text-cyan-300 text-xs">MISSION COMMANDER</p>
                  <p className="text-cyan-100 text-sm mt-1">Former NASA astronaut with 3 previous Mars missions. Specializes in extreme environment operations.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
              <div className="flex items-start gap-3">
                <FaUserAstronaut className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h4 className="text-cyan-400 font-mono">DR. JAMES CHEN</h4>
                  <p className="text-cyan-300 text-xs">CHIEF SCIENCE OFFICER</p>
                  <p className="text-cyan-100 text-sm mt-1">Astrobiologist specializing in extremophile organisms and subsurface ocean environments.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
              <div className="flex items-start gap-3">
                <FaUserAstronaut className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h4 className="text-cyan-400 font-mono">LT. MARCUS OKAFOR</h4>
                  <p className="text-cyan-300 text-xs">SYSTEMS ENGINEER</p>
                  <p className="text-cyan-100 text-sm mt-1">Responsible for habitat construction and maintenance of life support systems in extreme cold.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
              <div className="flex items-start gap-3">
                <FaUserAstronaut className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h4 className="text-cyan-400 font-mono">DR. SOPHIA KIM</h4>
                  <p className="text-cyan-300 text-xs">MEDICAL OFFICER</p>
                  <p className="text-cyan-100 text-sm mt-1">Specializes in long-duration space medicine and radiation effects on human physiology.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-cyan-400 text-xs font-mono text-center">
            [ADDITIONAL CREW DATA CLASSIFIED - AUTHORIZATION REQUIRED]
          </div>
        </div>
      )
    },
    {
      title: "EQUIPMENT SPECS",
      content: (
        <div className="space-y-4">
          <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
            <div className="flex items-start gap-3">
              <FaRocket className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="text-cyan-400 font-mono">ARTEMIS XI SPACECRAFT</h4>
                <div className="grid grid-cols-2 gap-2 text-cyan-100 text-sm mt-2">
                  <div>Length: 128.5 meters</div>
                  <div>Mass: 12,450 tons</div>
                  <div>Propulsion: Nuclear pulse</div>
                  <div>Max Velocity: 0.02c</div>
                  <div>Life Support: Closed system</div>
                  <div>Radiation Shield: Magnetoplasma</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
            <div className="flex items-start gap-3">
              <FaSatellite className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="text-cyan-400 font-mono">EUROPA HABITAT MODULE</h4>
                <div className="grid grid-cols-2 gap-2 text-cyan-100 text-sm mt-2">
                  <div>Diameter: 30 meters</div>
                  <div>Capacity: 12 personnel</div>
                  <div>Power: RTG + Solar</div>
                  <div>Thermal: Active heating</div>
                  <div>Structure: Self-healing composite</div>
                  <div>Deployment: Autonomous</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
            <div className="flex items-start gap-3">
              <FaRadiation className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="text-cyan-400 font-mono">DEEP ICE PENETRATOR</h4>
                <div className="grid grid-cols-2 gap-2 text-cyan-100 text-sm mt-2">
                  <div>Drill Type: Thermal + Mechanical</div>
                  <div>Max Depth: 30 km</div>
                  <div>Power: Mini-reactor</div>
                  <div>Sensors: Multi-spectral</div>
                  <div>Sample Collection: Automated</div>
                  <div>Communication: Acoustic relay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "RISK ASSESSMENT",
      content: (
        <div className="space-y-4">
          <div className="bg-red-900 bg-opacity-20 p-3 rounded border border-red-800">
            <h4 className="text-red-400 font-mono text-sm mb-2">CRITICAL RISKS</h4>
            <ul className="text-cyan-100 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-red-500 text-black px-1 rounded font-mono text-xs mt-1">HIGH</span>
                <div>
                  <span className="text-red-400">Radiation Exposure</span> - Jupiter&apos;s magnetosphere produces intense radiation that can damage equipment and cause acute radiation sickness.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-red-500 text-black px-1 rounded font-mono text-xs mt-1">HIGH</span>
                <div>
                  <span className="text-red-400">Ice Crust Instability</span> - Europa&apos;s surface experiences regular fracturing events that could compromise habitat integrity.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-500 text-black px-1 rounded font-mono text-xs mt-1">MED</span>
                <div>
                  <span className="text-yellow-400">Communication Failure</span> - Extended blackout periods possible due to Jupiter&apos;s interference and solar conjunctions.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-500 text-black px-1 rounded font-mono text-xs mt-1">MED</span>
                <div>
                  <span className="text-yellow-400">Psychological Factors</span> - Extreme isolation and confined quarters for extended duration may impact crew mental health.
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-cyan-900 bg-opacity-20 p-3 rounded border border-cyan-800">
            <h4 className="text-cyan-400 font-mono text-sm mb-2">CONTINGENCY PROTOCOLS</h4>
            <ul className="text-cyan-100 text-sm space-y-1">
              <li>• Emergency return vehicle on standby with 72-hour launch capability</li>
              <li>• Redundant life support systems with 200% capacity</li>
              <li>• Automated habitat relocation system in case of surface instability</li>
              <li>• Quantum-encrypted backup communication channels</li>
              <li>• AI-assisted psychological monitoring and intervention</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white" style={{ 
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      backgroundImage: darkMode ? 'linear-gradient(135deg, #0f172a, #1e293b)' : 'linear-gradient(135deg, #f1f5f9, #e2e8f0)'
    }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3 font-mono text-cyan-400">
            <FaRocket className="text-cyan-400" />
            EUROPA MISSION BRIEFING
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-cyan-900 text-cyan-400 border border-cyan-700 font-mono text-sm"
          >
            TOGGLE DISPLAY MODE
          </button>
        </div>

        <div className="space-y-4">
          {missionData.map((section, index) => (
            <Collapsible_30
              key={index}
              title={section.title}
              defaultOpen={index === 0}
            >
              {section.content}
            </Collapsible_30>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_30; 