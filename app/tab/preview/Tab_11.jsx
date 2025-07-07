
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
    <div className={`inline-flex p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl shadow-lg ${className}`}>
      <div className="flex w-full gap-2 p-1 bg-black/20 backdrop-blur-lg rounded-xl">
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
      className={`relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
        isActive
          ? "text-white"
          : "text-white/70 hover:text-white hover:bg-white/10"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg shadow-lg backdrop-blur-sm"
          layoutId="active-tab-bg"
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.6
          }}
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </motion.div>
        )}
      </span>
    </button>
  );
};

const TabsContent = ({ value, children, activeTab, className = "" }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              scale: 0.9,
              y: 20,
              rotate: -2
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: 0
            }}
            exit={{ 
              opacity: 0,
              scale: 0.9,
              y: -20,
              rotate: 2
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className={`mt-6 p-6 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-2xl shadow-xl ${className}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.4,
                ease: "easeOut"
              }}
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
  const stats = [
    { label: 'Active Users', value: '24.5K', change: '+12%', trend: 'up' },
    { label: 'Engagement', value: '78%', change: '+8%', trend: 'up' },
    { label: 'Bounce Rate', value: '22%', change: '-4%', trend: 'down' },
    { label: 'Avg. Session', value: '4m 32s', change: '+2%', trend: 'up' }
  ];

  const products = [
    { id: 1, name: 'Premium Plan', price: '$29.99', users: 'Up to 10 users', storage: '50GB Storage' },
    { id: 2, name: 'Business Plan', price: '$79.99', users: 'Up to 50 users', storage: '200GB Storage' },
    { id: 3, name: 'Enterprise Plan', price: 'Custom', users: 'Unlimited users', storage: '1TB+ Storage' }
  ];

  const team = [
    { id: 1, name: 'Alex Johnson', role: 'Product Manager', avatar: 'AJ' },
    { id: 2, name: 'Maria Garcia', role: 'UI/UX Designer', avatar: 'MG' },
    { id: 3, name: 'James Wilson', role: 'Frontend Developer', avatar: 'JW' },
    { id: 4, name: 'Sarah Kim', role: 'Backend Developer', avatar: 'SK' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 to-fuchsia-900 p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <Tabs defaultValue="analytics">
          <TabsList className="mb-8">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analytics" className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Analytics Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <p className="text-sm text-white/70 mb-1">{stat.label}</p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      stat.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="h-64 flex items-center justify-center text-white/50">
                <p>Analytics Chart Placeholder</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pricing" className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold text-white mb-4">{product.price} <span className="text-sm font-normal text-white/70">/month</span></p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-white/80">
                      <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {product.users}
                    </li>
                    <li className="flex items-center text-white/80">
                      <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {product.storage}
                    </li>
                    <li className="flex items-center text-white/80">
                      <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 Support
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="team" className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Our Amazing Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <motion.div 
                  key={member.id}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl font-bold text-white">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-violet-300 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/70 hover:text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/70 hover:text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/70 hover:text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-6">
                  <h3 className="text-xl font-bold text-white mb-6">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="John Doe"
                        defaultValue="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="john@example.com"
                        defaultValue="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1">Bio</label>
                      <textarea 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        rows="3"
                        placeholder="Tell us about yourself..."
                        defaultValue="Product designer and developer. Building digital experiences that matter."
                      ></textarea>
                    </div>
                    <div className="pt-2">
                      <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1">New Password</label>
                      <input 
                        type="password" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="pt-2">
                      <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 sticky top-6">
                  <h3 className="text-xl font-bold text-white mb-6">Profile Photo</h3>
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-4xl font-bold text-white mb-4">
                      JD
                    </div>
                    <button className="text-sm text-violet-300 hover:text-white transition-colors mb-2">
                      Upload New Photo
                    </button>
                    <button className="text-sm text-red-400 hover:text-red-300 transition-colors">
                      Remove Photo
                    </button>
                    
                    <div className="w-full border-t border-white/10 my-6"></div>
                    
                    <h4 className="text-sm font-semibold text-white/70 mb-4 self-start">Account Type</h4>
                    <div className="w-full space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                        <div>
                          <p className="text-sm font-medium text-white">Free Account</p>
                          <p className="text-xs text-white/50">Basic features</p>
                        </div>
                        <div className="w-10 h-6 bg-violet-500/30 rounded-full p-1">
                          <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-violet-500/50">
                        <div>
                          <p className="text-sm font-medium text-white">Pro Account</p>
                          <p className="text-xs text-white/50">Full access</p>
                        </div>
                        <div className="w-10 h-6 bg-violet-500 rounded-full p-1">
                          <div className="w-4 h-4 bg-white rounded-full ml-0"></div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                      Upgrade to Pro
                    </button>
                  </div>
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
