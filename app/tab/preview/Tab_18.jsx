
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

const TabsList = ({ children, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={`inline-flex p-3 bg-gray-900 border border-purple-500/30 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.15)] ${className}`}>
      <div className="flex w-full gap-2 p-1 bg-gray-800/50">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                activeTab,
                setActiveTab,
              })
            : child
        )}
      </div>
    </div>
  );
};

const TabsTrigger = ({
  value,
  children,
  activeTab,
  setActiveTab,
  className = "",
}) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md overflow-hidden ${
        isActive
          ? "text-purple-300"
          : "text-gray-400 hover:text-purple-300"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-purple-900/30"
          layoutId="cyber-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(168,85,247,0.2)_50%,transparent_75%)] bg-[length:250%_250%]"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <motion.div
              animate={{
                opacity: [1, 0.3, 1],
                x: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "steps(3)",
              }}
              className="w-1 h-4 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            />
          </motion.div>
        )}
      </span>
    </button>
  );
};

const TabsContent = ({ value, children, activeTab = "", className = "" }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              x: -10,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }}
            animate={{ 
              opacity: 1,
              x: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }}
            exit={{ 
              opacity: 0,
              x: 10,
              clipPath: "polygon(0 0, 95% 0, 90% 100%, 5% 100%)"
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className={`mt-6 p-6 bg-gray-900/80 border border-purple-500/20 rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.1)] ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-purple-500/5" />
              <div className="relative z-10 text-purple-100">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TabExample = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Cyber Speed",
      description: "Optimized for maximum performance and efficiency."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Encrypted",
      description: "Military-grade encryption for your data"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Modular",
      description: "Customizable components for any need"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Responsive",
      description: "Fully responsive on all devices"
    }
  ];

  const stats = [
    { label: 'Active Nodes', value: '24.5K', change: '+12.3%' },
    { label: 'Data Processed', value: '48.2PB', change: '+8.7%' },
    { label: 'Uptime', value: '99.99%', change: '+0.02%' },
    { label: 'Latency', value: '12ms', change: '-2ms' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">CYBER TABS</h1>
          <p className="text-lg text-purple-300/80 max-w-2xl mx-auto">Neon cyberpunk style tabs with glitch effects</p>
        </div>

        <Tabs defaultValue="features">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="features" className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-gray-800/50 border border-purple-500/20 rounded-lg hover:border-purple-400/40 transition-colors group"
                  whileHover={{ y: -5, boxShadow: '0 0 20px rgba(168, 85, 247, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">{feature.title}</h3>
                  <p className="text-purple-200/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-gray-800/50 border border-purple-500/20 rounded-lg hover:border-purple-400/40 transition-colors"
                  whileHover={{ y: -5, boxShadow: '0 0 20px rgba(168, 85, 247, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="text-sm text-purple-300/70 mb-2">{stat.label}</p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      stat.change.startsWith('+') ? 'bg-green-900/30 text-green-400' : 
                      stat.change.startsWith('-') ? 'bg-red-900/30 text-red-400' : 'bg-purple-900/30 text-purple-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-6">Network Performance</h3>
              <div className="h-64 flex items-center justify-center text-purple-300/50 border border-dashed border-purple-500/20 rounded">
                <p>Network metrics visualization</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="p-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-purple-300 mb-6">System Configuration</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
                    AD
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Admin User</h3>
                    <p className="text-purple-300/70">admin@cybernet.local</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-300/70 mb-1">Access Level</label>
                    <div className="relative">
                      <select className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none">
                        <option>Administrator</option>
                        <option>Operator</option>
                        <option>Viewer</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-purple-300/70 mb-1">Theme</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['Purple', 'Blue', 'Pink', 'Cyan', 'Green', 'Red'].map((theme) => (
                        <button 
                          key={theme}
                          className="p-2 border border-purple-500/20 rounded hover:border-purple-400/40 transition-colors text-purple-200 text-sm"
                        >
                          {theme}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-500 bg-gray-800 border-purple-500/50 rounded focus:ring-purple-500" />
                      <span className="text-purple-200 text-sm">Enable dark mode</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-500/10">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Save Configuration
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

render(<TabExample />);
