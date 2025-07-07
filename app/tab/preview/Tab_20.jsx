
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
    <div className={`inline-flex p-3 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-purple-400/10 backdrop-blur-xl rounded-2xl shadow-lg ${className}`}>
      <div className="flex w-full gap-2 p-1 bg-white/5 rounded-xl backdrop-blur-xl">
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
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-500 rounded-xl overflow-hidden ${
        isActive
          ? "text-white"
          : "text-cyan-200/70 hover:text-white"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0"
          layoutId="holo-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-50" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] animate-[shimmer_2s_infinite]" />
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
                background: [
                  "linear-gradient(0deg, #22d3ee, #818cf8)",
                  "linear-gradient(90deg, #22d3ee, #818cf8)",
                  "linear-gradient(180deg, #22d3ee, #818cf8)",
                  "linear-gradient(270deg, #22d3ee, #818cf8)",
                  "linear-gradient(0deg, #22d3ee, #818cf8)",
                ],
                boxShadow: [
                  "0 0 10px rgba(34,211,238,0.5)",
                  "0 0 20px rgba(34,211,238,0.8)",
                  "0 0 10px rgba(34,211,238,0.5)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-2 h-2 rounded-full"
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
              y: 20,
              filter: "blur(4px)"
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              filter: "blur(0px)"
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              filter: "blur(4px)"
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 0.8
            }}
            className={`mt-8 p-8 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-purple-400/10 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.1)] ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 10% 20%, rgba(34,211,238,0.05) 0%, transparent 20%)",
                    "radial-gradient(circle at 90% 80%, rgba(129,140,248,0.05) 0%, transparent 20%)",
                    "radial-gradient(circle at 30% 70%, rgba(34,211,238,0.05) 0%, transparent 20%)",
                    "radial-gradient(circle at 10% 20%, rgba(34,211,238,0.05) 0%, transparent 20%)",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative z-10 text-cyan-50">
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
        <svg className="w-7 h-7 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Light Speed",
      description: "Optimized for maximum performance"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure",
      description: "End-to-end encryption"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Modular",
      description: "Customizable components"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Responsive",
      description: "Works on all devices"
    }
  ];

  const stats = [
    { label: 'Data Processed', value: '48.2PB', change: '+8.7%' },
    { label: 'Active Users', value: '24.5K', change: '+12.3%' },
    { label: 'Uptime', value: '99.99%', change: '+0.02%' },
    { label: 'Latency', value: '12ms', change: '-2ms' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">HOLO TABS</h1>
          <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto">Futuristic holographic interface with smooth animations</p>
        </div>

        <Tabs defaultValue="features">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="features" className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-colors group"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-cyan-100/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-colors"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="text-sm text-cyan-200/70 mb-2">{stat.label}</p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      stat.change.startsWith('+') ? 'bg-green-900/30 text-green-400' : 
                      stat.change.startsWith('-') ? 'bg-red-900/30 text-red-400' : 'bg-cyan-900/30 text-cyan-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Performance Metrics</h3>
              <div className="h-64 flex items-center justify-center text-cyan-200/50 border border-dashed border-cyan-500/30 rounded">
                <p>Analytics visualization</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="p-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">System Configuration</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 flex items-center justify-center text-2xl font-bold text-slate-900">
                    AD
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Admin User</h3>
                    <p className="text-cyan-200/70">admin@holo.net</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-cyan-200/70 mb-1">Interface Theme</label>
                    <div className="grid grid-cols-5 gap-3">
                      {['Cyan', 'Blue', 'Purple', 'Pink', 'Custom'].map((theme) => (
                        <div key={theme} className="flex flex-col items-center">
                          <button 
                            className={`w-10 h-10 rounded-full mb-1 border-2 ${
                              theme === 'Cyan' ? 'border-cyan-400 bg-cyan-500' :
                              theme === 'Blue' ? 'border-blue-400 bg-blue-500' :
                              theme === 'Purple' ? 'border-purple-400 bg-purple-500' :
                              theme === 'Pink' ? 'border-pink-400 bg-pink-500' :
                              'border-white/20 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400'
                            }`}
                          />
                          <span className="text-xs text-cyan-200/70">{theme}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <label className="block text-sm font-medium text-cyan-200/70 mb-1">Hologram Intensity</label>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue="70"
                      className="w-full h-2 bg-cyan-900/50 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-cyan-400 bg-slate-800 border-cyan-500/50 rounded focus:ring-cyan-500" defaultChecked />
                      <span className="text-cyan-200 text-sm">Enable Holographic Effects</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-cyan-500/10">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-slate-900 font-medium rounded-lg hover:opacity-90 transition-opacity">
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
