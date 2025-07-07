
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
    <div className={`inline-flex backdrop-blur-xl bg-white/10 shadow-lg rounded-2xl p-2 ${className}`}>
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
      className={`relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl ${
        isActive
          ? "text-white"
          : "text-gray-400 hover:text-white"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl"
          layoutId="background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35
          }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {isActive && (
          <motion.svg
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </motion.svg>
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
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 25
          }}
          className={`mt-6 p-6 rounded-2xl bg-white/5 backdrop-blur-lg shadow-xl ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TabExample = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 p-8">
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent 
          value="profile" 
          className="text-gray-200"
        >
          <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
          <p className="text-gray-300">
            Update your profile information and personal details. This information will be visible to other users.
          </p>
        </TabsContent>
        <TabsContent 
          value="settings" 
          className="text-gray-200"
        >
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <p className="text-gray-300">
            Configure your account settings and preferences. These settings control how you interact with the platform.
          </p>
        </TabsContent>
        <TabsContent 
          value="billing" 
          className="text-gray-200"
        >
          <h3 className="text-xl font-semibold mb-4">Billing & Subscription</h3>
          <p className="text-gray-300">
            Manage your subscription plan, payment methods, and view billing history.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

render(<TabExample />);
