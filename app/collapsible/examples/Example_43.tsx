"use client"

import React, { useState } from 'react';
import Collapsible_43 from '../_components/Collapsible_43';
import { FaLeaf, FaWater, FaPaw, FaMountain, FaSun } from 'react-icons/fa6';

const Example_43: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const conservationProjects = [
    {
      title: "Rainforest Protection Initiative",
      icon: <FaLeaf className="text-green-600" size={20} />,
      content: (
        <div className="space-y-4">
          <div className="aspect-video bg-gradient-to-br from-green-900 to-green-800 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
            <span className="text-6xl">🌳</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 dark:text-green-400 mb-2">Project Overview</h4>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Our flagship initiative focuses on protecting 50,000 acres of pristine Amazon rainforest 
                from deforestation and illegal logging. Working with indigenous communities, we've established 
                sustainable conservation practices that preserve biodiversity while supporting local economies.
              </p>
            </div>
            
            <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 dark:text-green-400 mb-2">Impact Statistics</h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li className="flex justify-between">
                  <span>Protected Area:</span>
                  <span className="font-medium">50,000 acres</span>
                </li>
                <li className="flex justify-between">
                  <span>Carbon Sequestered:</span>
                  <span className="font-medium">2.3M tons annually</span>
                </li>
                <li className="flex justify-between">
                  <span>Species Protected:</span>
                  <span className="font-medium">1,200+</span>
                </li>
                <li className="flex justify-between">
                  <span>Communities Supported:</span>
                  <span className="font-medium">12 villages</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900 dark:bg-opacity-10 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 dark:text-green-400 mb-2">How You Can Help</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="bg-white dark:bg-green-900 dark:bg-opacity-30 p-3 rounded-lg shadow-sm">
                <div className="text-3xl mb-2">🌱</div>
                <h5 className="text-green-700 dark:text-green-300 font-medium text-sm mb-1">Sponsor an Acre</h5>
                <p className="text-green-600 dark:text-green-400 text-xs">$25/month protects one acre of rainforest</p>
              </div>
              <div className="bg-white dark:bg-green-900 dark:bg-opacity-30 p-3 rounded-lg shadow-sm">
                <div className="text-3xl mb-2">👥</div>
                <h5 className="text-green-700 dark:text-green-300 font-medium text-sm mb-1">Volunteer Program</h5>
                <p className="text-green-600 dark:text-green-400 text-xs">Join our 2-week conservation expeditions</p>
              </div>
              <div className="bg-white dark:bg-green-900 dark:bg-opacity-30 p-3 rounded-lg shadow-sm">
                <div className="text-3xl mb-2">🔬</div>
                <h5 className="text-green-700 dark:text-green-300 font-medium text-sm mb-1">Research Support</h5>
                <p className="text-green-600 dark:text-green-400 text-xs">Fund biodiversity studies and monitoring</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Marine Conservation Program",
      icon: <FaWater className="text-blue-600" size={20} />,
      content: (
        <div className="space-y-4">
          <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
            <span className="text-6xl">🐋</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-20 p-4 rounded-lg col-span-2">
              <h4 className="font-medium text-blue-800 dark:text-blue-400 mb-2">Coral Reef Restoration</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Our marine biologists are pioneering innovative techniques to restore damaged coral reefs 
                in the Pacific Ocean. Using a combination of coral farming, transplantation, and artificial 
                reef structures, we've successfully rehabilitated over 30 acres of reef habitat that now 
                supports thriving marine ecosystems.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-white dark:bg-blue-900 dark:bg-opacity-30 p-2 rounded">
                  <span className="block text-blue-800 dark:text-blue-300 font-medium">30+</span>
                  <span className="text-blue-600 dark:text-blue-400">Acres Restored</span>
                </div>
                <div className="bg-white dark:bg-blue-900 dark:bg-opacity-30 p-2 rounded">
                  <span className="block text-blue-800 dark:text-blue-300 font-medium">12,000+</span>
                  <span className="text-blue-600 dark:text-blue-400">Corals Planted</span>
                </div>
                <div className="bg-white dark:bg-blue-900 dark:bg-opacity-30 p-2 rounded">
                  <span className="block text-blue-800 dark:text-blue-300 font-medium">250+</span>
                  <span className="text-blue-600 dark:text-blue-400">Species Return</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-400 mb-2">Ocean Cleanup</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Our fleet of specialized vessels works to remove plastic pollution from critical marine habitats.
                Using advanced collection systems, we've removed over 500 tons of plastic from the ocean.
              </p>
              <div className="mt-3 text-center bg-white dark:bg-blue-900 dark:bg-opacity-30 p-3 rounded">
                <span className="block text-3xl text-blue-800 dark:text-blue-300 font-medium">500+</span>
                <span className="text-blue-600 dark:text-blue-400">Tons of Plastic Removed</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-10 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 dark:text-blue-400 mb-2">Current Initiatives</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-blue-700 dark:text-blue-300 text-sm">Establishing a 10,000 sq km marine protected area in the Coral Triangle</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-blue-700 dark:text-blue-300 text-sm">Monitoring and protecting sea turtle nesting sites across the Pacific</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-blue-700 dark:text-blue-300 text-sm">Developing sustainable fishing practices with coastal communities</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Wildlife Protection Efforts",
      icon: <FaPaw className="text-amber-600" size={20} />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="aspect-square bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                <span className="text-6xl">🐘</span>
              </div>
              <div className="bg-amber-100 dark:bg-amber-900 dark:bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-medium text-amber-800 dark:text-amber-400 mb-2">Elephant Conservation</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Our anti-poaching units work alongside local authorities to protect elephant populations 
                  in Eastern Africa. Through community education and economic development programs, 
                  we've reduced poaching incidents by 78% in our protected areas.
                </p>
                <div className="mt-3 flex justify-between text-xs">
                  <div className="text-center">
                    <span className="block text-amber-800 dark:text-amber-300 font-medium">3,200+</span>
                    <span className="text-amber-600 dark:text-amber-400">Elephants Protected</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-amber-800 dark:text-amber-300 font-medium">78%</span>
                    <span className="text-amber-600 dark:text-amber-400">Poaching Reduction</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="aspect-square bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                <span className="text-6xl">🐅</span>
              </div>
              <div className="bg-amber-100 dark:bg-amber-900 dark:bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-medium text-amber-800 dark:text-amber-400 mb-2">Tiger Recovery Project</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Our comprehensive approach to tiger conservation includes habitat protection, 
                  anti-poaching patrols, and wildlife corridors. Since 2010, we've seen a 35% 
                  increase in tiger populations across our project areas in Southeast Asia.
                </p>
                <div className="mt-3 flex justify-between text-xs">
                  <div className="text-center">
                    <span className="block text-amber-800 dark:text-amber-300 font-medium">35%</span>
                    <span className="text-amber-600 dark:text-amber-400">Population Increase</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-amber-800 dark:text-amber-300 font-medium">12,000 km²</span>
                    <span className="text-amber-600 dark:text-amber-400">Protected Habitat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900 dark:bg-opacity-10 p-4 rounded-lg">
            <h4 className="font-medium text-amber-800 dark:text-amber-400 mb-2">Wildlife Monitoring</h4>
            <p className="text-amber-700 dark:text-amber-300 text-sm mb-3">
              Using cutting-edge technology including satellite tracking, camera traps, and environmental DNA sampling, 
              we monitor wildlife populations to guide our conservation strategies and measure our impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
              <div className="bg-white dark:bg-amber-900 dark:bg-opacity-30 p-2 rounded">
                <div className="text-2xl mb-1">📡</div>
                <span className="text-amber-700 dark:text-amber-300 text-xs">Satellite Tracking</span>
              </div>
              <div className="bg-white dark:bg-amber-900 dark:bg-opacity-30 p-2 rounded">
                <div className="text-2xl mb-1">📸</div>
                <span className="text-amber-700 dark:text-amber-300 text-xs">Camera Traps</span>
              </div>
              <div className="bg-white dark:bg-amber-900 dark:bg-opacity-30 p-2 rounded">
                <div className="text-2xl mb-1">🧬</div>
                <span className="text-amber-700 dark:text-amber-300 text-xs">eDNA Sampling</span>
              </div>
              <div className="bg-white dark:bg-amber-900 dark:bg-opacity-30 p-2 rounded">
                <div className="text-2xl mb-1">🛰️</div>
                <span className="text-amber-700 dark:text-amber-300 text-xs">Drone Surveys</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Mountain Ecosystem Preservation",
      icon: <FaMountain className="text-slate-600" size={20} />,
      content: (
        <div className="space-y-4">
          <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
            <span className="text-6xl">⛰️</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 dark:bg-opacity-50 p-4 rounded-lg">
              <h4 className="font-medium text-slate-800 dark:text-slate-300 mb-2">Alpine Conservation</h4>
              <p className="text-slate-700 dark:text-slate-400 text-sm">
                Our alpine conservation program focuses on protecting fragile mountain ecosystems 
                from the impacts of climate change, tourism, and development. We work with local 
                communities to establish sustainable practices that preserve these unique environments.
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Elevation Range:</span>
                  <span className="text-slate-800 dark:text-slate-300">1,500 - 4,500m</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Protected Area:</span>
                  <span className="text-slate-800 dark:text-slate-300">250,000 hectares</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Endemic Species:</span>
                  <span className="text-slate-800 dark:text-slate-300">120+ plant species</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 dark:bg-opacity-50 p-4 rounded-lg">
              <h4 className="font-medium text-slate-800 dark:text-slate-300 mb-2">Watershed Protection</h4>
              <p className="text-slate-700 dark:text-slate-400 text-sm">
                Mountain ecosystems serve as critical watersheds that provide fresh water to millions of people. 
                Our watershed protection initiatives focus on maintaining forest cover, preventing erosion, 
                and ensuring sustainable water management for downstream communities.
              </p>
              <div className="mt-3 bg-white dark:bg-slate-700 p-3 rounded text-center">
                <span className="block text-slate-800 dark:text-slate-300 font-medium">5+ million</span>
                <span className="text-slate-600 dark:text-slate-400 text-xs">People benefit from our watershed protection</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 dark:bg-opacity-30 p-4 rounded-lg">
            <h4 className="font-medium text-slate-800 dark:text-slate-300 mb-2">Climate Monitoring</h4>
            <p className="text-slate-700 dark:text-slate-400 text-sm mb-3">
              Our network of high-altitude climate monitoring stations provides valuable data on changing 
              mountain conditions, helping to inform conservation strategies and climate adaptation measures.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-slate-700 p-3 rounded text-center">
                <span className="block text-2xl text-slate-800 dark:text-slate-300 mb-1">🌡️</span>
                <span className="text-slate-800 dark:text-slate-300 font-medium text-sm">Temperature</span>
                <span className="block text-slate-600 dark:text-slate-400 text-xs">+1.8°C since 1980</span>
              </div>
              <div className="bg-white dark:bg-slate-700 p-3 rounded text-center">
                <span className="block text-2xl text-slate-800 dark:text-slate-300 mb-1">❄️</span>
                <span className="text-slate-800 dark:text-slate-300 font-medium text-sm">Snowpack</span>
                <span className="block text-slate-600 dark:text-slate-400 text-xs">-22% since 1980</span>
              </div>
              <div className="bg-white dark:bg-slate-700 p-3 rounded text-center">
                <span className="block text-2xl text-slate-800 dark:text-slate-300 mb-1">💧</span>
                <span className="text-slate-800 dark:text-slate-300 font-medium text-sm">Glacial Retreat</span>
                <span className="block text-slate-600 dark:text-slate-400 text-xs">37m per year</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Renewable Energy Projects",
      icon: <FaSun className="text-yellow-600" size={20} />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-400 mb-2">Community Solar Initiative</h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
                Our community solar program brings renewable energy to remote villages, replacing diesel generators 
                and providing clean electricity to communities that previously had limited or no access to power.
              </p>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white dark:bg-yellow-900 dark:bg-opacity-30 p-3 rounded">
                  <span className="block text-yellow-800 dark:text-yellow-300 font-medium">45</span>
                  <span className="text-yellow-600 dark:text-yellow-400 text-xs">Villages Powered</span>
                </div>
                <div className="bg-white dark:bg-yellow-900 dark:bg-opacity-30 p-3 rounded">
                  <span className="block text-yellow-800 dark:text-yellow-300 font-medium">12,500+</span>
                  <span className="text-yellow-600 dark:text-yellow-400 text-xs">People Impacted</span>
                </div>
                <div className="bg-white dark:bg-yellow-900 dark:bg-opacity-30 p-3 rounded">
                  <span className="block text-yellow-800 dark:text-yellow-300 font-medium">850 kW</span>
                  <span className="text-yellow-600 dark:text-yellow-400 text-xs">Total Capacity</span>
                </div>
                <div className="bg-white dark:bg-yellow-900 dark:bg-opacity-30 p-3 rounded">
                  <span className="block text-yellow-800 dark:text-yellow-300 font-medium">1,200 tons</span>
                  <span className="text-yellow-600 dark:text-yellow-400 text-xs">CO₂ Avoided Annually</span>
                </div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center overflow-hidden">
              <span className="text-6xl">☀️</span>
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-10 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-800 dark:text-yellow-400 mb-2">Renewable Energy Training</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
              We provide technical training to community members, creating local expertise in renewable 
              energy installation and maintenance. This approach ensures the long-term sustainability 
              of our projects while creating green jobs in rural areas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-white dark:bg-yellow-900 dark:bg-opacity-30 p-2 rounded">
                <span className="block text-yellow-800 dark:text-yellow-300 font-medium">180+</span>
                <span className="text-yellow-600 dark:text-yellow-400">Technicians Trained</span>
              </div>
              <div className="bg-white dark:bg-yellow-900 dark:bg-opacity-30 p-2 rounded">
                <span className="block text-yellow-800 dark:text-yellow-300 font-medium">35</span>
                <span className="text-yellow-600 dark:text-yellow-400">Women Technicians</span>
              </div>
              <div className="bg-white dark:bg-yellow-900 dark:bg-opacity-30 p-2 rounded">
                <span className="block text-yellow-800 dark:text-yellow-300 font-medium">95%</span>
                <span className="text-yellow-600 dark:text-yellow-400">System Uptime</span>
              </div>
              <div className="bg-white dark:bg-yellow-900 dark:bg-opacity-30 p-2 rounded">
                <span className="block text-yellow-800 dark:text-yellow-300 font-medium">120+</span>
                <span className="text-yellow-600 dark:text-yellow-400">Jobs Created</span>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-20 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-800 dark:text-yellow-400 mb-2">Future Initiatives</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2 flex-shrink-0"></div>
                <span className="text-yellow-700 dark:text-yellow-300 text-sm">Expanding our micro-hydro program to reach 20 additional mountain communities</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2 flex-shrink-0"></div>
                <span className="text-yellow-700 dark:text-yellow-300 text-sm">Developing a renewable energy incubator to support local green entrepreneurs</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2 flex-shrink-0"></div>
                <span className="text-yellow-700 dark:text-yellow-300 text-sm">Piloting battery storage solutions to improve energy reliability in remote areas</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-green-50 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
            <FaLeaf className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <span>Global Conservation Initiatives</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-sm ${
              darkMode 
                ? 'bg-gray-800 text-green-400 border border-gray-700' 
                : 'bg-white text-green-700 border border-green-200 shadow-sm'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {conservationProjects.map((project, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {project.icon}
              </div>
              <div className="flex-1">
                <Collapsible_43
                  title={project.title}
                  defaultOpen={index === 0}
                >
                  {project.content}
                </Collapsible_43>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-8 p-4 rounded-lg text-center ${
          darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 shadow-sm'
        }`}>
          <p className="text-sm">
            Join our global network of conservation partners and help protect our planet's most precious ecosystems.
          </p>
          <button className={`mt-3 px-4 py-2 rounded-lg text-sm font-medium ${
            darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'
          }`}>
            Support Our Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example_43; 