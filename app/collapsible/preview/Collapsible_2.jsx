const Collapsible_2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Card Style Collapsible</h3>
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      <div
        className={`px-5 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="pt-3 border-t border-gray-100">
          <p className="text-gray-600">
            This collapsible section has a card-like appearance with a subtle shadow.
          </p>
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_2 />);
