const Collapsible_1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">Basic Accordion</span>
          <span className="text-gray-600">
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <div className="p-4 bg-white border border-t-0 rounded-b-lg">
          <p className="text-gray-700">
            This is a basic collapsible content area. Click the header to toggle visibility.
          </p>
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_1 />);
