
const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [activeAccount, setActiveAccount] = useState('jane-doe');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  const accounts = [
    {
      id: 'mia-john',
      name: 'Mia John',
      followers: '11.2k',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100',
      online: false
    },
    {
      id: 'arthur-melo',
      name: 'Arthur Melo',
      followers: '1.2k',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80',
      online: false
    },
    {
      id: 'jane-doe',
      name: 'Jane Doe',
      followers: '15.6k',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100',
      online: true
    },
    {
      id: 'amelia-anderson',
      name: 'Amelia Anderson',
      followers: '32.9k',
      avatar: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=80',
      online: false
    },
    {
      id: 'joseph-gonzalez',
      name: 'Joseph Gonzalez',
      followers: '100.2k',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80',
      online: false
    },
    {
      id: 'olivia-wathan',
      name: 'Olivia Wathan',
      followers: '8.6k',
      avatar: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&h=1470&q=80',
      online: true
    },
    {
      id: 'junior-reis',
      name: 'Junior REIS',
      followers: '56.6k',
      avatar: 'https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80',
      online: true
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="flex">
        <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700">
          <a href="#">
            <img className="w-auto h-6" src="https://merakiui.com/images/logo.svg" alt="Logo"/>
          </a>

          <button 
            onClick={() => setActiveTab('home')}
            className={`p-1.5 transition-colors duration-200 rounded-lg focus:outline-none ${activeTab === 'home' ? 'text-blue-500 bg-blue-100 dark:bg-gray-800' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>

          <button 
            onClick={() => setActiveTab('accounts')}
            className={`p-1.5 transition-colors duration-200 rounded-lg focus:outline-none ${activeTab === 'accounts' ? 'text-blue-500 bg-blue-100 dark:bg-gray-800' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </button>

          <button 
            onClick={() => setActiveTab('analytics')}
            className={`p-1.5 transition-colors duration-200 rounded-lg focus:outline-none ${activeTab === 'analytics' ? 'text-blue-500 bg-blue-100 dark:bg-gray-800' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
          </button>

          <button 
            onClick={() => setActiveTab('notifications')}
            className={`p-1.5 transition-colors duration-200 rounded-lg focus:outline-none ${activeTab === 'notifications' ? 'text-blue-500 bg-blue-100 dark:bg-gray-800' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>

          <button 
            onClick={() => setActiveTab('settings')}
            className={`p-1.5 transition-colors duration-200 rounded-lg focus:outline-none ${activeTab === 'settings' ? 'text-blue-500 bg-blue-100 dark:bg-gray-800' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
        
        <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
          <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Accounts</h2>

          <div className="mt-8 space-y-1">
            {accounts.map((account) => (
              <button 
                key={account.id}
                onClick={() => setActiveAccount(account.id)}
                className={`flex items-center w-full px-5 py-2 transition-colors duration-200 gap-x-2 focus:outline-none ${activeAccount === account.id ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <div className="relative">
                  <img className="object-cover w-8 h-8 rounded-full" src={account.avatar} alt={account.name}/>
                  {account.online && (
                    <span className="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
                  )}
                </div>
              
                <div className="text-left rtl:text-right">
                  <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">{account.name}</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{account.followers} Followers</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {activeTab === 'home' && 'Welcome to Dashboard'}
          {activeTab === 'accounts' && 'Accounts Overview'}
          {activeTab === 'analytics' && 'Analytics'}
          {activeTab === 'notifications' && 'Notifications'}
          {activeTab === 'settings' && 'Settings'}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {activeTab === 'home' && 'Here\'s what\'s happening with your accounts.'}
          {activeTab === 'accounts' && 'Manage your connected accounts and view their status.'}
          {activeTab === 'analytics' && 'View detailed analytics and performance metrics.'}
          {activeTab === 'notifications' && 'Your recent notifications will appear here.'}
          {activeTab === 'settings' && 'Customize your account settings and preferences.'}
        </p>
      </main>
    </div>
  );
};

const App = () => {
  return <Sidebar />;
};

render(<App />);
