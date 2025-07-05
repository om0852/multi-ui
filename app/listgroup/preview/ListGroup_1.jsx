const { motion } = require("framer-motion");

const ListGroup = ({ children, className = "" }) => {
  return (
    <motion.ul
      className={`list-group bg-white dark:bg-gray-800 shadow rounded-md divide-y divide-gray-200 dark:divide-gray-700 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, staggerChildren: 0.1 }}
    >
      {children}
    </motion.ul>
  );
};

const ListItem = ({ children, onClick, className = "" }) => {
  return (
    <motion.li
      className={`list-group-item cursor-pointer p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-gray-800 dark:text-gray-200 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
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
    <div className="p-4 max-w-md mx-auto">
      <ListGroup>
        <ListItem onClick={() => handleClick("Item 1")}>
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium">List Item 1</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description for item 1</p>
            </div>
          </div>
        </ListItem>
        <ListItem onClick={() => handleClick("Item 2")}>
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium">List Item 2</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description for item 2</p>
            </div>
          </div>
        </ListItem>
        <ListItem onClick={() => handleClick("Item 3")}>
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium">List Item 3</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description for item 3</p>
            </div>
          </div>
        </ListItem>
      </ListGroup>
    </div>
  );
};

render(<ListGroupExample />);
