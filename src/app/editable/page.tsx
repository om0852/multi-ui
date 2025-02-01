'use client'

import React from 'react'
import { Editable_47 } from './_components/Editable_47'
import { Editable_48 } from './_components/Editable_48'
import { Editable_49 } from './_components/Editable_49'
import { Editable_50 } from './_components/Editable_50'
import { Editable_51 } from './_components/Editable_51'

const Page = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Modern UI Components</h1>
        
        <div className="space-y-8">
          {/* Notification Center */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Notification Center</h2>
            <Editable_47
              initialContent=""
              onSave={handleSave}
              className="w-full"
            />
          </section>

          {/* Multi-step Form */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Multi-step Form</h2>
            <Editable_48
              initialContent=""
              onSave={handleSave}
              className="w-full"
            />
          </section>

          {/* Comments and Discussion */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Comments and Discussion</h2>
            <Editable_49
              initialContent=""
              onSave={handleSave}
              className="w-full"
              currentUser={{
                id: 'current',
                name: 'Current User',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CurrentUser',
                role: 'Developer'
              }}
            />
          </section>

          {/* Search Interface */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Search Interface</h2>
            <Editable_50
              initialContent=""
              onSave={handleSave}
              className="w-full"
            />
          </section>

          {/* Code Editor */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Code Editor</h2>
            <Editable_51
              initialContent=""
              onSave={handleSave}
              className="w-full"
              language="typescript"
              theme="light"
              showLineNumbers={true}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Page
