
const Collapsible_9 = () => {
  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on 'Forgot Password' on the login page.",
      icon: "🔑"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal.",
      icon: "💳"
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-5 text-left flex items-center justify-between focus:outline-none"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-4">{item.icon}</span>
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
              </div>
              <span className="text-gray-500">
                {openIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </span>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <div className="px-5 pb-5 pl-16 text-gray-600">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

render(<Collapsible_9 />);
