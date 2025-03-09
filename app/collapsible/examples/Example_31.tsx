"use client"

import React, { useState } from 'react';
import Collapsible_31 from '../_components/Collapsible_31';
import { FaPencil, FaBook, FaCalculator, FaFlask } from 'react-icons/fa6';

const Example_31: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const studyNotes = [
    {
      title: "Math Notes - Algebra",
      content: (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-bold underline mb-2">Quadratic Formula</h4>
            <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
              <p className="text-center font-bold">x = (-b ± √(b² - 4ac)) / 2a</p>
              <p className="mt-2">For any quadratic equation in the form: ax² + bx + c = 0</p>
              <ul className="list-disc pl-5 mt-2">
                <li>a, b, and c are constants</li>
                <li>a cannot equal zero</li>
                <li>If b² - 4ac &lt; 0, there are no real solutions</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold underline mb-2">Example Problems</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="font-medium">Solve: 2x² - 4x - 6 = 0</p>
                <p className="mt-2">a = 2, b = -4, c = -6</p>
                <p className="mt-1">x = (4 ± √(16 + 48)) / 4</p>
                <p className="mt-1">x = (4 ± √64) / 4</p>
                <p className="mt-1">x = (4 ± 8) / 4</p>
                <p className="mt-1">x = 3 or x = -1</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "History Notes - Ancient Rome",
      content: (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-bold underline mb-2">Key Dates</h4>
            <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
              <ul className="space-y-2">
                <li><span className="font-bold">753 BCE</span> - Traditional founding of Rome by Romulus</li>
                <li><span className="font-bold">509 BCE</span> - Establishment of the Roman Republic</li>
                <li><span className="font-bold">45 BCE</span> - Julius Caesar becomes dictator</li>
                <li><span className="font-bold">44 BCE</span> - Assassination of Julius Caesar</li>
                <li><span className="font-bold">27 BCE</span> - Augustus becomes first Roman Emperor</li>
                <li><span className="font-bold">476 CE</span> - Fall of the Western Roman Empire</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold underline mb-2">Important Figures</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="font-medium">Julius Caesar (100-44 BCE)</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Military general who expanded Roman territory</li>
                  <li>Crossed the Rubicon in 49 BCE, starting civil war</li>
                  <li>Implemented Julian calendar</li>
                  <li>Assassinated by senators led by Brutus and Cassius</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="font-medium">Augustus (63 BCE-14 CE)</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Born Octavian, grandnephew of Julius Caesar</li>
                  <li>First Roman Emperor, ruled for 41 years</li>
                  <li>Established Pax Romana (Roman Peace)</li>
                  <li>Transformed Rome from republic to empire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Science Notes - Chemistry",
      content: (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-bold underline mb-2">Periodic Table Groups</h4>
            <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
              <ul className="space-y-2">
                <li><span className="font-bold">Group 1:</span> Alkali Metals - Highly reactive, soft metals</li>
                <li><span className="font-bold">Group 2:</span> Alkaline Earth Metals - Less reactive than Group 1</li>
                <li><span className="font-bold">Groups 3-12:</span> Transition Metals - Good conductors, form colored compounds</li>
                <li><span className="font-bold">Group 17:</span> Halogens - Highly reactive non-metals</li>
                <li><span className="font-bold">Group 18:</span> Noble Gases - Mostly unreactive, stable electron configuration</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold underline mb-2">Chemical Bonding</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="font-medium">Ionic Bonding</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Transfer of electrons between metals and non-metals</li>
                  <li>Forms charged ions that attract each other</li>
                  <li>Example: NaCl (table salt)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="font-medium">Covalent Bonding</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Sharing of electrons between non-metals</li>
                  <li>Can be single, double, or triple bonds</li>
                  <li>Example: H₂O (water), O₂ (oxygen)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "English Notes - Shakespeare",
      content: (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-bold underline mb-2">Major Works</h4>
            <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
              <ul className="space-y-2">
                <li><span className="font-bold">Tragedies:</span> Hamlet, Macbeth, Romeo and Juliet, Othello, King Lear</li>
                <li><span className="font-bold">Comedies:</span> A Midsummer Night's Dream, Much Ado About Nothing, Twelfth Night</li>
                <li><span className="font-bold">Histories:</span> Richard III, Henry V, Julius Caesar</li>
                <li><span className="font-bold">Sonnets:</span> 154 sonnets published in 1609</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold underline mb-2">Famous Quotes</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 italic">
                <p>"To be, or not to be, that is the question."</p>
                <p className="text-right text-sm mt-1">- Hamlet</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 italic">
                <p>"All the world's a stage, and all the men and women merely players."</p>
                <p className="text-right text-sm mt-1">- As You Like It</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 italic">
                <p>"The course of true love never did run smooth."</p>
                <p className="text-right text-sm mt-1">- A Midsummer Night's Dream</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FaPencil className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
            Study Notes
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
          {studyNotes.map((note, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaCalculator className="text-red-500" />}
                {index === 1 && <FaBook className="text-blue-500" />}
                {index === 2 && <FaFlask className="text-green-500" />}
                {index === 3 && <FaPencil className="text-purple-500" />}
              </div>
              <div className="flex-1">
                <Collapsible_31
                  title={note.title}
                  defaultOpen={index === 0}
                >
                  {note.content}
                </Collapsible_31>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_31; 