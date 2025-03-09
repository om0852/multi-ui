"use client"

import React, { useState } from 'react';
import Collapsible_29 from '../_components/Collapsible_29';
import { FaSeedling, FaWater, FaSun, FaLeaf } from 'react-icons/fa6';

const Example_29: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const gardeningTips = [
    {
      title: "Spring Planting Guide",
      content: (
        <div className="space-y-4">
          <p>Spring is the perfect time to start your garden. As the soil warms up and the risk of frost decreases, you can begin planting a variety of vegetables, flowers, and herbs.</p>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
              <FaSeedling />
              Recommended Spring Vegetables
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lettuce (plant every 2 weeks for continuous harvest)</li>
              <li>Peas (provide support for climbing varieties)</li>
              <li>Radishes (quick growing, ready in 3-4 weeks)</li>
              <li>Spinach (prefers cooler temperatures)</li>
              <li>Carrots (loosen soil deeply before planting)</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
              <FaLeaf />
              Spring Planting Tips
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prepare soil by adding compost and removing weeds</li>
              <li>Start heat-loving plants indoors (tomatoes, peppers)</li>
              <li>Harden off seedlings before transplanting outdoors</li>
              <li>Plant in succession for continuous harvests</li>
              <li>Protect young plants from late frosts with covers</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Summer Garden Maintenance",
      content: (
        <div className="space-y-4">
          <p>Summer brings heat and longer days, which means your garden will need extra attention to thrive during this productive season.</p>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
              <FaWater />
              Watering Guidelines
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Water deeply and less frequently to encourage deep root growth</li>
              <li>Water in the early morning to reduce evaporation</li>
              <li>Use drip irrigation or soaker hoses for efficient watering</li>
              <li>Apply mulch to retain soil moisture and reduce weeds</li>
              <li>Container plants may need daily watering during hot periods</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
              <FaSun />
              Heat Protection
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide shade for sensitive plants during peak sun hours</li>
              <li>Use row covers or shade cloth for leafy greens</li>
              <li>Avoid fertilizing during extreme heat</li>
              <li>Monitor for signs of heat stress (wilting, yellowing)</li>
              <li>Consider afternoon shade for new transplants</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Organic Pest Control",
      content: (
        <div className="space-y-4">
          <p>Managing pests organically helps maintain a healthy garden ecosystem while avoiding harmful chemicals.</p>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Preventive Measures</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Plant diverse species to avoid pest concentration</li>
              <li>Rotate crops annually to disrupt pest cycles</li>
              <li>Attract beneficial insects with flowering plants</li>
              <li>Use row covers for vulnerable young plants</li>
              <li>Keep garden clean of debris and fallen fruit</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Natural Remedies</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Neem oil spray for multiple pests (mix 2 tsp neem oil, 1 tsp mild soap, 1 quart water)</li>
              <li>Diatomaceous earth for crawling insects (apply when dry)</li>
              <li>Garlic spray for aphids (blend 4 cloves with 2 cups water, strain, spray)</li>
              <li>Companion planting (marigolds repel nematodes, basil deters flies)</li>
              <li>Handpick larger pests like caterpillars and beetles</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Composting Basics",
      content: (
        <div className="space-y-4">
          <p>Composting transforms kitchen scraps and yard waste into nutrient-rich soil amendment for your garden.</p>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">What to Compost</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700">Green Materials (Nitrogen)</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fruit and vegetable scraps</li>
                  <li>Coffee grounds and filters</li>
                  <li>Fresh grass clippings</li>
                  <li>Plant trimmings</li>
                  <li>Eggshells (crushed)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700">Brown Materials (Carbon)</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Dry leaves</li>
                  <li>Straw or hay</li>
                  <li>Shredded paper</li>
                  <li>Cardboard</li>
                  <li>Wood chips</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Composting Tips</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Aim for a ratio of 3 parts brown to 1 part green materials</li>
              <li>Keep compost moist but not soggy (like a wrung-out sponge)</li>
              <li>Turn pile regularly to aerate and speed decomposition</li>
              <li>Chop larger materials into smaller pieces</li>
              <li>Finished compost should be dark, crumbly, and earthy-smelling</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-green-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-green-700">
            <FaSeedling className="text-green-600" />
            Gardening Guide
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } shadow-md`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {gardeningTips.map((tip, index) => (
            <Collapsible_29
              key={index}
              title={tip.title}
              defaultOpen={index === 0}
            >
              {tip.content}
            </Collapsible_29>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_29; 