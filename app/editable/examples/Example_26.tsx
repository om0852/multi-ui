import React from 'react'
import { Editable_26 } from '../_components/Editable_26'

export default function Example_26() {
  const handleSave = (content: string) => {
    console.log('Saved content:', content)
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Task Management
        </h2>
        <p className="text-gray-500">
          Track and manage your project tasks
        </p>
      </div>

      <div className="space-y-4">
        <Editable_26
          initialContent="Implement user authentication system with OAuth integration. Include social login options (Google, GitHub, Twitter) and email verification flow. Ensure GDPR compliance for data collection."
          onSave={handleSave}
          priority="high"
          dueDate="2024-04-05"
          assignee="Sarah Chen"
        />

        <Editable_26
          initialContent="Create responsive dashboard UI components based on the approved design mockups. Implement dark/light mode toggle and ensure accessibility compliance (WCAG 2.1 AA)."
          onSave={handleSave}
          priority="medium"
          dueDate="2024-04-10"
          assignee="Michael Lee"
        />

        <Editable_26
          initialContent="Write comprehensive API documentation using OpenAPI specification. Include authentication requirements, request/response examples, and error handling guidelines."
          onSave={handleSave}
          priority="medium"
          dueDate="2024-04-12"
          assignee="David Kim"
        />

        <Editable_26
          initialContent="Set up automated testing pipeline with Jest and Cypress. Configure GitHub Actions for CI/CD integration. Aim for 80%+ code coverage for critical paths."
          onSave={handleSave}
          priority="high"
          dueDate="2024-04-08"
          assignee="Priya Patel"
        />

        <Editable_26
          initialContent="Conduct performance audit and optimize loading times. Focus on image optimization, code splitting, and lazy loading. Target Lighthouse performance score of 90+."
          onSave={handleSave}
          priority="low"
          dueDate="2024-04-15"
          assignee="James Wilson"
        />
      </div>
    </div>
  )
}
