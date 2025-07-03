
const Collapsible_14 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    rating: null,
    inStock: false,
    onSale: false,
    colors: [],
  });

  const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Beauty'];
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow'];

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleColorToggle = (color) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color]
    }));
  };

  const handlePriceChange = (index, value) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseInt(value, 10);
    setFilters(prev => ({
      ...prev,
      priceRange: newPriceRange
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: '',
      priceRange: [0, 1000],
      rating: null,
      inStock: false,
      onSale: false,
      colors: [],
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          <FiFilter className="mr-2" />
          <span>Filters</span>
          <span className="ml-2">
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Panel */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-80 flex-shrink-0`}>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button 
                onClick={resetFilters}
                className="text-sm text-indigo-600 hover:underline"
              >
                Reset All
              </button>
            </div>

            <div className="space-y-6">
              {/* Category */}
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(0, e.target.value)}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(1, e.target.value)}
                    className="flex-1"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-medium mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => handleColorToggle(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        filters.colors.includes(color) 
                          ? 'ring-2 ring-offset-2 ring-indigo-500' 
                          : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      aria-label={`Select ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="inStock"
                    checked={filters.inStock}
                    onChange={handleFilterChange}
                    className="rounded text-indigo-600"
                  />
                  <span className="ml-2">In Stock Only</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="onSale"
                    checked={filters.onSale}
                    onChange={handleFilterChange}
                    className="rounded text-indigo-600"
                  />
                  <span className="ml-2">On Sale</span>
                </label>
              </div>

              {/* Rating */}
              <div>
                <h3 className="font-medium mb-3">Rating</h3>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => setFilters(prev => ({ ...prev, rating: star }))}
                      className={`text-2xl ${filters.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-medium">Product {item}</h3>
                  <p className="text-gray-600">${(item * 50).toFixed(2)}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_14 />);
