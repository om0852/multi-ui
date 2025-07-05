const { motion } = require("framer-motion");

const ListGroup = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variants = {
    default: "space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow",
    "soft-blue":
      "space-y-2 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-100 p-4 rounded-lg border border-blue-300 dark:border-blue-700",
    pastel:
      "space-y-2 bg-pink-50 dark:bg-pink-900 text-pink-800 dark:text-pink-100 p-4 rounded-lg shadow-lg",
    "gradient-shift":
      "space-y-2 bg-gradient-to-r from-green-100 via-teal-200 to-blue-300 dark:from-green-900 dark:via-teal-800 dark:to-blue-900 p-6 rounded-lg shadow-md",
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
      className={`list-group-item cursor-pointer p-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md transition-all ${className}`}
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
          <ListItem onClick={() => handleClick("Home")} animationType="hover-scale">
            Home
          </ListItem>
          <ListItem onClick={() => handleClick("Profile")} animationType="hover-scale">
            Profile
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Soft Blue Variant</h3>
        <ListGroup variant="soft-blue">
          <ListItem onClick={() => handleClick("Messages")} animationType="slide-in">
            Messages
          </ListItem>
          <ListItem onClick={() => handleClick("Notifications")} animationType="slide-in">
            Notifications
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Pastel Variant</h3>
        <ListGroup variant="pastel">
          <ListItem onClick={() => handleClick("Favorites")} animationType="bounce">
            Favorites
          </ListItem>
          <ListItem onClick={() => handleClick("Bookmarks")} animationType="bounce">
            Bookmarks
          </ListItem>
        </ListGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3 dark:text-white">Gradient Shift Variant</h3>
        <ListGroup variant="gradient-shift">
          <ListItem onClick={() => handleClick("New")} animationType="flip">
            New Project
          </ListItem>
          <ListItem onClick={() => handleClick("Import")} animationType="flip">
            Import Project
          </ListItem>
        </ListGroup>
      </div>
    </div>
  );
};

render(<ListGroupExample />);
