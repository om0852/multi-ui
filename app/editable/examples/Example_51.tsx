"use client";

import React from "react";
import { Editable_51 } from "../_components/Editable_51";

export default function Example_51() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Code Snippets</h1>
        <p className="text-gray-600">
          A collection of reusable code snippets with syntax highlighting
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">React Component</h3>
          <Editable_51
            initialContent="import React, { useState } from 'react';

interface Props {
  initialCount?: number;
}

export const Counter: React.FC<Props> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className='p-4 border rounded-lg'>
      <p className='text-lg'>Count: {count}</p>
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded'
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
};"
            onSave={handleSave}
            language="typescript"
            theme="dark"
            showLineNumbers={true}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Python API Endpoint</h3>
          <Editable_51
            initialContent="from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class User(BaseModel):
    username: str
    email: str
    full_name: Optional[str] = None

@app.post('/users/')
async def create_user(user: User):
    try:
        # Add your database logic here
        return {
            'status': 'success',
            'message': 'User created successfully',
            'data': user.dict()
        }
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )"
            onSave={handleSave}
            language="python"
            theme="dark"
            showLineNumbers={true}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">SQL Query</h3>
          <Editable_51
            initialContent="WITH UserStats AS (
  SELECT
    u.id,
    u.username,
    COUNT(o.id) as total_orders,
    SUM(o.amount) as total_spent,
    AVG(o.amount) as avg_order_value
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
  GROUP BY u.id, u.username
)
SELECT
  us.*,
  RANK() OVER (ORDER BY total_spent DESC) as spending_rank
FROM UserStats us
HAVING total_orders >= 5
ORDER BY total_spent DESC
LIMIT 10;"
            onSave={handleSave}
            language="sql"
            theme="dark"
            showLineNumbers={true}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
} 