
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
    <div className={`inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1.5 ${className}`}>
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
  className = "",
}) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`relative inline-flex items-center justify-center whitespace-nowrap rounded-lg px-8 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive
          ? "text-gray-900"
          : "text-gray-100 hover:text-white hover:bg-white/10"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 z-10 rounded-lg bg-white"
          layoutId="active-tab"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 1
          }}
        />
      )}
      <span className="relative z-20 flex items-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
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
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1
          }}
          className={`mt-6 rounded-xl p-4 focus:outline-none ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TabExample = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-8">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-gray-600">
            Make changes to your account here. Click save when you're done.
          </p>
        </TabsContent>
        <TabsContent value="password" className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Change Password</h3>
          <p className="text-gray-600">
            Update your password here. Make sure it's secure and not easy to guess.
          </p>
        </TabsContent>
        <TabsContent value="notifications" className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
          <p className="text-gray-600">
            Configure how you receive notifications from our service.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

render(<TabExample />);
