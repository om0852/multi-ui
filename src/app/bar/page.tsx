'use client'

import PieChart from "./_components/Bar_16"


export default function App() {
  const data = [
    { id: '1', label: 'Food', value: 120, color: '#f39c12' },
    { id: '2', label: 'Rent', value: 200, color: '#3498db' },
    { id: '3', label: 'Transport', value: 80, color: '#e74c3c' },
    { id: '4', label: 'Entertainment', value: 60, color: '#2ecc71' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Expense Breakdown</h1>
        <PieChart data={data} />
      </div>
    </div>
  )
}
