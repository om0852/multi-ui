"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_34";

const SwitchExample34 = () => {
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(false);
  const [oneClickBuy, setOneClickBuy] = useState(false);
  const [savePayment, setSavePayment] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shopping Preferences
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your shopping experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Order Updates */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Order Updates
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {orderUpdates
                    ? "Get notifications about your orders"
                    : "Order notifications disabled"}
                </p>
              </div>
              <Switch
                value={orderUpdates}
                onChange={setOrderUpdates}
              />
            </div>
            {orderUpdates && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Updates via email and push notifications
              </div>
            )}
          </div>

          {/* Price Alerts */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Price Drop Alerts
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {priceAlerts
                    ? "Get notified when prices drop"
                    : "Price alerts disabled"}
                </p>
              </div>
              <Switch
                value={priceAlerts}
                onChange={setPriceAlerts}
              />
            </div>
            {priceAlerts && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Monitoring prices for items in your wishlist
              </div>
            )}
          </div>

          {/* One-Click Buy */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  One-Click Purchase
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {oneClickBuy
                    ? "Quick checkout enabled"
                    : "Standard checkout process"}
                </p>
              </div>
              <Switch
                value={oneClickBuy}
                onChange={setOneClickBuy}
              />
            </div>
            {oneClickBuy && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Using default payment and shipping
              </div>
            )}
          </div>

          {/* Save Payment Info */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Save Payment Info
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {savePayment
                    ? "Payment methods saved securely"
                    : "Payment info not saved"}
                </p>
              </div>
              <Switch
                value={savePayment}
                onChange={setSavePayment}
              />
            </div>
            {savePayment && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Encrypted and secure storage
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <h4 className="mb-3 text-sm font-medium text-teal-900 dark:text-teal-100">
              Shopping Settings Overview
            </h4>
            <div className="space-y-2 text-sm text-teal-700 dark:text-teal-300">
              <p>• {orderUpdates ? "Order tracking enabled" : "Order tracking disabled"}</p>
              <p>• {priceAlerts ? "Price alerts active" : "No price monitoring"}</p>
              <p>• {oneClickBuy ? "One-click buy ready" : "Standard checkout"}</p>
              <p>• {savePayment ? "Payment info saved" : "Payment info not stored"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample34; 