const Test_1 = () => {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Test_1</h1>
        <p className="text-gray-600 mb-4">This is a test component for testing</p>
        <button 
          onClick={() => alert('Button clicked')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mb-4 transition duration-200"
        >
          Click me
        </button>
        <input 
          type="text" 
          placeholder="Enter your name"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <select className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="1">Option 100</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <textarea 
          placeholder="Enter your message"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
        />
        <label className="block text-gray-700 font-medium">Test Label</label>
      </div>
    );
  }

  export default Test_1;
  