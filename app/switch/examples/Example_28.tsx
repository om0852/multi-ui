"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_28";

const SwitchExample28 = () => {
  const [oneClickBuy, setOneClickBuy] = useState(false);
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [savePayment, setSavePayment] = useState(true);
  const [autoApplyCoupons, setAutoApplyCoupons] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Header Section */}
      <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
        <h2 className="mb-4 text-lg font-semibold text-orange-700 dark:text-orange-400">
          Shopping Preferences
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Customize your shopping experience and payment settings.
        </p>
      </div>

      {/* Main Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Shopping Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-orange-600 dark:text-orange-400">
            Shopping Experience
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  One-Click Buy
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable instant purchases
                </p>
              </div>
              <Switch
                value={oneClickBuy}
                onChange={setOneClickBuy}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Price Alerts
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get notified of price drops
                </p>
              </div>
              <Switch
                value={priceAlerts}
                onChange={setPriceAlerts}
              />
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-orange-600 dark:text-orange-400">
            Payment Options
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Save Payment Info
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Securely store payment details
                </p>
              </div>
              <Switch
                value={savePayment}
                onChange={setSavePayment}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Auto-Apply Coupons
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Find and apply best discounts
                </p>
              </div>
              <Switch
                value={autoApplyCoupons}
                onChange={setAutoApplyCoupons}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Summary */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-orange-600 dark:text-orange-400">
          Active Shopping Features
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Checkout Experience
            </h5>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              {oneClickBuy && <li>• One-click purchasing enabled</li>}
              {savePayment && <li>• Saved payment methods</li>}
              {autoApplyCoupons && <li>• Automatic coupon application</li>}
            </ul>
          </div>

          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Shopping Efficiency
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {[oneClickBuy, savePayment, autoApplyCoupons].filter(Boolean).length >= 2
                ? "Optimized for fast checkout"
                : "Standard checkout process"}
            </p>
            {priceAlerts && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                Price monitoring active
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample28; 