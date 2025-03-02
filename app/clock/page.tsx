'use client';
import React from 'react';
import Clock_21 from './_components/Clock_21';
import Clock_22 from './_components/Clock_22';
import Clock_23 from './_components/Clock_23';
import Clock_24 from './_components/Clock_24';
import Clock_25 from './_components/Clock_25';
import Clock_26 from './_components/Clock_36';
import Clock_27 from './_components/Clock_37';
import Clock_28 from './_components/Clock_38';
import Clock_29 from './_components/Clock_39';
import Clock_30 from './_components/Clock_40';
import Clock_31 from './_components/Clock_31';
import Clock_32 from './_components/Clock_32';
import Clock_33 from './_components/Clock_33';
import Clock_34 from './_components/Clock_34';
import Clock_35 from './_components/Clock_35';

const ClockPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Clock Collection
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Row */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Neon Gradient</h2>
            <div className="flex justify-center">
              <Clock_21 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Flip Display</h2>
            <div className="flex justify-center">
              <Clock_22 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Matrix Style</h2>
            <div className="flex justify-center">
              <Clock_23 />
            </div>
          </div>

          {/* Second Row */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">LCD Display</h2>
            <div className="flex justify-center">
              <Clock_24 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Holographic</h2>
            <div className="flex justify-center">
              <Clock_25 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Retro Gaming</h2>
            <div className="flex justify-center">
              <Clock_26 />
            </div>
          </div>

          {/* Third Row */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Glass Morphism</h2>
            <div className="flex justify-center">
              <Clock_27 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">HUD Interface</h2>
            <div className="flex justify-center">
              <Clock_28 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Circular Progress</h2>
            <div className="flex justify-center">
              <Clock_29 />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">3D Perspective</h2>
            <div className="flex justify-center">
              <Clock_30 />
            </div>
          </div>

          {/* New clocks */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Slide Animation</h2>
            <div className="flex justify-center">
              <Clock_31 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Rotate Fade</h2>
            <div className="flex justify-center">
              <Clock_32 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">3D Flip Card</h2>
            <div className="flex justify-center">
              <Clock_33 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Bounce Scale</h2>
            <div className="flex justify-center">
              <Clock_34 />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Wave Ripple</h2>
            <div className="flex justify-center">
              <Clock_35 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockPage;
