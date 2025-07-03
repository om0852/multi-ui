
const Collapsible_18 = () => {
  const [expandedSections, setExpandedSections] = useState({
    account: true,
    notifications: false,
    privacy: false,
    billing: false,
    appearance: true,
    language: false
  });

  const [settings, setSettings] = useState({
    theme: 'light',
    emailNotifications: true,
    pushNotifications: false,
    twoFactor: false,
    autoSave: true,
    language: 'en',
    timezone: 'UTC',
    currency: 'USD'
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ja', name: '日本語' }
  ];

  const timezones = [
    { value: 'UTC', label: 'UTC (Coordinated Universal Time)' },
    { value: 'EST', label: 'EST (Eastern Time)' },
    { value: 'PST', label: 'PST (Pacific Time)' },
    { value: 'CET', label: 'CET (Central European Time)' },
    { value: 'JST', label: 'JST (Japan Standard Time)' }
  ];

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      
      {/* Account Settings */}
      <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('account')}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center">
            <FiUser className="mr-3 text-blue-600" />
            <span className="font-medium">Account Settings</span>
          </div>
          {expandedSections.account ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.account && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="johndoe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Update Profile
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Appearance Settings */}
      <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('appearance')}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center">
            {settings.theme === 'dark' ? (
              <FiMoon className="mr-3 text-purple-600" />
            ) : (
              <FiSun className="mr-3 text-yellow-500" />
            )}
            <span className="font-medium">Appearance</span>
          </div>
          {expandedSections.appearance ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.appearance && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleSettingChange('theme', 'light')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        settings.theme === 'light'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <FiSun className="mr-2 text-yellow-500" />
                        <span>Light</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Light theme with white background</p>
                    </button>
                    <button
                      onClick={() => handleSettingChange('theme', 'dark')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        settings.theme === 'dark'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <FiMoon className="mr-2 text-purple-600" />
                        <span>Dark</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Dark theme with dark background</p>
                    </button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={settings.autoSave}
                      onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                    />
                    <span className="ml-2 text-sm text-gray-700">Auto-save changes</span>
                  </label>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Notifications Settings */}
      <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('notifications')}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center">
            <FiBell className="mr-3 text-green-600" />
            <span className="font-medium">Notifications</span>
          </div>
          {expandedSections.notifications ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.notifications && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                      <p className="text-xs text-gray-500">Receive email notifications</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        name="emailNotifications"
                        id="emailNotifications"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        checked={settings.emailNotifications}
                        onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                      />
                      <label
                        htmlFor="emailNotifications"
                        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                          settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      ></label>
                    </div>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Push Notifications</span>
                      <p className="text-xs text-gray-500">Receive push notifications</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        name="pushNotifications"
                        id="pushNotifications"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        checked={settings.pushNotifications}
                        onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                      />
                      <label
                        htmlFor="pushNotifications"
                        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                          settings.pushNotifications ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      ></label>
                    </div>
                  </label>
                </div>
                
                <div className="pt-2">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Notification Preferences</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">New features and updates</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">Security alerts</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">Newsletter</span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Privacy Settings */}
      <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('privacy')}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center">
            <FiShield className="mr-3 text-red-600" />
            <span className="font-medium">Privacy & Security</span>
          </div>
          {expandedSections.privacy ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.privacy && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Two-Factor Authentication</span>
                      <p className="text-xs text-gray-500">Add an extra layer of security</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        name="twoFactor"
                        id="twoFactor"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        checked={settings.twoFactor}
                        onChange={(e) => handleSettingChange('twoFactor', e.target.checked)}
                      />
                      <label
                        htmlFor="twoFactor"
                        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                          settings.twoFactor ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      ></label>
                    </div>
                  </label>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Data & Privacy</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="data-analytics"
                          name="data-analytics"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="data-analytics" className="font-medium text-gray-700">
                          Allow data analytics
                        </label>
                        <p className="text-gray-500">Help us improve our services with anonymous usage data</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="personalized-ads"
                          name="personalized-ads"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="personalized-ads" className="font-medium text-gray-700">
                          Personalized ads
                        </label>
                        <p className="text-gray-500">See more relevant ads based on your activity</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Request data export
                  </button>
                  <span className="mx-2 text-gray-300">•</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Delete account
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Billing Settings */}
      <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('billing')}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center">
            <FiCreditCard className="mr-3 text-green-600" />
            <span className="font-medium">Billing & Plans</span>
          </div>
          {expandedSections.billing ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.billing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-blue-800">Premium Plan</h4>
                      <p className="text-sm text-blue-700">$19.99/month • Next billing date: Jan 15, 2024</p>
                    </div>
                    <button className="px-3 py-1 text-sm bg-white text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50">
                      Change Plan
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Payment Method</h4>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Visa ending in 4242</div>
                      <div className="text-xs text-gray-500">Expires 12/25</div>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    View billing history
                  </button>
                  <span className="mx-2 text-gray-300">•</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Download invoices
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Language & Region Settings */}
      <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('language')}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center">
            <FiGlobe className="mr-3 text-purple-600" />
            <span className="font-medium">Language & Region</span>
          </div>
          {expandedSections.language ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.language && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    id="language"
                    name="language"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                    Timezone
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={settings.timezone}
                    onChange={(e) => handleSettingChange('timezone', e.target.value)}
                  >
                    {timezones.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={settings.currency}
                    onChange={(e) => handleSettingChange('currency', e.target.value)}
                  >
                    {currencies.map((curr) => (
                      <option key={curr.code} value={curr.code}>
                        {curr.name} ({curr.symbol})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Help & Support */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50">
          <h3 className="font-medium text-gray-900 mb-2">Need help?</h3>
          <p className="text-sm text-gray-600 mb-3">Our support team is here to help you with any questions.</p>
          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <FiHelpCircle className="mr-2" /> Help Center
            </button>
            <button className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <FiMail className="mr-2" /> Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add some custom styles for the toggle switch
const styles = `
  .toggle-checkbox:checked {
    right: 0;
    border-color: #3B82F6;
  }
  .toggle-checkbox:checked + .toggle-label {
    background-color: #3B82F6;
  }
  .toggle-checkbox {
    transition: all 0.3s ease;
  }
`;

const CollapsibleWithStyles = () => (
  <>
    <style>{styles}</style>
    <Collapsible_18 />
  </>
);

render(<CollapsibleWithStyles />);