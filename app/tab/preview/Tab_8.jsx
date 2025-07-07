
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

const TabsList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center gap-4 py-3 border-b-2 border-transparent">
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
}) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`relative w-full flex-1 text-lg font-semibold py-2 px-6 transition-all ease-out duration-300 rounded-t-lg ${
        isActive
          ? "text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600"
          layoutId="tabs-indicator"
        />
      )}
    </button>
  );
};

const TabsContent = ({ value, children, activeTab, className = "" }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Wrap child elements with motion.div
  const wrappedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return (
        <motion.div key={index} variants={item} className="content-item">
          {child}
        </motion.div>
      );
    }
    return child;
  });

  return (
    <AnimatePresence mode="wait">
      {activeTab === value && (
        <motion.div
          key={value}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className={`mt-6 rounded-xl p-4 focus:outline-none space-y-4 ${className}`}
        >
          {wrappedChildren}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TabExample = () => {
  const features = [
    "Real-time analytics",
    "Custom dashboards",
    "Team collaboration",
    "Advanced reporting",
    "API access"
  ];

  const pricingPlans = [
    "Starter: $9.99/month",
    "Professional: $29.99/month",
    "Business: $79.99/month",
    "Enterprise: Custom pricing"
  ];

  const supportOptions = [
    "24/7 Email support",
    "Knowledge base",
    "Community forum",
    "Priority phone support"
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <Tabs defaultValue="features">
          <TabsList>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
            {features.map((feature, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="pricing" className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
            {pricingPlans.map((plan, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{plan}</span>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="support" className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Support Options</h2>
            {supportOptions.map((option, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

render(<TabExample />);
