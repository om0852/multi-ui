const { motion } = require("framer-motion");

const ListGroup = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variants = {
    default: "space-y-2",
    bordered: "space-y-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4",
    highlighted: "space-y-2 bg-yellow-50 dark:bg-yellow-900 rounded-lg shadow-lg p-4",
    gradient:
      "space-y-2 bg-gradient-to-br from-blue-100 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-800 dark:to-pink-800 rounded-lg p-6",
  };

  return (
    <motion.ul
      className={`list-group ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, staggerChildren: 0.1 }}
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
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.3 },
    },
    "fade-in": {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
    },
    rotate: {
      whileHover: { rotate: 15 },
      whileTap: { rotate: -15 },
    },
    flip: {
      whileHover: { rotateY: 180 },
      whileTap: { rotateY: 0 },
    },
    bounce: {
      whileHover: { y: -10 },
      whileTap: { y: 0 },
    },
  };

  const motionProps = animations[animationType] || {};

  return (
    <motion.li
      className={`list-group-item cursor-pointer p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 ${className}`}
      onClick={onClick}
      {...motionProps}
    >
      {children}
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
          <ListItem onClick={() => handleClick("Profile")} animationType="hover-scale">
            Profile
          </ListItem>
          <ListItem onClick={() => handleClick("Settings")} animationType="hover-scale">
            Settings
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Bordered Variant</h3>
        <ListGroup variant="bordered">
          <ListItem onClick={() => handleClick("Messages")} animationType="slide-in">
            Messages
          </ListItem>
          <ListItem onClick={() => handleClick("Notifications")} animationType="slide-in">
            Notifications
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Highlighted Variant</h3>
        <ListGroup variant="highlighted">
          <ListItem onClick={() => handleClick("Upgrade")} animationType="bounce">
            Upgrade to Pro
          </ListItem>
          <ListItem onClick={() => handleClick("Support")} animationType="bounce">
            Contact Support
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Gradient Variant</h3>
        <ListGroup variant="gradient">
          <ListItem onClick={() => handleClick("New Project")} animationType="flip">
            New Project
          </ListItem>
          <ListItem onClick={() => handleClick("Templates")} animationType="flip">
            Templates
          </ListItem>
        </ListGroup>
      </div>
    </div>
  );
};

render(<ListGroupExample />);
