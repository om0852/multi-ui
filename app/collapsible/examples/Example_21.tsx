"use client"

import React, { useState } from 'react';
import Collapsible_21 from '../_components/Collapsible_21';
import { FaWallet, FaMoneyBill, FaChartPie, FaArrowUp, FaArrowDown, FaCreditCard, FaCartShopping, FaPlane } from 'react-icons/fa6';

const Example_21: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const financeSections = [
    {
      title: "Account Overview",
      icon: <FaWallet className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm text-gray-500 dark:text-gray-400">Total Balance</h4>
              <div className="text-2xl font-bold mt-1">$12,458.32</div>
              <div className="flex items-center gap-1 text-sm text-green-500 mt-2">
                <FaArrowUp />
                <span>2.3% this month</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm text-gray-500 dark:text-gray-400">Monthly Spending</h4>
              <div className="text-2xl font-bold mt-1">$3,245.87</div>
              <div className="flex items-center gap-1 text-sm text-red-500 mt-2">
                <FaArrowDown />
                <span>1.5% vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Quick Actions</h4>
            <div className="grid grid-cols-3 gap-3">
              <button className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center hover:bg-blue-100 dark:hover:bg-blue-900/40">
                <FaMoneyBill className="text-blue-500 mx-auto mb-1" />
                <span className="text-sm">Transfer</span>
              </button>
              <button className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center hover:bg-purple-100 dark:hover:bg-purple-900/40">
                <FaCreditCard className="text-purple-500 mx-auto mb-1" />
                <span className="text-sm">Pay Bills</span>
              </button>
              <button className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center hover:bg-green-100 dark:hover:bg-green-900/40">
                <FaWallet className="text-green-500 mx-auto mb-1" />
                <span className="text-sm">Save</span>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Recent Transactions",
      icon: <FaMoneyBill className="text-blue-500" />,
      content: (
        <div className="space-y-3">
          {[
            { title: "Grocery Store", amount: -82.45, date: "Today", icon: <FaCartShopping /> },
            { title: "Salary Deposit", amount: 3500.00, date: "Yesterday", icon: <FaMoneyBill /> },
            { title: "Flight Tickets", amount: -425.00, date: "Mar 15", icon: <FaPlane /> },
            { title: "Online Shopping", amount: -129.99, date: "Mar 14", icon: <FaCartShopping /> }
          ].map((transaction, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  transaction.amount > 0 ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
                }`}>
                  {transaction.icon}
                </div>
                <div>
                  <h4 className="font-medium">{transaction.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
                </div>
              </div>
              <div className={`font-medium ${
                transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
          <button className="w-full text-center text-blue-500 hover:text-blue-600 text-sm font-medium">
            View All Transactions
          </button>
        </div>
      )
    },
    {
      title: "Budget Analysis",
      icon: <FaChartPie className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">Monthly Budget</h4>
              <span className="text-sm text-gray-500">$5,000.00</span>
            </div>
            <div className="space-y-3">
              {[
                { category: "Housing", spent: 1800, budget: 2000, color: "blue" },
                { category: "Food", spent: 600, budget: 800, color: "green" },
                { category: "Transportation", spent: 400, budget: 500, color: "yellow" },
                { category: "Entertainment", spent: 300, budget: 400, color: "purple" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.category}</span>
                    <span className="text-gray-500">${item.spent} / ${item.budget}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className={`bg-${item.color}-500 h-full`} style={{ 
                      width: `${(item.spent / item.budget) * 100}%` 
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Savings Goals</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Emergency Fund</span>
                  <span>75% Complete</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Vacation Fund</span>
                  <span>45% Complete</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaWallet className={darkMode ? 'text-green-400' : 'text-green-600'} />
            Financial Dashboard
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-sm`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {financeSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_21
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_21>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_21; 