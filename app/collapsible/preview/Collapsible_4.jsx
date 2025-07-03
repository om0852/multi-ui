const NestedItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="text-blue-700">{title}</span>
          <span className="text-blue-500">{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <div className="p-3 pl-6 bg-white border-l-2 border-blue-200">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Collapsible_4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left bg-blue-600 text-white rounded-lg"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">Nested Collapsibles</span>
          <span>{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="p-4 space-y-2 bg-gray-50 border border-t-0 rounded-b-lg">
          <NestedItem 
            title="First Item" 
            content="This is the content for the first nested item." 
          />
          <NestedItem 
            title="Second Item" 
            content="This is the content for the second nested item with more details." 
          />
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_4 />);
