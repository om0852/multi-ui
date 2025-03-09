"use client"

import React, { useState } from 'react';
import Collapsible_35 from '../_components/Collapsible_35';
import { FaMicrochip, FaLock, FaNetworkWired, FaRobot } from 'react-icons/fa6';

const Example_35: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const cyberpunkSections = [
    {
      title: "NEURAL IMPLANT SPECS",
      content: (
        <div className="space-y-4">
          <div className="border border-cyan-500 bg-gray-900 bg-opacity-50 p-4 rounded">
            <h4 className="text-cyan-400 font-mono text-lg mb-3 border-b border-cyan-800 pb-2">CORTEX-V7 NEURAL INTERFACE</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-pink-500 font-bold mb-1">PROCESSOR</p>
                <p className="text-gray-300">Quantum Neural Core</p>
                <p className="text-gray-400 text-xs">12.8 THz / 256 qubits</p>
              </div>
              <div>
                <p className="text-pink-500 font-bold mb-1">MEMORY</p>
                <p className="text-gray-300">Organic Crystal Storage</p>
                <p className="text-gray-400 text-xs">8.2 PB capacity</p>
              </div>
              <div>
                <p className="text-pink-500 font-bold mb-1">BANDWIDTH</p>
                <p className="text-gray-300">Direct Neural Link</p>
                <p className="text-gray-400 text-xs">1.2 TB/s transfer rate</p>
              </div>
              <div>
                <p className="text-pink-500 font-bold mb-1">POWER</p>
                <p className="text-gray-300">Bio-electric Converter</p>
                <p className="text-gray-400 text-xs">Self-sustaining</p>
              </div>
            </div>
            <div className="mt-4 border-t border-cyan-800 pt-3">
              <p className="text-yellow-400 text-xs">WARNING: Unauthorized modifications void warranty and may cause neural degradation</p>
            </div>
          </div>
          
          <div className="text-gray-300 text-sm">
            <p>The Cortex-V7 represents the pinnacle of neural augmentation technology, offering seamless integration with both biological neural networks and external digital systems. Installation requires certified medical technicians and a minimum 72-hour recovery period.</p>
            <p className="mt-2">Compatible with all major netspace protocols and features military-grade encryption to prevent unauthorized neural access.</p>
          </div>
        </div>
      )
    },
    {
      title: "SECURITY PROTOCOLS",
      content: (
        <div className="space-y-4">
          <div className="border border-red-500 bg-gray-900 bg-opacity-50 p-4 rounded">
            <h4 className="text-red-400 font-mono text-lg mb-3 border-b border-red-800 pb-2">BREACH DETECTION SYSTEMS</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1 mr-2"></div>
                <div>
                  <p className="text-gray-300">Quantum Encryption Layer</p>
                  <p className="text-gray-400 text-xs">Self-evolving 4096-bit encryption with neural pattern recognition</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1 mr-2"></div>
                <div>
                  <p className="text-gray-300">Biometric Authentication</p>
                  <p className="text-gray-400 text-xs">Multi-factor: retinal, neural pattern, and thought signature verification</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mt-1 mr-2"></div>
                <div>
                  <p className="text-gray-300">Intrusion Countermeasures</p>
                  <p className="text-gray-400 text-xs">Automated defense systems with graduated response protocols</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-red-500 mt-1 mr-2"></div>
                <div>
                  <p className="text-gray-300">Emergency Purge System</p>
                  <p className="text-gray-400 text-xs">Last resort memory wipe to prevent data extraction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-gray-300 text-sm">
            <p>Corporate espionage and neural hacking incidents have increased 342% in the last quarter. All users are advised to maintain current security protocols and report any unusual neural activity immediately.</p>
            <p className="mt-2 text-red-400">REMINDER: Unauthorized access to corporate neural networks is punishable by memory restructuring under Code 5721-B.</p>
          </div>
        </div>
      )
    },
    {
      title: "NETSPACE ACCESS",
      content: (
        <div className="space-y-4">
          <div className="border border-blue-500 bg-gray-900 bg-opacity-50 p-4 rounded">
            <h4 className="text-blue-400 font-mono text-lg mb-3 border-b border-blue-800 pb-2">AVAILABLE NETWORKS</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-300">GLOBAL PUBLIC NET</p>
                  <p className="text-gray-400 text-xs">Basic access / Heavily monitored</p>
                </div>
                <div className="text-green-400">CONNECTED</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-300">CORPORATE INTRANET</p>
                  <p className="text-gray-400 text-xs">Employee access only / Level 2 clearance</p>
                </div>
                <div className="text-green-400">CONNECTED</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-300">DARKNET ACCESS</p>
                  <p className="text-gray-400 text-xs">Encrypted channels / Untraceable</p>
                </div>
                <div className="text-red-400">DISCONNECTED</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-300">MILITARY SUBNET</p>
                  <p className="text-gray-400 text-xs">Restricted access / Clearance required</p>
                </div>
                <div className="text-red-400">LOCKED</div>
              </div>
            </div>
          </div>
          
          <div className="text-gray-300 text-sm">
            <p>Your neural interface is currently operating at 78% efficiency. Network traffic analysis indicates potential surveillance on public channels. Recommend using encrypted communication for sensitive data.</p>
            <p className="mt-2 text-blue-400">TIP: Regular neural defragmentation can improve connection speeds and reduce trace vulnerability.</p>
          </div>
        </div>
      )
    },
    {
      title: "AUGMENTATION MARKET",
      content: (
        <div className="space-y-4">
          <div className="border border-purple-500 bg-gray-900 bg-opacity-50 p-4 rounded">
            <h4 className="text-purple-400 font-mono text-lg mb-3 border-b border-purple-800 pb-2">LATEST ENHANCEMENTS</h4>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <p className="text-gray-300 font-bold">OCULAR ENHANCEMENT MK-IV</p>
                  <p className="text-gray-400 text-xs">4K thermal / Night vision / Tactical overlay</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400">¥12,500</p>
                  <p className="text-gray-400 text-xs">LEGAL</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <p className="text-gray-300 font-bold">REFLEX BOOSTER</p>
                  <p className="text-gray-400 text-xs">Neural response time -35% / Muscle enhancement</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400">¥28,750</p>
                  <p className="text-gray-400 text-xs">RESTRICTED</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <p className="text-gray-300 font-bold">MEMORY EXPANSION</p>
                  <p className="text-gray-400 text-xs">+2PB storage / Enhanced recall / Experience sharing</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400">¥35,000</p>
                  <p className="text-gray-400 text-xs">LEGAL</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <p className="text-gray-300 font-bold">MILITARY FIREWALL</p>
                  <p className="text-gray-400 text-xs">Black-ops grade protection / Counter-intrusion</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400">¥67,200</p>
                  <p className="text-red-400 text-xs">ILLEGAL</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-gray-300 text-sm">
            <p>All augmentations require compatible neural architecture. Installation available at licensed cyberclinics or through our network of street docs (no questions asked, quality varies).</p>
            <p className="mt-2 text-yellow-400">WARNING: Black market augmentations may contain backdoors or malicious code. Scan before installation.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white" style={{ 
      background: 'linear-gradient(135deg, #0a0a1a, #1a0a2a)',
      backgroundImage: darkMode ? 'linear-gradient(135deg, #0a0a1a, #1a0a2a)' : 'linear-gradient(135deg, #f1f5f9, #e2e8f0)'
    }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-mono flex items-center gap-3 text-cyan-400">
            <FaMicrochip className="text-pink-500" />
            <span className="text-pink-500">&lt;</span>NEURAL_INTERFACE<span className="text-pink-500">&gt;</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-cyan-400 border border-cyan-700 font-mono text-sm"
          >
            TOGGLE_REALITY_MODE()
          </button>
        </div>

        <div className="space-y-4">
          {cyberpunkSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaMicrochip className="text-cyan-500" />}
                {index === 1 && <FaLock className="text-red-500" />}
                {index === 2 && <FaNetworkWired className="text-blue-500" />}
                {index === 3 && <FaRobot className="text-purple-500" />}
              </div>
              <div className="flex-1">
                <Collapsible_35
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_35>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_35; 