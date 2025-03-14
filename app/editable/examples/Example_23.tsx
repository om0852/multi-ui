"use client";

import React from "react";
import { Editable_23 } from "../_components/Editable_23";

export default function Example_23() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-900">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-100">
          Code Snippets
        </h2>
        <p className="text-gray-400">
          Collection of reusable code examples
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            React Component
          </label>
          <Editable_23
            initialContent={`import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`}
            onSave={handleSave}
            language="typescript"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            API Endpoint
          </label>
          <Editable_23
            initialContent={`const express = require('express');
const router = express.Router();

router.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;`}
            onSave={handleSave}
            language="javascript"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Database Query
          </label>
          <Editable_23
            initialContent={`SELECT 
  users.id,
  users.name,
  COUNT(orders.id) as total_orders,
  SUM(orders.amount) as total_spent
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE orders.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY users.id, users.name
HAVING total_orders > 0
ORDER BY total_spent DESC
LIMIT 10;`}
            onSave={handleSave}
            language="sql"
          />
        </div>
      </div>
    </div>
  );
}
