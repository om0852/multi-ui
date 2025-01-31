"use client"
import React from "react";
import Counter_21 from "./_components/Counter_31";
import Counter_22 from "./_components/Counter_32";
import Counter_23 from "./_components/Counter_33";
import Counter_24 from "./_components/Counter_34";
import Counter_25 from "./_components/Counter_35";
// import AnimatedCounter from "./_components/Counter_2";
// import BouncyCounter from "./_components/Counter_3";
// import FlipCounter from "./_components/Counter_4";
// import FlipPageCounter from "./_components/Counter_5";
// import SlideCounter from "./_components/Counter_6";
// import UniqueSlideCounter from "./_components/Counter_10";

const CounterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Counter Components
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A collection of beautifully designed counter components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Neon Counter */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Neon Counter
            </h2>
            <Counter_21
              initialValue={5}
              min={0}
              max={20}
              step={1}
              className="w-full"
            />
          </div>

          {/* Neumorphic Counter */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Neumorphic Counter
            </h2>
            <Counter_22
              initialValue={10}
              min={0}
              max={50}
              step={5}
              className="w-full"
            />
          </div>

          {/* Glass Counter */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Glass Counter
            </h2>
            <Counter_23
              initialValue={25}
              min={0}
              max={100}
              step={25}
              className="w-full"
            />
          </div>

          {/* Retro Gaming Counter */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Retro Gaming Counter
            </h2>
            <Counter_24
              initialValue={1}
              min={1}
              max={10}
              step={1}
              className="w-full"
            />
          </div>

          {/* Sci-fi HUD Counter */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Sci-fi HUD Counter
            </h2>
            <Counter_25
              initialValue={50}
              min={0}
              max={200}
              step={10}
              className="w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Customizable
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each counter can be customized with different min, max, and step values
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Animated
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Smooth animations and transitions using Framer Motion
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Responsive
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fully responsive design that works on all screen sizes
              </p>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Usage Example
          </h2>
          <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300">
              {`import Counter_21 from "./components/Counter_21";

// Basic usage
<Counter_21 />

// With custom props
<Counter_21
  initialValue={5}
  min={0}
  max={20}
  step={1}
  className="w-full"
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
