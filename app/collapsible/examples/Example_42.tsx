"use client"

import React, { useState } from 'react';
import Collapsible_42 from '../_components/Collapsible_42';
import { FaDiamond, FaWineGlass, FaGem, FaCrown } from 'react-icons/fa6';

const Example_42: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const luxuryProducts = [
    {
      title: "Exquisite Timepieces",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
              <h4 className="text-yellow-600 font-serif text-lg mb-2">Chronograph Masterpiece</h4>
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
                <span className="text-5xl">⌚</span>
              </div>
              <p className="text-yellow-600 font-light">Hand-crafted with precision, our signature timepiece features 18k gold casing and Swiss movement.</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-yellow-500 font-serif">$12,500</span>
                <button className="bg-yellow-800 bg-opacity-30 text-yellow-500 px-3 py-1 rounded border border-yellow-700 text-sm">
                  Reserve
                </button>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
              <h4 className="text-yellow-600 font-serif text-lg mb-2">Diamond Encrusted Collection</h4>
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
                <span className="text-5xl">⌚</span>
              </div>
              <p className="text-yellow-600 font-light">Adorned with 142 VVS diamonds and sapphire crystal, a statement of unparalleled elegance.</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-yellow-500 font-serif">$28,750</span>
                <button className="bg-yellow-800 bg-opacity-30 text-yellow-500 px-3 py-1 rounded border border-yellow-700 text-sm">
                  Reserve
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-black bg-opacity-30 p-4 rounded border border-yellow-700">
            <h4 className="text-yellow-600 font-serif text-lg mb-2">Craftsmanship</h4>
            <p className="text-yellow-600 font-light leading-relaxed">
              Each timepiece is meticulously crafted by our master horologists with decades of experience. 
              The movement components are hand-finished and assembled in our Swiss atelier, 
              requiring over 500 hours of work per piece. Our commitment to excellence ensures 
              that each watch is not merely an accessory, but a legacy to be passed through generations.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Fine Jewelry Collection",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
              <h4 className="text-yellow-600 font-serif text-lg mb-2">Sapphire Necklace</h4>
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
                <span className="text-4xl">💎</span>
              </div>
              <p className="text-yellow-600 font-light text-sm">Ceylon blue sapphire pendant with diamond halo on 18k white gold chain.</p>
              <div className="mt-3 text-center">
                <span className="text-yellow-500 font-serif">$8,900</span>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
              <h4 className="text-yellow-600 font-serif text-lg mb-2">Diamond Earrings</h4>
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
                <span className="text-4xl">💎</span>
              </div>
              <p className="text-yellow-600 font-light text-sm">Pear-shaped diamond drop earrings, 3.2 carats total, set in platinum.</p>
              <div className="mt-3 text-center">
                <span className="text-yellow-500 font-serif">$15,200</span>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
              <h4 className="text-yellow-600 font-serif text-lg mb-2">Ruby Ring</h4>
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
                <span className="text-4xl">💍</span>
              </div>
              <p className="text-yellow-600 font-light text-sm">Burmese ruby, 2.5 carats, surrounded by pavé diamonds on 18k rose gold band.</p>
              <div className="mt-3 text-center">
                <span className="text-yellow-500 font-serif">$22,750</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black bg-opacity-30 p-4 rounded border border-yellow-700">
            <h4 className="text-yellow-600 font-serif text-lg mb-2">Bespoke Services</h4>
            <p className="text-yellow-600 font-light leading-relaxed">
              Our atelier offers exclusive bespoke jewelry design services for our distinguished clientele. 
              Begin with a private consultation with our master jeweler to create a unique piece that 
              reflects your personal style and story. From concept sketches to the final masterpiece, 
              experience the art of custom jewelry creation at its finest.
            </p>
            <div className="mt-3 flex justify-end">
              <button className="bg-yellow-800 bg-opacity-30 text-yellow-500 px-4 py-2 rounded border border-yellow-700 text-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Premium Spirits",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
              <h4 className="text-yellow-600 font-serif text-lg mb-2">Aged Single Malt</h4>
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
                <span className="text-5xl">🥃</span>
              </div>
              <p className="text-yellow-600 font-light">50-year aged single malt from our private Highland distillery, finished in rare Oloroso sherry casks.</p>
              <div className="mt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-600 text-sm">Region</span>
                  <span className="text-yellow-500">Scottish Highlands</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-600 text-sm">Age</span>
                  <span className="text-yellow-500">50 Years</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-600 text-sm">ABV</span>
                  <span className="text-yellow-500">46.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 text-sm">Limited</span>
                  <span className="text-yellow-500">175 Bottles</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-yellow-500 font-serif text-xl">$12,500 per bottle</span>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
              <h4 className="text-yellow-600 font-serif text-lg mb-2">Vintage Champagne</h4>
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
                <span className="text-5xl">🍾</span>
              </div>
              <p className="text-yellow-600 font-light">Prestige cuvée from exceptional harvest years, aged on lees for over a decade in our historic chalk cellars.</p>
              <div className="mt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-600 text-sm">Region</span>
                  <span className="text-yellow-500">Champagne, France</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-600 text-sm">Vintage</span>
                  <span className="text-yellow-500">2008</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-600 text-sm">Grapes</span>
                  <span className="text-yellow-500">Chardonnay, Pinot Noir</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 text-sm">Rating</span>
                  <span className="text-yellow-500">98 Points</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-yellow-500 font-serif text-xl">$950 per bottle</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black bg-opacity-30 p-4 rounded border border-yellow-700">
            <h4 className="text-yellow-600 font-serif text-lg mb-2">Private Cellar Access</h4>
            <p className="text-yellow-600 font-light leading-relaxed">
              Our distinguished members enjoy exclusive access to our private cellar collection, 
              featuring rare vintages and limited releases not available to the general public. 
              Membership includes quarterly tastings guided by our master sommelier, priority 
              allocation of limited releases, and personalized storage in our temperature-controlled vault.
            </p>
            <div className="mt-3 flex justify-end">
              <button className="bg-yellow-800 bg-opacity-30 text-yellow-500 px-4 py-2 rounded border border-yellow-700 text-sm">
                Inquire About Membership
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Bespoke Experiences",
      content: (
        <div className="space-y-4">
          <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
            <h4 className="text-yellow-600 font-serif text-lg mb-2">Private Island Retreat</h4>
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
              <span className="text-5xl">🏝️</span>
            </div>
            <p className="text-yellow-600 font-light leading-relaxed">
              Escape to our exclusive private island in the Maldives, accessible only by private seaplane. 
              Your personal villa features panoramic ocean views, infinity pool, and dedicated staff including 
              a private chef, butler, and wellness specialist. Enjoy bespoke experiences from sunset cruises 
              to underwater dining in our glass-enclosed restaurant beneath the coral reef.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <span className="text-yellow-600 text-sm block">Duration</span>
                <span className="text-yellow-500">7 nights minimum</span>
              </div>
              <div>
                <span className="text-yellow-600 text-sm block">Accommodates</span>
                <span className="text-yellow-500">Up to 8 guests</span>
              </div>
              <div>
                <span className="text-yellow-500 font-serif text-xl">$45,000 per night</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black bg-opacity-50 p-4 rounded border border-yellow-700">
            <h4 className="text-yellow-600 font-serif text-lg mb-2">Private Jet World Tour</h4>
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-3">
              <span className="text-5xl">✈️</span>
            </div>
            <p className="text-yellow-600 font-light leading-relaxed">
              Embark on a curated journey to the world&apos;s most exclusive destinations aboard our luxury private jet. 
              This 21-day expedition includes accommodations at legendary properties, private access to cultural 
              treasures after hours, and dining experiences crafted by Michelin-starred chefs. Your journey is 
              accompanied by experts including an art historian, naturalist, and professional photographer.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <span className="text-yellow-600 text-sm block">Duration</span>
                <span className="text-yellow-500">21 days</span>
              </div>
              <div>
                <span className="text-yellow-600 text-sm block">Destinations</span>
                <span className="text-yellow-500">12 countries</span>
              </div>
              <div>
                <span className="text-yellow-500 font-serif text-xl">$195,000 per person</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black bg-opacity-30 p-4 rounded border border-yellow-700">
            <h4 className="text-yellow-600 font-serif text-lg mb-2">Bespoke Concierge</h4>
            <p className="text-yellow-600 font-light leading-relaxed">
              Our dedicated concierge team specializes in creating extraordinary moments tailored to your desires. 
              From arranging private performances by world-renowned artists to securing impossible reservations, 
              our network of connections ensures that your experience exceeds all expectations. Each request is 
              handled with the utmost discretion and attention to detail.
            </p>
            <div className="mt-3 flex justify-end">
              <button className="bg-yellow-800 bg-opacity-30 text-yellow-500 px-4 py-2 rounded border border-yellow-700 text-sm">
                Contact Private Client Services
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen p-8" style={{ 
      background: darkMode ? 'linear-gradient(135deg, #0a0a0a, #1a1a1a)' : 'linear-gradient(135deg, #f8f5f0, #f0ebe0)'
    }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif flex items-center gap-3 text-yellow-600">
            <FaDiamond className="text-yellow-500" />
            <span className="tracking-wider">LUXE COLLECTION</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-black bg-opacity-50 text-yellow-500 border border-yellow-700 font-serif text-sm"
          >
            {darkMode ? 'Light Ambiance' : 'Dark Ambiance'}
          </button>
        </div>

        <div className="space-y-6">
          {luxuryProducts.map((product, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaCrown className="text-yellow-500" />}
                {index === 1 && <FaGem className="text-yellow-500" />}
                {index === 2 && <FaWineGlass className="text-yellow-500" />}
                {index === 3 && <FaDiamond className="text-yellow-500" />}
              </div>
              <div className="flex-1">
                <Collapsible_42
                  title={product.title}
                  defaultOpen={index === 0}
                >
                  {product.content}
                </Collapsible_42>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_42; 