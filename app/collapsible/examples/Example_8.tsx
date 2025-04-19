"use client"

import React, { useState } from 'react';
import Collapsible_8 from '../tsx/Collapsible_8';
import { FaCartShopping, FaReceipt, FaTruck, FaCreditCard, FaTrash, FaMinus, FaPlus, FaHeadphones, FaStopwatch, FaBriefcase } from 'react-icons/fa6';

const Example_8: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const cartSections = [
    {
      title: "Cart Items",
      icon: <FaCartShopping className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          {[
            { name: "Wireless Headphones", price: 129.99, quantity: 1, icon: <FaHeadphones className="text-gray-600 dark:text-gray-400" /> },
            { name: "Smart Watch", price: 199.99, quantity: 1, icon: <FaStopwatch className="text-gray-600 dark:text-gray-400" /> },
            { name: "Laptop Sleeve", price: 29.99, quantity: 2, icon: <FaBriefcase className="text-gray-600 dark:text-gray-400" /> }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:text-blue-500">
                    <FaMinus className="text-sm" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="p-1 hover:text-blue-500">
                    <FaPlus className="text-sm" />
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-600">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Order Summary",
      icon: <FaReceipt className="text-green-500" />,
      content: (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg space-y-3">
          <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
            <span className="font-medium">$389.96</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-400">Shipping</span>
            <span className="font-medium">$9.99</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-400">Tax</span>
            <span className="font-medium">$35.10</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total</span>
            <span>$435.05</span>
          </div>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      )
    },
    {
      title: "Shipping Details",
      icon: <FaTruck className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Delivery Address</h4>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="flex-1 px-3 py-2 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="City"
                  className="px-3 py-2 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="px-3 py-2 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Payment Method</h4>
            <div className="flex items-center gap-3 p-3 border dark:border-gray-700 rounded-lg">
              <FaCreditCard className="text-gray-400" />
              <div>
                <div className="font-medium">Credit Card</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">**** **** **** 4242</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Shipping Method</h4>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 border dark:border-gray-700 rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="shipping" className="text-blue-500" defaultChecked />
                  <div>
                    <div className="font-medium">Standard Shipping</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">3-5 business days</div>
                  </div>
                </div>
                <span className="font-medium">$9.99</span>
              </label>
              <label className="flex items-center justify-between p-3 border dark:border-gray-700 rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="shipping" className="text-blue-500" />
                  <div>
                    <div className="font-medium">Express Shipping</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">1-2 business days</div>
                  </div>
                </div>
                <span className="font-medium">$19.99</span>
              </label>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <FaCartShopping className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Shopping Cart
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
          {cartSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_8
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {React.Children.map(section.content.props.children, (child) => 
                      React.cloneElement(child, {
                        className: `${child.props.className} transition-colors hover:shadow-md`
                      })
                    )}
                  </div>
                </Collapsible_8>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_8; 