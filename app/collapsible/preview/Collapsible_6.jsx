const Collapsible_6 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div
        className={`bg-indigo-700 text-white transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="p-4 flex justify-between items-center h-16 border-b border-indigo-600">
          {isOpen && <span className="font-bold">Menu</span>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-indigo-600 rounded"
          >
            {isOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="p-2">
          {['Dashboard', 'Profile', 'Settings'].map((item) => (
            <a
              key={item}
              href="#"
              className={`flex items-center p-3 rounded-lg mb-1 hover:bg-indigo-600 transition-colors ${
                isOpen ? 'justify-start' : 'justify-center'
              }`}
            >
              <span className="w-6 text-center">📊</span>
              {isOpen && <span className="ml-3">{item}</span>}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Collapsible Sidebar</h1>
        <p className="mb-4">
          This is an example of a collapsible sidebar navigation.
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          {isOpen ? 'Collapse' : 'Expand'} Sidebar
        </button>
      </div>
    </div>
  );
};

render(<Collapsible_6 />);
