
const Tabs = ({ defaultValue, className = "", children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [direction, setDirection] = useState(0);

  return (
    <div className={`flex flex-col ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              activeTab,
              setActiveTab: (value) => {
                setDirection(value > activeTab ? 1 : -1);
                setActiveTab(value);
              },
              direction
            })
          : child
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between gap-4 pb-2 border-b-2 border-gray-300">
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
      className={`relative w-full flex-1 text-lg font-semibold py-2 px-4 rounded-t-lg transition-all duration-300 ease-in-out ${
        isActive
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
          : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500"
          layoutId="tabs-indicator"
          transition={{ duration: 0.3 }}
        />
      )}
    </button>
  );
};

const TabsContent = ({ value, children, activeTab, className = "", direction = 0 }) => {
  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        {activeTab === value && (
          <motion.div
            key={value}
            custom={direction}
            initial={{ opacity: 0, x: 100 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 * direction }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1
            }}
            className={`mt-6 rounded-xl p-4 focus:outline-none ${className}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.3
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
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6">
        <Tabs defaultValue="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <h2 className="text-2xl font-bold mb-4">Welcome to Our Platform</h2>
            <p className="text-gray-600">
              Discover amazing features and tools to boost your productivity. 
              Our platform is designed with your needs in mind.
            </p>
          </TabsContent>
          <TabsContent value="products">
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600">
              Explore our range of innovative products designed to help you 
              achieve your goals faster and more efficiently.
            </p>
          </TabsContent>
          <TabsContent value="about">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">
              We are a passionate team dedicated to creating exceptional 
              experiences through innovative technology and design.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

render(<TabExample />);
