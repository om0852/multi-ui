const { useState, useEffect } = React;
const { FiChevronDown, FiChevronRight, FiSearch, FiBookOpen, FiFileText, FiVideo, FiDownload, FiExternalLink, FiTag, FiClock, FiThumbsUp } = window.ReactIcons;
const { motion, AnimatePresence } = window.framerMotion;

const Collapsible_20 = () => {
  // State for expanded categories and articles
  const [expandedCategories, setExpandedCategories] = useState({
    gettingStarted: true,
    account: false,
    billing: false,
    features: false,
    api: false
  });
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewedArticles, setViewedArticles] = useState(new Set());

  // Sample data for the knowledge base
  const categories = {
    gettingStarted: {
      title: 'Getting Started',
      icon: <FiBookOpen className="h-5 w-5 text-blue-500" />,
      articles: [
        { 
          id: 'gs1', 
          title: 'Welcome to Our Platform', 
          type: 'article', 
          likes: 24, 
          views: 156,
          tags: ['introduction', 'onboarding'],
          content: `
            <h3 class="text-lg font-semibold mb-3">Welcome to Our Platform</h3>
            <p class="mb-4">Thank you for choosing our platform! This guide will help you get started with the basic features and functionality.</p>
            
            <h4 class="font-medium mb-2">Key Features:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
              <li>Intuitive dashboard with real-time analytics</li>
              <li>Easy-to-use content management system</li>
              <li>Customizable user roles and permissions</li>
              <li>Integrated payment processing</li>
              <li>24/7 customer support</li>
            </ul>
            
            <h4 class="font-medium mb-2">Getting Started</h4>
            <p class="mb-2">1. Complete your profile setup</p>
            <p class="mb-2">2. Connect your payment method</p>
            <p class="mb-2">3. Explore the dashboard</p>
            <p class="mb-4">4. Create your first project</p>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-medium text-blue-800 mb-2">Pro Tip</h4>
              <p>Check out our video tutorials for a visual guide to getting started.</p>
            </div>
          `,
          lastUpdated: '2023-06-15',
          author: 'Admin Team'
        },
        { 
          id: 'gs2', 
          title: 'Setting Up Your Account', 
          type: 'video', 
          likes: 18, 
          views: 98,
          tags: ['account', 'setup'],
          content: `
            <h3 class="text-lg font-semibold mb-3">Setting Up Your Account</h3>
            <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-500">Video Player: Setting Up Your Account</span>
            </div>
            
            <p class="mb-4">This video will guide you through the process of setting up your account and configuring your profile settings.</p>
            
            <h4 class="font-medium mb-2">Video Chapters:</h4>
            <ul class="list-decimal pl-5 mb-4 space-y-1">
              <li>Creating your account (0:10)</li>
              <li>Verifying your email (1:45)</li>
              <li>Setting up two-factor authentication (2:30)</li>
              <li>Configuring notification preferences (3:50)</li>
              <li>Customizing your profile (5:20)</li>
            </ul>
            
            <div class="flex items-center space-x-4 mt-6">
              <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <FiDownload className="mr-2" /> Download Video
              </button>
              <button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
                <FiExternalLink className="mr-2" /> Open in New Tab
              </button>
            </div>
          `,
          lastUpdated: '2023-06-10',
          author: 'Support Team'
        }
      ]
    },
    account: {
      title: 'Account Settings',
      icon: <FiFileText className="h-5 w-5 text-green-500" />,
      articles: [
        { 
          id: 'ac1', 
          title: 'Updating Profile Information', 
          type: 'article', 
          likes: 12, 
          views: 143,
          tags: ['profile', 'settings'],
          content: `<p>Content for Updating Profile Information...</p>`,
          lastUpdated: '2023-06-01',
          author: 'Support Team'
        },
        { 
          id: 'ac2', 
          title: 'Two-Factor Authentication', 
          type: 'article', 
          likes: 45, 
          views: 321,
          tags: ['security', 'authentication'],
          content: `<p>Content for Two-Factor Authentication...</p>`,
          lastUpdated: '2023-05-28',
          author: 'Security Team'
        }
      ]
    },
    billing: {
      title: 'Billing & Payments',
      icon: <FiFileText className="h-5 w-5 text-purple-500" />,
      articles: [
        { 
          id: 'bl1', 
          title: 'Understanding Your Bill', 
          type: 'article', 
          likes: 29, 
          views: 198,
          tags: ['billing', 'payments'],
          content: `<p>Content for Understanding Your Bill...</p>`,
          lastUpdated: '2023-05-20',
          author: 'Billing Team'
        }
      ]
    },
    features: {
      title: 'Features',
      icon: <FiFileText className="h-5 w-5 text-yellow-500" />,
      articles: [
        { 
          id: 'ft1', 
          title: 'Advanced Analytics', 
          type: 'article', 
          likes: 38, 
          views: 245,
          tags: ['analytics', 'reports'],
          content: `<p>Content for Advanced Analytics...</p>`,
          lastUpdated: '2023-05-15',
          author: 'Product Team'
        }
      ]
    },
    api: {
      title: 'API Documentation',
      icon: <FiFileText className="h-5 w-5 text-red-500" />,
      articles: [
        { 
          id: 'api1', 
          title: 'Getting Started with Our API', 
          type: 'article', 
          likes: 52, 
          views: 412,
          tags: ['api', 'development'],
          content: `<p>Content for Getting Started with Our API...</p>`,
          lastUpdated: '2023-05-10',
          author: 'Dev Team'
        }
      ]
    }
  };

  // Get all articles for search and filtering
  const allArticles = Object.values(categories).flatMap(category => 
    category.articles.map(article => ({
      ...article,
      categoryId: Object.keys(categories).find(key => categories[key] === category)
    }))
  );

  // Filter articles based on search query and active tab
  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'popular' && article.likes > 20) ||
                      (activeTab === 'recent' && new Date(article.lastUpdated) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
    const matchesFilter = activeFilter === 'all' || article.type === activeFilter;
    
    return matchesSearch && matchesTab && matchesFilter;
  });

  // Get popular articles (for the sidebar)
  const popularArticles = [...allArticles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  // Get recent articles (for the sidebar)
  const recentArticles = [...allArticles]
    .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
    .slice(0, 3);

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Toggle article expansion
  const toggleArticle = (articleId) => {
    // Mark as viewed
    if (!viewedArticles.has(articleId)) {
      setViewedArticles(prev => new Set([...prev, articleId]));
    }
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // If there's a search query, expand all categories
    if (e.target.value.trim() !== '') {
      const allExpanded = {};
      Object.keys(categories).forEach(key => {
        allExpanded[key] = true;
      });
      setExpandedCategories(allExpanded);
    }
  };

  // Get article by ID
  const getArticleById = (id) => {
    for (const category of Object.values(categories)) {
      const article = category.articles.find(a => a.id === id);
      if (article) return article;
    }
    return null;
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
              <p className="mt-1 text-sm text-gray-500">
                Find answers to common questions and learn how to use our platform.
              </p>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiDownload className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                Download PDF
              </button>
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiExternalLink className="-ml-1 mr-2 h-5 w-5" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6 space-y-6">
              {/* Search */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </div>

              {/* Popular Articles */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Popular Articles</h3>
                <ul className="space-y-2">
                  {popularArticles.map(article => (
                    <li key={article.id}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setExpandedArticle(article.id);
                          // Scroll to the article
                          document.getElementById(`article-${article.id}`)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-start"
                      >
                        <span className="truncate">{article.title}</span>
                        <span className="ml-auto text-xs text-gray-500 whitespace-nowrap">
                          {article.views} views
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Articles */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Recently Updated</h3>
                <ul className="space-y-2">
                  {recentArticles.map(article => (
                    <li key={article.id} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-blue-500 block"></span>
                      </div>
                      <div className="ml-2">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setExpandedArticle(article.id);
                            document.getElementById(`article-${article.id}`)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-sm text-gray-700 hover:text-gray-900 hover:underline"
                        >
                          {article.title}
                        </a>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Updated {formatDate(article.lastUpdated)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8 px-6">
                  {['all', 'popular', 'recent'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                  <div className="ml-auto flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Filter:</span>
                    <select
                      className="border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-500 text-sm"
                      value={activeFilter}
                      onChange={(e) => setActiveFilter(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="article">Articles</option>
                      <option value="video">Videos</option>
                    </select>
                  </div>
                </nav>
              </div>
            </div>

            {/* Search Results Count */}
            {searchQuery && (
              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  {filteredArticles.length} {filteredArticles.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                </p>
              </div>
            )}

            {/* Categories and Articles */}
            <div className="space-y-4">
              {Object.entries(categories).map(([categoryId, category]) => {
                const categoryArticles = category.articles.filter(article => 
                  filteredArticles.some(fa => fa.id === article.id)
                );
                
                if (categoryArticles.length === 0 && searchQuery) return null;
                
                return (
                  <div key={categoryId} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(categoryId)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 focus:outline-none"
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{category.icon}</span>
                        <h2 className="text-lg font-medium text-gray-900">{category.title}</h2>
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {categoryArticles.length}
                        </span>
                      </div>
                      {expandedCategories[categoryId] ? (
                        <FiChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <FiChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>

                    {/* Articles List */}
                    <AnimatePresence>
                      {expandedCategories[categoryId] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <ul className="divide-y divide-gray-200">
                            {categoryArticles.map((article) => (
                              <li key={article.id} id={`article-${article.id}`} className="hover:bg-gray-50">
                                <div className="px-4 py-4 sm:px-6">
                                  {/* Article Header */}
                                  <div 
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleArticle(article.id)}
                                  >
                                    <div className="flex items-center">
                                      <span className={`h-2 w-2 rounded-full mr-3 ${
                                        viewedArticles.has(article.id) ? 'bg-gray-300' : 'bg-blue-500'
                                      }`}></span>
                                      <p className="text-sm font-medium text-blue-600 truncate">
                                        {article.title}
                                      </p>
                                      {article.type === 'video' && (
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                          Video
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                      <span className="flex items-center mr-4">
                                        <FiThumbsUp className="mr-1" /> {article.likes}
                                      </span>
                                      <span className="flex items-center">
                                        <FiClock className="mr-1" /> {article.views}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Article Content */}
                                  <AnimatePresence>
                                    {expandedArticle === article.id && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="mt-4 pt-4 border-t border-gray-200"
                                      >
                                        <div 
                                          className="prose prose-sm max-w-none"
                                          dangerouslySetInnerHTML={{ __html: article.content }}
                                        />
                                        
                                        {/* Tags */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                          {article.tags.map(tag => (
                                            <span 
                                              key={tag} 
                                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                                            >
                                              <FiTag className="mr-1 h-3 w-3" />
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                        
                                        {/* Article Footer */}
                                        <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                                          <div>
                                            Last updated on {formatDate(article.lastUpdated)} by {article.author}
                                          </div>
                                          <div className="flex space-x-4">
                                            <button 
                                              className="text-blue-600 hover:text-blue-800 flex items-center"
                                              onClick={() => {
                                                // Handle like
                                                console.log(`Liked article: ${article.id}`);
                                              }}
                                            >
                                              <FiThumbsUp className="mr-1 h-3 w-3" /> Helpful
                                            </button>
                                            <button 
                                              className="text-blue-600 hover:text-blue-800 flex items-center"
                                              onClick={() => {
                                                // Handle share
                                                console.log(`Sharing article: ${article.id}`);
                                              }}
                                            >
                                              <FiExternalLink className="mr-1 h-3 w-3" /> Share
                                            </button>
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* No Results */}
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <FiSearch className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No articles found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We couldn't find any articles matching your search. Try different keywords.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                        setActiveFilter('all');
                      }}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Clear search
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Status
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Privacy
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Terms
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Add any missing icons to ReactIcons
const addMissingIcons = () => {
  if (!window.ReactIcons) return;

  // FiTag
  if (!window.ReactIcons.FiTag) {
    window.ReactIcons.FiTag = () => (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    );
  }

  // FiThumbsUp
  if (!window.ReactIcons.FiThumbsUp) {
    window.ReactIcons.FiThumbsUp = () => (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
      </svg>
    );
  }
};

// Initialize the component with styles
const CollapsibleWithStyles = () => {
  // Add any missing icons
  useEffect(() => {
    addMissingIcons();
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900">
      <style>{`
        .prose {
          color: #374151;
        }
        .prose h3 {
          font-weight: 600;
          color: #111827;
          margin-top: 1.5em;
          margin-bottom: 0.75em;
          line-height: 1.5;
        }
        .prose h4 {
          font-weight: 500;
          color: #111827;
          margin-top: 1.25em;
          margin-bottom: 0.75em;
          line-height: 1.5;
        }
        .prose p {
          margin-top: 1em;
          margin-bottom: 1em;
          line-height: 1.625;
        }
        .prose ul {
          margin-top: 1em;
          margin-bottom: 1em;
        }
        .prose li {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }
        .prose a {
          color: #2563eb;
          text-decoration: none;
        }
        .prose a:hover {
          text-decoration: underline;
        }
      `}</style>
      <Collapsible_20 />
    </div>
  );
};

render(<CollapsibleWithStyles />);