
const Collapsible_13 = () => {
  const [openItems, setOpenItems] = useState({});

  const faqItems = [
    {
      id: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days. Express shipping is available for faster delivery.'
    },
    {
      id: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy. Items must be in original condition with tags attached.'
    },
    {
      id: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay.'
    },
    {
      id: 'warranty',
      question: 'Do your products come with a warranty?',
      answer: 'Yes, all our products come with a 1-year manufacturer warranty against defects.'
    }
  ];

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
          >
            <motion.button
              initial={false}
              onClick={() => toggleItem(item.id)}
              className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                openItems[item.id] ? 'bg-indigo-50' : 'hover:bg-gray-50'
              }`}
            >
              <span className="font-medium text-gray-800 text-lg">{item.question}</span>
              <motion.span
                animate={{ rotate: openItems[item.id] ? 180 : 0 }}
                className="text-indigo-600"
              >
                {openItems[item.id] ? <FiMinus size={20} /> : <FiPlus size={20} />}
              </motion.span>
            </motion.button>
            
            <AnimatePresence>
              {openItems[item.id] && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Can't find what you're looking for? <a href="#" className="text-indigo-600 hover:underline">Contact our support</a></p>
      </div>
    </div>
  );
};

render(<Collapsible_13 />);
