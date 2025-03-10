"use client"

import React, { useState } from 'react';
import Collapsible_34 from '../_components/Collapsible_34';
import { FaNewspaper, FaCalendarDay, FaGlobe, FaMasksTheater, FaMoneyBillWave } from 'react-icons/fa6';

const Example_34: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const newspaperSections = [
    {
      title: "BREAKING NEWS",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-3 border-b border-gray-700 pb-1">HISTORIC PEACE TREATY SIGNED</h4>
          <p className="mb-3">
            <span className="font-bold">GENEVA</span> — In a historic moment that promises to reshape international relations for decades to come, 
            representatives from twelve nations gathered yesterday at the Grand Palace to sign what experts are calling the most 
            comprehensive peace accord of the century.
          </p>
          <p className="mb-3">
            The treaty, which has been under negotiation for more than three years, addresses long-standing territorial disputes, 
            establishes new trade agreements, and creates a framework for ongoing diplomatic cooperation between former adversaries.
          </p>
          <p className="mb-3">
            &quot;This is a triumph of diplomacy over conflict,&quot; said Secretary-General Helena Reyes, who presided over the signing ceremony. 
            &quot;Today marks not an ending, but a beginning of a new chapter in our shared history.&quot;
          </p>
          <p className="mb-3">
            The accord includes provisions for demilitarized zones along contested borders, a phased reduction in tariffs over the next 
            five years, and the establishment of a multinational council to address future disputes.
          </p>
          <p className="italic text-sm text-right">
            Continued on Page A2
          </p>
        </div>
      )
    },
    {
      title: "WORLD NEWS",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-3 border-b border-gray-700 pb-1">ARCHAEOLOGICAL DISCOVERY REWRITES HISTORY</h4>
          <p className="mb-3">
            <span className="font-bold">CAIRO</span> — Archaeologists working in the Valley of the Kings have uncovered what they believe to be 
            evidence of an advanced civilization that predates previously known settlements by at least 2,000 years.
          </p>
          <p className="mb-3">
            The discovery, announced yesterday by the International Archaeological Institute, includes sophisticated tools, astronomical 
            charts, and architectural plans that suggest a level of scientific understanding previously thought impossible for that era.
          </p>
          <p className="mb-3">
            &quot;This fundamentally changes our understanding of human development,&quot; said Dr. Fatima El-Hashem, lead archaeologist on the project. 
            &quot;The artifacts show evidence of mathematical concepts we thought weren&apos;t discovered until millennia later.&quot;
          </p>
          <p className="mb-3">
            Among the most significant finds is a series of tablets containing what appears to be an early form of calculus, as well as 
            detailed maps of celestial bodies that show remarkable accuracy given the presumed technological limitations of the period.
          </p>
          <p className="italic text-sm text-right">
            Continued on Page B3
          </p>
        </div>
      )
    },
    {
      title: "BUSINESS & FINANCE",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-3 border-b border-gray-700 pb-1">MARKET SOARS ON INNOVATION BREAKTHROUGH</h4>
          <p className="mb-3">
            <span className="font-bold">NEW YORK</span> — Wall Street responded with unprecedented enthusiasm yesterday as Quantum Dynamics 
            unveiled its revolutionary energy storage technology, sending the company&apos;s stock price up 47% and lifting the entire market.
          </p>
          <p className="mb-3">
            The technology, which the company claims can store five times more energy than current battery systems at half the cost, 
            has been in development for over a decade and has now passed all regulatory hurdles for commercial deployment.
          </p>
          <p className="mb-3">
            &quot;This is not just an incremental improvement, but a paradigm shift,&quot; said financial analyst Morgan Chen. &quot;The implications 
            for renewable energy adoption, transportation, and consumer electronics are profound.&quot;
          </p>
          <p className="mb-3">
            Industry experts predict the technology could accelerate the transition away from fossil fuels by making renewable energy 
            storage economically competitive even without government subsidies.
          </p>
          <div className="border border-gray-700 p-3 my-3">
            <h5 className="font-bold text-center mb-2">MARKET SUMMARY</h5>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>DOW: <span className="text-green-700">+412.68</span></div>
              <div>NASDAQ: <span className="text-green-700">+187.24</span></div>
              <div>S&P 500: <span className="text-green-700">+53.71</span></div>
              <div>GOLD: <span className="text-red-700">-7.82</span></div>
              <div>OIL: <span className="text-green-700">+2.14</span></div>
              <div>BONDS: <span className="text-red-700">-0.05</span></div>
            </div>
          </div>
          <p className="italic text-sm text-right">
            Continued on Page C1
          </p>
        </div>
      )
    },
    {
      title: "ARTS & CULTURE",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-3 border-b border-gray-700 pb-1">LOST SHAKESPEARE PLAY AUTHENTICATED</h4>
          <p className="mb-3">
            <span className="font-bold">LONDON</span> — After years of painstaking analysis, scholars at Oxford University have confirmed 
            the authenticity of what appears to be a previously unknown play by William Shakespeare, discovered in a private collection 
            in rural England.
          </p>
          <p className="mb-3">
            The play, titled &quot;The Tempest&apos;s Heir,&quot; is believed to have been written between 1610 and 1611, making it one of the Bard&apos;s 
            final works. The manuscript consists of 42 pages written in a hand that experts have confirmed matches Shakespeare&apos;s known 
            handwriting samples.
          </p>
          <p className="mb-3">
            &quot;This is the literary equivalent of finding a new planet,&quot; said Professor Eleanor Whitman, who led the authentication team. 
            &quot;The play contains themes consistent with Shakespeare&apos;s later works, focusing on reconciliation and the passing of legacy 
            from one generation to the next.&quot;
          </p>
          <p className="mb-3">
            The Royal Shakespeare Company has announced plans to stage the first production of the play next spring, with casting 
            decisions expected to be announced in the coming months.
          </p>
          <p className="italic text-sm text-right">
            Continued on Page D4
          </p>
        </div>
      )
    }
  ];

  const currentDate = "TUESDAY, NOVEMBER 14, 1923";
  const price = "TWO CENTS";

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xs font-serif">
            VOL. CXII... No. 38,673
          </div>
          <div className="text-xs font-serif">
            {currentDate}
          </div>
          <div className="text-xs font-serif">
            {price}
          </div>
        </div>
        
        <div className="text-center border-b-2 border-t-2 border-gray-800 py-4 mb-6">
          <h1 className="text-5xl font-bold font-serif tracking-tight">THE DAILY CHRONICLE</h1>
          <div className="text-sm font-serif italic mt-1">&quot;All the News That&apos;s Fit to Print&quot;</div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold font-serif flex items-center gap-3">
            <FaNewspaper className="text-gray-700" />
            Today&apos;s Headlines
          </h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } shadow-md font-serif text-sm`}
          >
            {darkMode ? 'Reading Lamp On' : 'Reading Lamp Off'}
          </button>
        </div>

        <div className="space-y-6">
          {newspaperSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaGlobe className="text-gray-700" />}
                {index === 1 && <FaCalendarDay className="text-gray-700" />}
                {index === 2 && <FaMoneyBillWave className="text-gray-700" />}
                {index === 3 && <FaMasksTheater className="text-gray-700" />}
              </div>
              <div className="flex-1">
                <Collapsible_34
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_34>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_34; 