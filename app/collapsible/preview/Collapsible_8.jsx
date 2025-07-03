const Collapsible_8 = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    inStock: false
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4">
      <div className="w-full md:w-64 flex-shrink-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-full p-3 bg-gray-100 rounded-lg mb-4 flex justify-between items-center"
        >
          <span>Filters</span>
          <span>{isOpen ? '−' : '+'}</span>
        </button>
        
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block bg-white p-4 rounded-lg border border-gray-200`}
        >
          <h3 className="font-bold text-lg mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Category</h4>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="inStock"
                name="inStock"
                checked={filters.inStock}
                onChange={handleFilterChange}
                className="mr-2"
              />
              <label htmlFor="inStock">In Stock Only</label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 rounded mb-3"></div>
              <h3 className="font-medium">Product {item}</h3>
              <p className="text-gray-600">$29.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_8 />);
