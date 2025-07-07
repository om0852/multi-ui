
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
    <div className={`inline-flex p-4 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl rounded-[2rem] ${className}`}>
      <div className="flex w-full gap-3 p-2 bg-white/5 rounded-[1.5rem]">
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
      className={`relative px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-[2px] ${
        isActive
          ? "border-blue-500 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
          />
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className={`py-6 ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TabExample = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-center">
          <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Dashboard Overview</h3>
            <p className="text-gray-600">
              Get a quick overview of your account's performance and recent activity.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="text-center">
          <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Dive deep into your data with our comprehensive analytics tools.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="text-center">
          <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Reports</h3>
            <p className="text-gray-600">
              Generate and download detailed reports of your account activity.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="settings" className="text-center">
          <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Account Settings</h3>
            <p className="text-gray-600">
              Customize your account preferences and notification settings.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

render(<TabExample />);
