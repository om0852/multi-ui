import React from 'react'
import { Editable_29 } from '../_components/Editable_29'

export default function Example_29() {
  const handleSave = (content: string) => {
    console.log('Saved content:', content)
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Quote Generator
        </h2>
        <p className="text-gray-500">
          Create and manage professional quotes for clients
        </p>
      </div>

      <div className="space-y-8">
        <Editable_29
          initialContent="Website redesign project for ABC Corp. Includes responsive design, CMS integration, and SEO optimization. Valid for 30 days from issue date."
          onSave={handleSave}
          currency="$"
          tax={8.5}
          items={[
            { id: 1, description: 'UI/UX Design', quantity: 1, price: 2500 },
            { id: 2, description: 'Frontend Development', quantity: 1, price: 4000 },
            { id: 3, description: 'CMS Integration', quantity: 1, price: 1800 },
            { id: 4, description: 'SEO Optimization', quantity: 1, price: 1200 }
          ]}
        />

        <Editable_29
          initialContent="Mobile application development for XYZ Fitness. Includes iOS and Android versions, user authentication, and payment processing. 50% deposit required to begin work."
          onSave={handleSave}
          currency="$"
          tax={7.25}
          items={[
            { id: 1, description: 'App Design', quantity: 1, price: 3500 },
            { id: 2, description: 'iOS Development', quantity: 1, price: 6000 },
            { id: 3, description: 'Android Development', quantity: 1, price: 6000 },
            { id: 4, description: 'Backend API', quantity: 1, price: 4500 },
            { id: 5, description: 'Testing & QA', quantity: 40, price: 75 }
          ]}
        />

        <Editable_29
          initialContent="Monthly digital marketing services for Global Eats Restaurant. Includes social media management, content creation, and performance analytics. Initial 3-month commitment required."
          onSave={handleSave}
          currency="€"
          tax={19}
          items={[
            { id: 1, description: 'Social Media Management', quantity: 1, price: 1200 },
            { id: 2, description: 'Content Creation (10 posts)', quantity: 1, price: 800 },
            { id: 3, description: 'Performance Analytics', quantity: 1, price: 500 },
            { id: 4, description: 'Ad Campaign Management', quantity: 1, price: 750 }
          ]}
        />
      </div>
    </div>
  )
}
