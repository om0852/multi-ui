"use client"

import React, { useState } from 'react';
import Collapsible_15 from '../_components/Collapsible_15';
import { FaWallet, FaMoneyBill, FaChartPie, FaArrowUp, FaArrowDown, FaCreditCard, FaCircleCheck } from 'react-icons/fa6';

const Example_15: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const financeSections = [
    {
      title: "Account Overview",
      icon: <FaWallet className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-blue-100">Total Balance</p>
                <h3 className="text-3xl font-bold">$12,567.89</h3>
              </div>
              <FaWallet className="text-4xl text-blue-200" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <FaArrowUp className="inline text-green-300 mb-1" />
                <p className="text-sm text-blue-100">Income</p>
                <p className="font-bold">$3,450</p>
              </div>
              <div>
                <FaArrowDown className="inline text-red-300 mb-1" />
                <p className="text-sm text-blue-100">Expenses</p>
                <p className="font-bold">$2,780</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaCreditCard className="text-purple-500" />
                <span className="font-medium">Credit Card</span>
              </div>
              <div className="text-2xl font-bold">$4,250</div>
              <div className="text-sm text-gray-500">Available Credit</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaMoneyBill className="text-green-500" />
                <span className="font-medium">Savings</span>
              </div>
              <div className="text-2xl font-bold">$8,317</div>
              <div className="text-sm text-gray-500">Total Saved</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Recent Transactions",
      icon: <FaMoneyBill className="text-green-500" />,
      content: (
        <div className="space-y-3">
          {[
            { name: "Grocery Store", amount: -82.45, date: "Today", category: "Food" },
            { name: "Salary Deposit", amount: 3450.00, date: "Yesterday", category: "Income" },
            { name: "Electric Bill", amount: -124.30, date: "2 days ago", category: "Utilities" },
            { name: "Online Shopping", amount: -65.99, date: "3 days ago", category: "Shopping" }
          ].map((transaction, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  transaction.amount > 0 ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
                }`}>
                  {transaction.amount > 0 ? (
                    <FaArrowUp className="text-green-500" />
                  ) : (
                    <FaArrowDown className="text-red-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{transaction.name}</h4>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${
                  transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Budget Tracking",
      icon: <FaChartPie className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          {[
            { category: "Food & Dining", spent: 850, budget: 1000, color: "blue" },
            { category: "Transportation", spent: 320, budget: 400, color: "green" },
            { category: "Entertainment", spent: 180, budget: 200, color: "purple" },
            { category: "Shopping", spent: 450, budget: 500, color: "yellow" }
          ].map((budget, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="font-medium">{budget.category}</h4>
                  <p className="text-sm text-gray-500">
                    ${budget.spent} of ${budget.budget}
                  </p>
                </div>
                <div className="text-sm font-medium">
                  {Math.round((budget.spent / budget.budget) * 100)}%
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${budget.color}-500`}
                  style={{ width: `${(budget.spent / budget.budget) * 100}%` }}
                ></div>
              </div>
              {budget.spent > budget.budget * 0.9 && (
                <div className="mt-2 text-sm text-yellow-500 flex items-center gap-1">
                  <FaCircleCheck />
                  <span>Near budget limit</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <FaWallet className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Financial Dashboard
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {financeSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_15
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className={`${
                    index === 0 ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4' : 'space-y-3 sm:space-y-4'
                  }`}>
                    {React.Children.map(section.content.props.children, (child) => 
                      React.cloneElement(child, {
                        className: `${child.props.className} transition-colors hover:shadow-md`
                      })
                    )}
                  </div>
                </Collapsible_15>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_15; 