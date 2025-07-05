const { motion } = require("framer-motion");

const ListGroup = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "space-y-2",
    card: "flex flex-col space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4",
    stacked: "flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6",
  };

  return (
    <motion.ul
      className={`list-group ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.ul>
  );
};

const ListItem = ({
  children,
  onClick,
  className = "",
  animationType = "hover-scale",
}) => {
  const animations = {
    "hover-scale": {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    },
    "slide-in": {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.3 },
    },
    pulse: {
      whileHover: { scale: 1.1, backgroundColor: "#f3f4f6" },
      whileTap: { scale: 1.0 },
    },
  };

  const motionProps = animations[animationType] || {};

  return (
    <motion.li
      className={`list-group-item cursor-pointer p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 ${className}`}
      onClick={onClick}
      {...motionProps}
    >
      <motion.div
        className="flex items-center space-x-3"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-4 h-4 bg-blue-500 dark:bg-blue-300 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span>{children}</span>
      </motion.div>
    </motion.li>
  );
};

const ListGroupExample = () => {
  const handleClick = (item) => {
    console.log(`Clicked on ${item}`);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Default Variant</h3>
        <ListGroup>
          <ListItem onClick={() => handleClick("Inbox")} animationType="hover-scale">
            Inbox
          </ListItem>
          <ListItem onClick={() => handleClick("Starred")} animationType="hover-scale">
            Starred
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Card Variant</h3>
        <ListGroup variant="card">
          <ListItem onClick={() => handleClick("Drafts")} animationType="slide-in">
            Drafts
          </ListItem>
          <ListItem onClick={() => handleClick("Sent")} animationType="slide-in">
            Sent
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Stacked Variant</h3>
        <ListGroup variant="stacked">
          <ListItem onClick={() => handleClick("Trash")} animationType="pulse">
            Trash
          </ListItem>
          <ListItem onClick={() => handleClick("Spam")} animationType="pulse">
            Spam
          </ListItem>
        </ListGroup>
      </div>
    </div>
  );
};

render(<ListGroupExample />);
