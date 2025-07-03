
const Collapsible_5 = () => {
  const faqItems = [
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Just sign up for an account and follow the onboarding process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
      {faqItems.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-5 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
          >
            <span className="font-medium text-gray-800">{item.question}</span>
            <span className={`text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-48' : 'max-h-0'
            }`}
          >
            <div className="p-5 pt-0 text-gray-600">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

render(<Collapsible_5 />);
