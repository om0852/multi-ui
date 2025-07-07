
const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState('users');
  const [activeSubAccordion, setActiveSubAccordion] = useState('users-sub-1');

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const toggleSubAccordion = (id) => {
    setActiveSubAccordion(activeSubAccordion === id ? null : id);
  };

  if (!mounted) return null;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="px-6">
          <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
            Brand
          </a>
        </div>
        
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Dashboard
              </a>
            </li>

            <li className="hs-accordion" id="users-accordion">
              <button 
                type="button" 
                className={`hs-accordion-toggle ${activeAccordion === 'users' ? 'hs-accordion-active:text-blue-600' : ''} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100`}
                onClick={() => toggleAccordion('users')}
                aria-expanded={activeAccordion === 'users'}
                aria-controls="users-accordion-child"
              >
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Users
                <svg 
                  className={`${activeAccordion === 'users' ? 'block' : 'hidden'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"/>
                </svg>
                <svg 
                  className={`${activeAccordion === 'users' ? 'hidden' : 'block'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>

              <div 
                id="users-accordion-child" 
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'users' ? '' : 'hidden'}`} 
                aria-labelledby="users-accordion"
              >
                <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                  <li className="hs-accordion" id="users-accordion-sub-1">
                    <button 
                      type="button" 
                      className={`hs-accordion-toggle ${activeSubAccordion === 'users-sub-1' ? 'hs-accordion-active:text-blue-600' : ''} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100`}
                      onClick={() => toggleSubAccordion('users-sub-1')}
                      aria-expanded={activeSubAccordion === 'users-sub-1'}
                      aria-controls="users-accordion-sub-1-child"
                    >
                      Sub Menu 1
                      <svg 
                        className={`${activeSubAccordion === 'users-sub-1' ? 'block' : 'hidden'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6"/>
                      </svg>
                      <svg 
                        className={`${activeSubAccordion === 'users-sub-1' ? 'hidden' : 'block'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </button>

                    <div 
                      id="users-accordion-sub-1-child" 
                      className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeSubAccordion === 'users-sub-1' ? '' : 'hidden'}`} 
                      aria-labelledby="users-accordion-sub-1"
                    >
                      <ul className="pt-2 ps-2">
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  
                  <li className="hs-accordion" id="users-accordion-sub-2">
                    <button 
                      type="button" 
                      className={`hs-accordion-toggle ${activeSubAccordion === 'users-sub-2' ? 'hs-accordion-active:text-blue-600' : ''} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100`}
                      onClick={() => toggleSubAccordion('users-sub-2')}
                      aria-expanded={activeSubAccordion === 'users-sub-2'}
                      aria-controls="users-accordion-sub-2-child"
                    >
                      Sub Menu 2
                      <svg 
                        className={`${activeSubAccordion === 'users-sub-2' ? 'block' : 'hidden'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6"/>
                      </svg>
                      <svg 
                        className={`${activeSubAccordion === 'users-sub-2' ? 'hidden' : 'block'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </button>

                    <div 
                      id="users-accordion-sub-2-child" 
                      className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeSubAccordion === 'users-sub-2' ? '' : 'hidden'}`} 
                      aria-labelledby="users-accordion-sub-2"
                    >
                      <ul className="pt-2 ps-2">
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li className="hs-accordion" id="account-accordion">
              <button 
                type="button" 
                className={`hs-accordion-toggle ${activeAccordion === 'account' ? 'hs-accordion-active:text-blue-600' : ''} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100`}
                onClick={() => toggleAccordion('account')}
                aria-expanded={activeAccordion === 'account'}
                aria-controls="account-accordion-child"
              >
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="15" r="3"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M10 15H6a4 4 0 0 0-4 4v2"/>
                  <path d="m21.7 16.4-.9-.3"/>
                  <path d="m15.2 13.9-.9-.3"/>
                  <path d="m16.6 18.7.3-.9"/>
                  <path d="m19.1 12.2.3-.9"/>
                  <path d="m19.6 18.7-.4-1"/>
                  <path d="m16.8 12.3-.4-1"/>
                  <path d="m14.3 16.6 1-.4"/>
                  <path d="m20.7 13.8 1-.4"/>
                </svg>
                Account
                <svg 
                  className={`${activeAccordion === 'account' ? 'block' : 'hidden'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"/>
                </svg>
                <svg 
                  className={`${activeAccordion === 'account' ? 'hidden' : 'block'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>

              <div 
                id="account-accordion-child" 
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'account' ? '' : 'hidden'}`} 
                aria-labelledby="account-accordion"
              >
                <ul className="pt-2 ps-2">
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="hs-accordion" id="projects-accordion">
              <button 
                type="button" 
                className={`hs-accordion-toggle ${activeAccordion === 'projects' ? 'hs-accordion-active:text-blue-600' : ''} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100`}
                onClick={() => toggleAccordion('projects')}
                aria-expanded={activeAccordion === 'projects'}
                aria-controls="projects-accordion-child"
              >
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/>
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/>
                  <path d="M15 2v5h5"/>
                </svg>
                Projects
                <svg 
                  className={`${activeAccordion === 'projects' ? 'block' : 'hidden'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"/>
                </svg>
                <svg 
                  className={`${activeAccordion === 'projects' ? 'hidden' : 'block'} ms-auto size-4 text-gray-600 group-hover:text-gray-500`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>

              <div 
                id="projects-accordion-child" 
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'projects' ? '' : 'hidden'}`} 
                aria-labelledby="projects-accordion"
              >
                <ul className="pt-2 ps-2">
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                  <path d="M8 14h.01"/>
                  <path d="M12 14h.01"/>
                  <path d="M16 14h.01"/>
                  <path d="M8 18h.01"/>
                  <path d="M12 18h.01"/>
                  <path d="M16 18h.01"/>
                </svg>
                Calendar
              </a>
            </li>
            
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-6 ml-64">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Main Content</h2>
          <p className="text-gray-600 dark:text-gray-300">
            This is the main content area. The sidebar on the left contains navigation items with collapsible sections.
            Click on the accordion items to expand/collapse them.
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Sidebar />;
};

render(<App />);
