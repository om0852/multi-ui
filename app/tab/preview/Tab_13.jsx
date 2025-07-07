
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
    <div className={`inline-flex p-3 bg-gray-900 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.3)] ${className}`}>
      <div className="flex w-full gap-2">
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
      className={`group relative flex-1 px-5 py-2.5 text-sm font-medium transition-all duration-500 rounded-xl overflow-hidden ${
        isActive
          ? "text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          : "text-gray-400 hover:text-white"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"
          layoutId="neon-bg"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-xl" />
      </motion.div>
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
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
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
              filter: "blur(10px)",
              y: 20
            }}
            animate={{ 
              opacity: 1,
              filter: "blur(0px)",
              y: 0
            }}
            exit={{ 
              opacity: 0,
              filter: "blur(10px)",
              y: -20
            }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.5
            }}
            className={`mt-6 p-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] border border-violet-500/20 ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 blur-2xl" />
              <div className="relative text-gray-200">
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
  const dashboardStats = [
    { label: 'Total Revenue', value: '$45,231', change: '+20.1%', trend: 'up' },
    { label: 'Active Users', value: '12,345', change: '+12.3%', trend: 'up' },
    { label: 'Conversion', value: '3.2%', change: '-0.8%', trend: 'down' },
    { label: 'Avg. Session', value: '4m 32s', change: '+5.4%', trend: 'up' }
  ];

  const recentTransactions = [
    { id: 1, name: 'Payment from John', date: 'Today, 10:45 AM', amount: '$1,000', status: 'completed' },
    { id: 2, name: 'Subscription', date: 'Yesterday, 2:30 PM', amount: '-$29.99', status: 'completed' },
    { id: 3, name: 'Refund to Sarah', date: '2 days ago', amount: '-$150', status: 'pending' },
    { id: 4, name: 'Payment from Alex', date: '3 days ago', amount: '$2,500', status: 'completed' },
    { id: 5, name: 'Subscription', date: '1 week ago', amount: '-$29.99', status: 'completed' }
  ];

  const activityLogs = [
    { id: 1, action: 'New user registered', time: '2 minutes ago', icon: '👤' },
    { id: 2, action: 'Password changed', time: '1 hour ago', icon: '🔑' },
    { id: 3, action: 'Profile updated', time: '3 hours ago', icon: '✏️' },
    { id: 4, action: 'New login from Chrome on Windows', time: '1 day ago', icon: '💻' },
    { id: 5, action: 'Two-factor authentication enabled', time: '2 days ago', icon: '✅' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400">Welcome back, John! Here's what's happening with your account.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Generate Report
            </button>
          </div>
        </div>

        <Tabs defaultValue="overview">
          <div className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      stat.trend === 'up' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-violet-600/30 text-violet-300 rounded-lg">Week</button>
                    <button className="px-3 py-1 text-xs bg-gray-700 text-gray-400 rounded-lg hover:bg-gray-700/50">Month</button>
                    <button className="px-3 py-1 text-xs bg-gray-700 text-gray-400 rounded-lg hover:bg-gray-700/50">Year</button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <p>Revenue chart placeholder</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-6">Top Products</h3>
                <div className="space-y-6">
                  {[
                    { name: 'Premium Plan', sales: 342, color: 'from-violet-600 to-indigo-600' },
                    { name: 'Basic Plan', sales: 198, color: 'from-blue-600 to-cyan-600' },
                    { name: 'Add-ons', sales: 124, color: 'from-emerald-600 to-teal-600' },
                    { name: 'Custom Development', sales: 87, color: 'from-amber-600 to-orange-600' }
                  ].map((product, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>{product.name}</span>
                        <span>{product.sales} sales</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${product.color}`}
                          style={{ width: `${Math.min(100, (product.sales / 400) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
              <button className="px-4 py-2 text-sm bg-violet-600/30 text-violet-300 rounded-lg hover:bg-violet-600/50 transition-colors">
                Export
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                    <th className="pb-3 font-medium">Transaction</th>
                    <th className="pb-3 font-medium text-right">Amount</th>
                    <th className="pb-3 font-medium text-right">Date</th>
                    <th className="pb-3 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {recentTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-800/50 transition-colors">
                      <td className="py-4">
                        <div className="w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 mr-3 inline-block align-middle">
                          {tx.name.startsWith('Payment') ? '💸' : tx.name.startsWith('Subscription') ? '🔄' : '↩️'}
                        </div>
                        <span className="text-white">{tx.name}</span>
                      </td>
                      <td className={`text-right ${tx.amount.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                        {tx.amount}
                      </td>
                      <td className="text-right text-gray-400">{tx.date}</td>
                      <td className="text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          tx.status === 'completed' 
                            ? 'bg-green-900/30 text-green-400' 
                            : 'bg-yellow-900/30 text-yellow-400'
                        }`}>
                          {tx.status === 'completed' ? (
                            <>
                              <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                              Completed
                            </>
                          ) : (
                            <>
                              <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                              Pending
                            </>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 flex justify-center">
                <button className="px-4 py-2 text-sm text-violet-400 hover:text-white transition-colors">
                  View all transactions →
                </button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="p-8">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
            <div className="space-y-6">
              {activityLogs.map((log) => (
                <motion.div 
                  key={log.id}
                  className="flex items-start p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-violet-500/30 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 text-lg mr-4">
                    {log.icon}
                  </div>
                  <div>
                    <p className="text-white">{log.action}</p>
                    <p className="text-sm text-gray-400">{log.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="px-4 py-2 text-sm bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors">
                Load More Activity
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

render(<TabExample />);
