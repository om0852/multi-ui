
const Collapsible_7 = () => {
  const tabs = [
    {
      title: 'Overview',
      content: 'This is the overview tab content.'
    },
    {
      title: 'Features',
      content: 'This tab highlights the key features.'
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="relative overflow-hidden">
        <div
          className="transition-all duration-300"
          style={{
            transform: `translateX(-${activeTab * 100}%)`,
            width: `${tabs.length * 100}%`,
            display: 'flex'
          }}
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="w-full p-6"
              style={{ flex: '0 0 100%' }}
            >
              <p className="text-gray-700">{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_7 />);
