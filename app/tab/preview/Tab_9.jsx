
const Tabs = ({ defaultValue, className = "", children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={`flex flex-col ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              activeTab,
              setActiveTab,
            })
          : child
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-4 py-4 border-b-4 border-gray-200">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              activeTab,
              setActiveTab,
            })
          : child
      )}
    </div>
  );
};

const TabsTrigger = ({
  value,
  children,
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === value;

  return (
    <motion.button
      className={`relative w-full py-3 px-8 text-lg font-medium transition-all duration-300 rounded-lg shadow-md hover:shadow-lg ${
        isActive
          ? "bg-gradient-to-r from-blue-400 to-indigo-500 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
      onClick={() => setActiveTab?.(value)}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500"
          layoutId="tabs-indicator"
        />
      )}
    </motion.button>
  );
};

const TabsContent = ({ value, children, activeTab, className = "" }) => {
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              scale: 1.5,
              filter: "blur(20px)",
              y: 20
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              y: 0
            }}
            exit={{ 
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
              y: -20
            }}
            transition={{
              opacity: { duration: 0.4 },
              scale: { type: "spring", stiffness: 300, damping: 25 },
              filter: { duration: 0.4 },
              y: { type: "spring", stiffness: 400, damping: 30 }
            }}
            className={`mt-6 rounded-xl p-4 focus:outline-none transform-gpu ${className}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TabExample = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
        <Tabs defaultValue="dashboard">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard Overview</h2>
            <p className="text-gray-600 mb-6">
              Welcome to your dashboard. Here you can find an overview of your account and recent activity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-700">Metric {item}</h3>
                  <p className="text-2xl font-bold text-blue-900">1,234</p>
                  <p className="text-sm text-blue-600">+12% from last month</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Analytics</h2>
            <p className="text-gray-600 mb-6">
              View detailed analytics and insights about your account performance.
            </p>
            <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center text-white">
              <p className="text-lg">Analytics Chart Placeholder</p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Account Settings</h2>
            <p className="text-gray-600 mb-6">
              Configure your account settings and preferences.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700">Profile Information</h3>
                <p className="text-sm text-gray-500">Update your personal details</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700">Security</h3>
                <p className="text-sm text-gray-500">Change password and security settings</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700">Notifications</h3>
                <p className="text-sm text-gray-500">Manage your notification preferences</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

render(<TabExample />);
