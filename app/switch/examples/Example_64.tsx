"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_64";

const SwitchExample64 = () => {
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [oneClickBuy, setOneClickBuy] = useState(false);
  const [savePayment, setSavePayment] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shopping Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your shopping experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Order Updates */}
          <div className="rounded-lg border-2 border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Order Updates
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {orderUpdates
                    ? "Real-time order tracking"
                    : "Manual order checking"}
                </p>
              </div>
              <Switch
                checked={orderUpdates}
                onChange={setOrderUpdates}
              />
            </div>
            {orderUpdates && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Get notified about order status
              </div>
            )}
          </div>

          {/* Price Alerts */}
          <div className="rounded-lg border-2 border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Price Alerts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {priceAlerts
                    ? "Price drop notifications"
                    : "No price alerts"}
                </p>
              </div>
              <Switch
                checked={priceAlerts}
                onChange={setPriceAlerts}
              />
            </div>
            {priceAlerts && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Get notified when prices change
              </div>
            )}
          </div>

          {/* One-Click Buy */}
          <div className="rounded-lg border-2 border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  One-Click Buy
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {oneClickBuy
                    ? "Quick checkout enabled"
                    : "Standard checkout"}
                </p>
              </div>
              <Switch
                checked={oneClickBuy}
                onChange={setOneClickBuy}
              />
            </div>
            {oneClickBuy && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Purchase with a single click
              </div>
            )}
          </div>

          {/* Save Payment */}
          <div className="rounded-lg border-2 border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Save Payment
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {savePayment
                    ? "Store payment info"
                    : "Manual payment entry"}
                </p>
              </div>
              <Switch
                checked={savePayment}
                onChange={setSavePayment}
              />
            </div>
            {savePayment && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Securely save payment methods
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
            <h4 className="mb-3 text-sm font-medium text-emerald-900 dark:text-emerald-100">
              Shopping Preferences
            </h4>
            <div className="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
              <p>• {orderUpdates ? "Order updates on" : "Manual tracking"}</p>
              <p>• {priceAlerts ? "Price alerts on" : "No alerts"}</p>
              <p>• {oneClickBuy ? "One-click buy on" : "Standard checkout"}</p>
              <p>• {savePayment ? "Payment info saved" : "Manual entry"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample64; 