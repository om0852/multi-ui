
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
    <div className={`inline-flex p-4 bg-gray-100 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] ${className}`}>
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
      className={`relative flex-1 px-5 py-3 text-sm font-medium transition-all duration-500 rounded-xl ${
        isActive
          ? "text-gray-900 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.9)]"
          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      <motion.div
        className={`absolute inset-0 rounded-xl bg-white ${isActive ? "opacity-100" : "opacity-0"}`}
        initial={false}
        animate={{
          scale: isActive ? 1 : 0.95,
          opacity: isActive ? 1 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500" />
          </motion.div>
        )}
      </span>
    </button>
  );
};

const TabsContent = ({ value, children, activeTab, className = "" }) => {
  return (
    <AnimatePresence mode="wait">
      {activeTab === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 25
          }}
          className={`mt-6 p-8 bg-white rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TabExample = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-3xl">
        <Tabs defaultValue="dashboard">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Dashboard Overview</h3>
            <p className="text-gray-600">
              Welcome to your dashboard. Here you can find an overview of your account and recent activity.
            </p>
          </TabsContent>
          <TabsContent value="analytics">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Analytics</h3>
            <p className="text-gray-600">
              View detailed analytics and insights about your account performance and user engagement.
            </p>
          </TabsContent>
          <TabsContent value="settings">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Account Settings</h3>
            <p className="text-gray-600">
              Configure your account settings, notifications, and privacy preferences.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

render(<TabExample />);
