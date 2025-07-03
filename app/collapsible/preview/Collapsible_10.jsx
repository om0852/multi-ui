
const initialData = {
  id: '1',
  name: 'Root',
  type: 'folder',
  children: [
    {
      id: '2',
      name: 'Documents',
      type: 'folder',
      children: [
        { id: '3', name: 'Work', type: 'folder' },
        { id: '4', name: 'Personal', type: 'folder' }
      ]
    },
    {
      id: '5',
      name: 'Images',
      type: 'folder',
      children: [
        { id: '6', name: 'Vacation.jpg', type: 'file' }
      ]
    }
  ]
};

const TreeNode = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="pl-4">
      <div 
        className={`flex items-center py-1 hover:bg-gray-100 rounded cursor-pointer ${
          node.type === 'file' ? 'pl-4' : ''
        }`}
        style={{ paddingLeft: `${level * 16}px` }}
        onClick={() => node.type === 'folder' && setIsOpen(!isOpen)}
      >
        {node.type === 'folder' ? (
          <span className="text-gray-500 mr-1">
            {isOpen ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
          </span>
        ) : (
          <span className="w-4 mr-1"></span>
        )}
        
        <span className="mr-2 text-gray-500">
          {node.type === 'folder' ? <FiFolder size={16} /> : <FiFile size={16} />}
        </span>
        
        <span className={`${node.type === 'folder' ? 'font-medium' : ''}`}>
          {node.name}
        </span>
      </div>
      
      {hasChildren && isOpen && (
        <div className="ml-2">
          {node.children.map((childNode) => (
            <TreeNode key={childNode.id} node={childNode} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Collapsible_10 = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">File Explorer</h1>
      <div className="border rounded-lg p-2 bg-white">
        <TreeNode node={initialData} />
      </div>
    </div>
  );
};

render(<Collapsible_10 />);
