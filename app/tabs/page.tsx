"use client"
import React from 'react';
import Tab_1 from './_components/Tab_1';
import Tab_2 from './_components/Tab_2';
import Tab_3 from './_components/Tab_3';
import Tab_4 from './_components/Tab_4';
import Tab_5 from './_components/Tab_5';
import Tab_6 from './_components/Tab_6';
import Tab_7 from './_components/Tab_7';
import Tab_8 from './_components/Tab_8';
import Tab_9 from './_components/Tab_9';
import Tab_10 from './_components/Tab_10';
import Tab_11 from './_components/Tab_11';
import Tab_12 from './_components/Tab_12';
import Tab_13 from './_components/Tab_13';
import Tab_14 from './_components/Tab_14';
import Tab_15 from './_components/Tab_15';
import Tab_16 from './_components/Tab_16';
import Tab_17 from './_components/Tab_17';

const TabsPage = () => {
  const [activeTab, setActiveTab] = React.useState('1');

  const tabs = [
    { id: '1', label: 'Gradient', component: Tab_1 },
    { id: '2', label: 'Nature', component: Tab_2 },
    { id: '3', label: 'Glass', component: Tab_3 },
    { id: '4', label: 'Neon', component: Tab_4 },
    { id: '5', label: '3D', component: Tab_5 },
    { id: '6', label: 'Cosmic', component: Tab_6 },
    { id: '7', label: 'Liquid', component: Tab_7 },
    { id: '8', label: 'Forest', component: Tab_8 },
    { id: '9', label: 'Crystal', component: Tab_9 },
    { id: '10', label: 'Volcanic', component: Tab_10 },
    { id: '11', label: 'Steampunk', component: Tab_11 },
    { id: '12', label: 'Electric', component: Tab_12 },
    { id: '13', label: 'Magical', component: Tab_13 },
    { id: '14', label: 'Ice', component: Tab_14 },
    { id: '15', label: 'Sunset', component: Tab_15 },
    { id: '16', label: 'Ocean', component: Tab_16 },
    { id: '17', label: 'Cyberpunk', component: Tab_17 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Interactive Tabs Showcase</h1>
        
        {/* Individual Tabs Demo */}
        <div className="space-y-12">
          {tabs.map(({ id, label, component: TabComponent }) => (
            <div key={id} className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl text-white mb-4">{label} Theme</h2>
              <div className="flex gap-4">
                <TabComponent
                  label="Active"
                  isActive={true}
                  onClick={() => {}}
                />
                <TabComponent
                  label="Inactive"
                  isActive={false}
                  onClick={() => {}}
                />
                <TabComponent
                  label="Disabled"
                  isActive={false}
                  disabled={true}
                  onClick={() => {}}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="mt-16 bg-gray-800 rounded-xl p-6">
          <h2 className="text-2xl text-white mb-6">Interactive Example</h2>
          <div className="flex flex-wrap gap-2">
            {tabs.map(({ id, label, component: TabComponent }) => (
              <TabComponent
                key={id}
                label={label}
                isActive={activeTab === id}
                onClick={() => setActiveTab(id)}
              />
            ))}
          </div>
          <div className="mt-8 p-4 bg-gray-700 rounded-lg">
            <p className="text-white">
              Selected Tab: <span className="font-bold">{tabs.find(t => t.id === activeTab)?.label}</span>
            </p>
          </div>
        </div>

        {/* Documentation */}
        <div className="mt-16 bg-gray-800 rounded-xl p-6">
          <h2 className="text-2xl text-white mb-6">Usage</h2>
          <div className="prose prose-invert max-w-none">
            <p>Each tab component accepts the following props:</p>
            <ul>
              <li><code>label: string</code> - The text to display in the tab</li>
              <li><code>isActive?: boolean</code> - Whether the tab is currently active</li>
              <li><code>onClick?: () => void</code> - Click handler function</li>
              <li><code>disabled?: boolean</code> - Whether the tab is disabled</li>
            </ul>
            <p className="mt-4">Example usage:</p>
            <pre className="bg-gray-900 p-4 rounded-lg">
{`<Tab_1
  label="My Tab"
  isActive={true}
  onClick={() => handleClick()}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsPage; 