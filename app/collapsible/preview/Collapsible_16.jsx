
const Collapsible_16 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New message from Sarah',
      message: 'Hey! Just wanted to check in and see how the project is going.',
      time: '2m ago',
      read: false,
      type: 'message',
      icon: '💬'
    },
    {
      id: 2,
      title: 'Payment received',
      message: 'Your payment of $129.00 has been processed successfully.',
      time: '1h ago',
      read: false,
      type: 'payment',
      icon: '💰'
    },
    {
      id: 3,
      title: 'New update available',
      message: 'Version 2.5.0 is now available with new features and improvements.',
      time: '5h ago',
      read: true,
      type: 'system',
      icon: '🔄'
    },
    {
      id: 4,
      title: 'Event reminder',
      message: 'Team meeting starts in 15 minutes. Join the call using the link provided.',
      time: '1d ago',
      read: true,
      type: 'event',
      icon: '📅'
    },
    {
      id: 5,
      title: 'New follower',
      message: 'John Doe started following you.',
      time: '2d ago',
      read: true,
      type: 'social',
      icon: '👤'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const deleteNotification = (id, e) => {
    e.stopPropagation();
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === activeTab);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
      >
        <FiBell className="text-gray-700 text-xl" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={markAllAsRead}
                    className="p-1 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-gray-100"
                    title="Mark all as read"
                  >
                    <FiCheck size={18} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-gray-100">
                    <FiSettings size={18} />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </div>
              
              <div className="flex mt-3 space-x-1 overflow-x-auto pb-1 scrollbar-hide">
                {['all', 'message', 'payment', 'system', 'event', 'social'].map((tab) => {
                  const tabConfig = {
                    'all': { label: 'All', icon: '📋' },
                    'message': { label: 'Messages', icon: '💬' },
                    'payment': { label: 'Payments', icon: '💰' },
                    'system': { label: 'System', icon: '⚙️' },
                    'event': { label: 'Events', icon: '📅' },
                    'social': { label: 'Social', icon: '👥' }
                  }[tab];
                  
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${
                        activeTab === tab
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-1.5">{tabConfig.icon}</span>
                      {tabConfig.label}
                      {tab !== 'all' && (
                        <span className="ml-1.5 px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {notifications.filter(n => n.type === tab).length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {filteredNotifications.length > 0 ? (
                <ul className="divide-y divide-gray-100">
                  <AnimatePresence>
                    {filteredNotifications.map((notification) => (
                      <motion.li
                        key={notification.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => markAsRead(notification.id)}
                        className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                          !notification.read ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 text-2xl mr-3">
                            {notification.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <h3 className={`text-sm font-medium ${
                                !notification.read ? 'text-gray-900' : 'text-gray-600'
                              }`}>
                                {notification.title}
                              </h3>
                              <span className="text-xs text-gray-500">
                                {notification.time}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {notification.message}
                            </p>
                          </div>
                          <button
                            onClick={(e) => deleteNotification(notification.id, e)}
                            className="ml-2 p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100"
                          >
                            <FiTrash2 size={16} />
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <p>No notifications found</p>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-gray-100 bg-gray-50">
              <button className="w-full py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                View all notifications
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

render(<Collapsible_16 />);
