
const Collapsible_17 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    date: '',
    author: '',
    tags: []
  });
  const [activeFilter, setActiveFilter] = useState(null);
  const searchRef = useRef(null);

  const categories = ['Technology', 'Business', 'Health', 'Entertainment', 'Sports'];
  const tags = ['React', 'JavaScript', 'Design', 'Tutorial', 'News', 'Tips'];
  const authors = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
        setActiveFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        document.querySelector('input[type="text"]')?.focus();
      }, 100);
    } else {
      setActiveFilter(null);
    }
  };

  const handleFilterChange = (filter, value) => {
    setFilters(prev => ({
      ...prev,
      [filter]: value
    }));
  };

  const toggleTag = (tag) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilters({
      category: '',
      date: '',
      author: '',
      tags: []
    });
  };

  const renderFilterContent = () => {
    switch (activeFilter) {
      case 'category':
        return (
          <div className="p-3 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Select Category</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    checked={filters.category === category}
                    onChange={() => handleFilterChange('category', category)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
        );
      
      case 'date':
        return (
          <div className="p-3 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Select Date Range</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">From</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">To</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>
          </div>
        );
      
      case 'author':
        return (
          <div className="p-3 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Select Author</h3>
            <div className="space-y-2">
              {authors.map(author => (
                <label key={author} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="author"
                    checked={filters.author === author}
                    onChange={() => handleFilterChange('author', author)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">{author}</span>
                </label>
              ))}
            </div>
          </div>
        );
      
      case 'tags':
        return (
          <div className="p-3 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Select Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 text-xs rounded-full ${
                    filters.tags.includes(tag)
                      ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Advanced Search</h1>
        
        <div className="relative" ref={searchRef}>
          <div 
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
              isExpanded ? 'ring-2 ring-indigo-500' : 'hover:shadow-lg'
            }`}
          >
            <div className="flex items-center p-4">
              <FiSearch className="text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isExpanded ? "What are you looking for?" : "Search..."}
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                onFocus={() => setIsExpanded(true)}
              />
              
              {(searchQuery || Object.values(filters).some(Boolean)) && (
                <button
                  onClick={clearSearch}
                  className="p-1 text-gray-400 hover:text-gray-600 mr-2"
                >
                  <FiX size={20} />
                </button>
              )}
              
              <button
                onClick={toggleExpand}
                className={`p-2 rounded-full ${
                  isExpanded ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <FiFilter size={20} />
              </button>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-100 p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <button
                        onClick={() => setActiveFilter(activeFilter === 'category' ? null : 'category')}
                        className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                          activeFilter === 'category' || filters.category
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <FiTag className="mr-1.5" />
                        {filters.category || 'Category'}
                        {activeFilter === 'category' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                      </button>
                      
                      <button
                        onClick={() => setActiveFilter(activeFilter === 'date' ? null : 'date')}
                        className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                          activeFilter === 'date' || filters.date
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <FiCalendar className="mr-1.5" />
                        {filters.date || 'Date'}
                        {activeFilter === 'date' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                      </button>
                      
                      <button
                        onClick={() => setActiveFilter(activeFilter === 'author' ? null : 'author')}
                        className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                          activeFilter === 'author' || filters.author
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <FiUser className="mr-1.5" />
                        {filters.author || 'Author'}
                        {activeFilter === 'author' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                      </button>
                      
                      <button
                        onClick={() => setActiveFilter(activeFilter === 'tags' ? null : 'tags')}
                        className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                          activeFilter === 'tags' || filters.tags.length > 0
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <FiTag className="mr-1.5" />
                        {filters.tags.length > 0 ? `${filters.tags.length} selected` : 'Tags'}
                        {activeFilter === 'tags' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                      </button>
                    </div>
                    
                    <AnimatePresence>
                      {activeFilter && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 right-0 z-10 mt-1"
                        >
                          {renderFilterContent()}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {(searchQuery || Object.values(filters).some(Boolean)) && (
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {searchQuery ? 'Search for:' : 'Filters:'} 
                            <span className="font-medium text-gray-700 ml-1">
                              {searchQuery || 
                                (filters.category && `Category: ${filters.category}`) ||
                                (filters.author && `Author: ${filters.author}`) ||
                                (filters.tags.length > 0 && `${filters.tags.length} tags selected`) ||
                                (filters.date && `Date: ${filters.date}`)}
                            </span>
                          </span>
                          <button
                            onClick={() => {
                              // Handle search
                              console.log('Searching with:', { searchQuery, filters });
                              setIsExpanded(false);
                              setActiveFilter(null);
                            }}
                            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Click outside area to close dropdowns */}
          {activeFilter && (
            <div 
              className="fixed inset-0 z-0"
              onClick={() => setActiveFilter(null)}
            />
          )}
        </div>
        
        {/* Search results or placeholder */}
        <div className="mt-8">
          {searchQuery || Object.values(filters).some(Boolean) ? (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Search Results</h2>
              <p className="text-gray-500">
                {searchQuery ? `Showing results for "${searchQuery}"` : 'Filtered results'}
              </p>
              {/* Search results would be mapped here */}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <FiSearch className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Search for anything</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Use the search bar above to find documents, files, or information across the platform.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_17 />);
