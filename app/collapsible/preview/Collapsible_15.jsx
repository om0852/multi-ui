
const Collapsible_15 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});

  const timelineData = [
    {
      id: 'education',
      title: 'Education',
      icon: '🎓',
      items: [
        {
          id: 'degree',
          title: 'Computer Science Degree',
          institution: 'Tech University',
          period: '2015 - 2019',
          description: 'Bachelor of Science in Computer Science with honors. Specialized in Web Development and Machine Learning.'
        },
        {
          id: 'bootcamp',
          title: 'Web Development Bootcamp',
          institution: 'Code Academy',
          period: '2018',
          description: 'Intensive 12-week program focusing on full-stack JavaScript development.'
        }
      ]
    },
    {
      id: 'work',
      title: 'Work Experience',
      icon: '💼',
      items: [
        {
          id: 'senior-dev',
          title: 'Senior Frontend Developer',
          institution: 'TechCorp Inc.',
          period: '2021 - Present',
          description: 'Leading the frontend team in developing responsive web applications using React and TypeScript.'
        },
        {
          id: 'dev',
          title: 'Frontend Developer',
          institution: 'WebSolutions Ltd.',
          period: '2019 - 2021',
          description: 'Developed and maintained client websites using modern JavaScript frameworks.'
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: '🚀',
      items: [
        {
          id: 'portfolio',
          title: 'Portfolio Website',
          institution: 'Personal Project',
          period: '2022',
          description: 'Designed and developed a responsive portfolio website using Next.js and Tailwind CSS.'
        },
        {
          id: 'ecommerce',
          title: 'E-commerce Platform',
          institution: 'Freelance',
          period: '2021',
          description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB.'
        }
      ]
    }
  ];

  const toggleItem = (sectionId, itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === itemId ? null : itemId
    }));
  };

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Interactive Timeline</h1>
          <p className="text-xl text-gray-600">Explore my professional journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>
          
          {timelineData.map((section, sectionIndex) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
              className="relative mb-8"
            >
              {/* Section header */}
              <div 
                className="flex items-center cursor-pointer mb-4"
                onClick={() => toggleSection(sectionIndex)}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center text-2xl z-10">
                  {section.icon}
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-800">
                  {section.title}
                </h2>
                <button className="ml-auto text-gray-500 hover:text-indigo-600">
                  {activeIndex === sectionIndex ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </button>
              </div>

              {/* Section content */}
              <AnimatePresence>
                {activeIndex === sectionIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-16 pl-6 border-l-2 border-indigo-100 overflow-hidden"
                  >
                    {section.items.map((item, itemIndex) => (
                      <div key={item.id} className="mb-6 last:mb-0">
                        <div 
                          className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => toggleItem(section.id, item.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                              <p className="text-indigo-600 font-medium">{item.institution}</p>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <FiClock className="mr-1" />
                                <span className="mr-4">{item.period}</span>
                                <FiMapPin className="mr-1" />
                                <span>Remote / On-site</span>
                              </div>
                            </div>
                            <button className="text-gray-400 hover:text-indigo-600">
                              {expandedItems[section.id] === item.id ? <FiMinus /> : <FiPlus />}
                            </button>
                          </div>
                          
                          <AnimatePresence>
                            {expandedItems[section.id] === item.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <p className="mt-3 text-gray-600 pt-3 border-t border-gray-100">
                                  {item.description}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tag) => (
                                    <span 
                                      key={tag}
                                      className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Connector line between items */}
                        {itemIndex < section.items.length - 1 && (
                          <div className="h-4 w-px bg-indigo-100 ml-5"></div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_15 />);
