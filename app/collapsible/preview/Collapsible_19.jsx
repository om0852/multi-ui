const { FiChevronDown, FiChevronUp, FiRefreshCw, FiFilter, FiDownload, FiPlus, FiSearch, FiBarChart2, FiPieChart, FiTrendingUp, FiUsers, FiDollarSign, FiShoppingCart, FiClock } = window.ReactIcons;

const Collapsible_19 = () => {
  // State for collapsible sections
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    sales: true,
    activity: false,
    inventory: false,
    team: false,
    settings: false
  });

  // Sample data for charts
  const salesData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 59 },
    { month: 'Mar', value: 80 },
    { month: 'Apr', value: 81 },
    { month: 'May', value: 56 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 40 }
  ];

  const inventoryData = [
    { category: 'Electronics', items: 120, lowStock: 15 },
    { category: 'Clothing', items: 85, lowStock: 8 },
    { category: 'Home & Kitchen', items: 62, lowStock: 5 },
    { category: 'Books', items: 45, lowStock: 2 },
    { category: 'Toys', items: 78, lowStock: 12 }
  ];

  const teamMembers = [
    { id: 1, name: 'Alex Johnson', role: 'Sales Manager', status: 'online', tasks: 12 },
    { id: 2, name: 'Maria Garcia', role: 'Marketing Lead', status: 'away', tasks: 8 },
    { id: 3, name: 'James Wilson', role: 'Developer', status: 'offline', tasks: 5 },
    { id: 4, name: 'Sarah Kim', role: 'Designer', status: 'online', tasks: 15 }
  ];

  const recentActivities = [
    { id: 1, user: 'Alex Johnson', action: 'created a new invoice', time: '2 min ago', icon: <FiDollarSign /> },
    { id: 2, user: 'Maria Garcia', action: 'updated the marketing campaign', time: '1 hour ago', icon: <FiBarChart2 /> },
    { id: 3, user: 'James Wilson', action: 'fixed a bug in the checkout', time: '3 hours ago', icon: <FiShoppingCart /> },
    { id: 4, user: 'Sarah Kim', action: 'uploaded new product images', time: '5 hours ago', icon: <FiPlus /> }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Simple bar chart component
  const BarChart = ({ data, width = 300, height = 150, color = '#3B82F6' }) => {
    const maxValue = Math.max(...data.map(item => item.value));
    const barWidth = width / data.length - 4;
    
    return (
      <div className="flex items-end" style={{ width: `${width}px`, height: `${height}px` }}>
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * (height - 30);
          return (
            <div key={index} className="flex flex-col items-center mx-0.5" style={{ width: `${barWidth}px` }}>
              <div 
                className="rounded-t-sm" 
                style={{ 
                  width: '100%', 
                  height: `${barHeight}px`, 
                  backgroundColor: color,
                  transition: 'height 0.5s ease'
                }} 
              />
              <span className="text-xs text-gray-500 mt-1">{item.month}</span>
            </div>
          );
        })}
      </div>
    );
  };

  // Simple pie chart component
  const PieChart = ({ data, size = 120 }) => {
    const total = data.reduce((sum, item) => sum + item.items, 0);
    let cumulativePercent = 0;
    
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
        {data.map((item, i) => {
          const percent = (item.items / total) * 100;
          const startX = 50 + 50 * Math.cos(2 * Math.PI * cumulativePercent / 100);
          const startY = 50 + 50 * Math.sin(2 * Math.PI * cumulativePercent / 100);
          cumulativePercent += percent;
          const endX = 50 + 50 * Math.cos(2 * Math.PI * cumulativePercent / 100);
          const endY = 50 + 50 * Math.sin(2 * Math.PI * cumulativePercent / 100);
          
          const largeArcFlag = percent > 50 ? 1 : 0;
          const pathData = [
            `M 50 50 L ${startX} ${startY}`,
            `A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            'Z'
          ].join(' ');
          
          const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
          
          return (
            <path
              key={i}
              d={pathData}
              fill={colors[i % colors.length]}
              stroke="white"
              strokeWidth="1"
            />
          );
        })}
        <circle cx="50" cy="50" r="30" fill="white" />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium">
          {total}
        </text>
      </svg>
    );
  };

  // Status indicator component
  const StatusIndicator = ({ status }) => {
    const statusColors = {
      online: 'bg-green-500',
      away: 'bg-yellow-500',
      offline: 'bg-gray-300'
    };
    
    return (
      <span className={`inline-block w-2 h-2 rounded-full ${statusColors[status] || 'bg-gray-300'}`}></span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
      </header>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <FiDollarSign size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-xl font-semibold">$24,780</p>
              <p className="text-xs text-green-500 flex items-center">
                <FiTrendingUp className="mr-1" /> 12.5% from last month
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <FiShoppingCart size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-xl font-semibold">1,245</p>
              <p className="text-xs text-green-500 flex items-center">
                <FiTrendingUp className="mr-1" /> 8.2% from last month
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <FiUsers size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">New Customers</p>
              <p className="text-xl font-semibold">342</p>
              <p className="text-xs text-green-500 flex items-center">
                <FiTrendingUp className="mr-1" /> 5.7% from last month
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <FiClock size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg. Order Time</p>
              <p className="text-xl font-semibold">2.4 days</p>
              <p className="text-xs text-red-500 flex items-center">
                <FiTrendingUp className="mr-1" /> 0.3 days longer
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sales Overview */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleSection('overview')}
            >
              <h2 className="font-medium text-gray-900 flex items-center">
                <FiBarChart2 className="mr-2 text-blue-600" />
                Sales Overview
              </h2>
              <button className="text-gray-400 hover:text-gray-500">
                {expandedSections.overview ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            
            <AnimatePresence>
              {expandedSections.overview && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-medium">Revenue This Month</h3>
                        <p className="text-sm text-gray-500">Total sales: $12,450.00</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
                          <FiFilter className="mr-1" /> Filter
                        </button>
                        <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
                          <FiDownload className="mr-1" /> Export
                        </button>
                      </div>
                    </div>
                    
                    <div className="h-64">
                      <BarChart data={salesData} width={600} />
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-blue-600">Total Orders</p>
                        <p className="text-lg font-semibold">1,245</p>
                        <p className="text-xs text-green-500">+12.5%</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-xs text-green-600">Avg. Order Value</p>
                        <p className="text-lg font-semibold">$156.80</p>
                        <p className="text-xs text-green-500">+5.2%</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-xs text-purple-600">New Customers</p>
                        <p className="text-lg font-semibold">342</p>
                        <p className="text-xs text-green-500">+8.7%</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <p className="text-xs text-yellow-600">Return Rate</p>
                        <p className="text-lg font-semibold">4.2%</p>
                        <p className="text-xs text-red-500">+0.5%</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleSection('activity')}
            >
              <h2 className="font-medium text-gray-900 flex items-center">
                <FiClock className="mr-2 text-purple-600" />
                Recent Activity
              </h2>
              <button className="text-gray-400 hover:text-gray-500">
                {expandedSections.activity ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            
            <AnimatePresence>
              {expandedSections.activity && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4">
                    <div className="space-y-4">
                      {recentActivities.map(activity => (
                        <div key={activity.id} className="flex items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mr-3">
                            {activity.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                              <span className="text-xs text-gray-400">{activity.time}</span>
                            </div>
                            <p className="text-sm text-gray-600">{activity.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                        View All Activity
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Inventory Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleSection('inventory')}
            >
              <h2 className="font-medium text-gray-900 flex items-center">
                <FiPieChart className="mr-2 text-green-600" />
                Inventory Status
              </h2>
              <button className="text-gray-400 hover:text-gray-500">
                {expandedSections.inventory ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            
            <AnimatePresence>
              {expandedSections.inventory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex justify-center mb-4">
                      <PieChart data={inventoryData} size={180} />
                    </div>
                    
                    <div className="space-y-3">
                      {inventoryData.map((item, index) => {
                        const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
                        const color = colors[index % colors.length];
                        
                        return (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span 
                                className="w-3 h-3 rounded-full mr-2" 
                                style={{ backgroundColor: color }}
                              ></span>
                              <span className="text-sm font-medium">{item.category}</span>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">{item.items} items</p>
                              {item.lowStock > 0 && (
                                <p className="text-xs text-red-500">{item.lowStock} low stock</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="w-full py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-100 transition-colors">
                        Manage Inventory
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Team Members */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleSection('team')}
            >
              <h2 className="font-medium text-gray-900 flex items-center">
                <FiUsers className="mr-2 text-purple-600" />
                Team Members
              </h2>
              <button className="text-gray-400 hover:text-gray-500">
                {expandedSections.team ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            
            <AnimatePresence>
              {expandedSections.team && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4">
                    <div className="relative mb-4">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Search team members..."
                      />
                    </div>
                    
                    <div className="space-y-3">
                      {teamMembers.map(member => (
                        <div key={member.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                          <div className="flex items-center">
                            <div className="relative">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                                {member.name.charAt(0)}
                              </div>
                              <StatusIndicator status={member.status} className="absolute bottom-0 right-0" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{member.name}</p>
                              <p className="text-xs text-gray-500">{member.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {member.tasks} tasks
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <button className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-500 rounded-md hover:bg-gray-50 flex items-center justify-center">
                        <FiPlus className="mr-2" /> Add Team Member
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Dashboard Settings */}
      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div 
          className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
          onClick={() => toggleSection('settings')}
        >
          <h2 className="font-medium text-gray-900 flex items-center">
            <FiSettings className="mr-2 text-gray-600" />
            Dashboard Settings
          </h2>
          <button className="text-gray-400 hover:text-gray-500">
            {expandedSections.settings ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
        
        <AnimatePresence>
          {expandedSections.settings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dashboard Layout</label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option>Default</option>
                      <option>Compact</option>
                      <option>Detailed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">Show recent activities</span>
                    </label>
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">Email notifications</span>
                    </label>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Refresh Interval</label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option>5 minutes</option>
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>Never</option>
                    </select>
                  </div>
                  
                  <div className="pt-2">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                      Save Settings
                    </button>
                    <button className="ml-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Reset to Default
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Add FiSettings to ReactIcons if not already present
if (window.ReactIcons && !window.ReactIcons.FiSettings) {
  window.ReactIcons.FiSettings = () => (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
}

const CollapsibleWithStyles = () => (
  <div className="font-sans antialiased text-gray-900">
    <Collapsible_19 />
  </div>
);

render(<CollapsibleWithStyles />);