import React from 'react'
import { Editable_30 } from '../_components/Editable_30'

export default function Example_30() {
  const handleSave = (content: string) => {
    console.log('Saved content:', content)
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Kanban Board
        </h2>
        <p className="text-gray-500">
          Drag and drop task cards to organize your workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="font-medium text-gray-700">To Do</h3>
          </div>
          
          <Editable_30
            initialContent="Research and document API requirements for the new payment gateway integration. Include authentication methods, endpoints, and data formats."
            onSave={handleSave}
            status="todo"
            dueDate="2024-04-10"
            assignee="Sarah Chen"
            labels={[
              { id: 1, text: 'Research', color: 'blue' },
              { id: 2, text: 'Documentation', color: 'purple' }
            ]}
          />

          <Editable_30
            initialContent="Create wireframes for the new user dashboard based on the requirements document. Focus on mobile responsiveness and accessibility."
            onSave={handleSave}
            status="todo"
            dueDate="2024-04-12"
            assignee="Michael Lee"
            labels={[
              { id: 1, text: 'Design', color: 'green' },
              { id: 2, text: 'UX', color: 'yellow' }
            ]}
          />
        </div>

        <div className="space-y-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <h3 className="font-medium text-blue-700">In Progress</h3>
          </div>
          
          <Editable_30
            initialContent="Implement user authentication system with OAuth integration. Include social login options and email verification flow."
            onSave={handleSave}
            status="in-progress"
            dueDate="2024-04-05"
            assignee="David Kim"
            labels={[
              { id: 1, text: 'Feature', color: 'blue' },
              { id: 2, text: 'High Priority', color: 'red' }
            ]}
          />

          <Editable_30
            initialContent="Optimize database queries for the reporting module. Current queries are taking too long to execute and causing performance issues."
            onSave={handleSave}
            status="in-progress"
            dueDate="2024-04-07"
            assignee="Priya Patel"
            labels={[
              { id: 1, text: 'Backend', color: 'purple' },
              { id: 2, text: 'Performance', color: 'yellow' }
            ]}
          />
        </div>

        <div className="space-y-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <h3 className="font-medium text-yellow-700">Review</h3>
          </div>
          
          <Editable_30
            initialContent="Create responsive dashboard UI components based on the approved design mockups. Implement dark/light mode toggle and ensure accessibility compliance."
            onSave={handleSave}
            status="review"
            dueDate="2024-04-03"
            assignee="James Wilson"
            labels={[
              { id: 1, text: 'Frontend', color: 'green' },
              { id: 2, text: 'UI', color: 'blue' }
            ]}
          />

          <Editable_30
            initialContent="Write unit tests for the new payment processing module. Ensure all edge cases are covered and integration with the payment gateway is properly tested."
            onSave={handleSave}
            status="review"
            dueDate="2024-04-04"
            assignee="Emma Garcia"
            labels={[
              { id: 1, text: 'Testing', color: 'purple' },
              { id: 2, text: 'QA', color: 'blue' }
            ]}
          />
        </div>

        <div className="space-y-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <h3 className="font-medium text-green-700">Done</h3>
          </div>
          
          <Editable_30
            initialContent="Set up CI/CD pipeline with GitHub Actions. Configure automated testing, linting, and deployment to staging environment."
            onSave={handleSave}
            status="done"
            dueDate="2024-03-28"
            assignee="Alex Johnson"
            labels={[
              { id: 1, text: 'DevOps', color: 'blue' },
              { id: 2, text: 'Infrastructure', color: 'yellow' }
            ]}
          />

          <Editable_30
            initialContent="Create project documentation including architecture diagrams, API documentation, and setup instructions for new developers."
            onSave={handleSave}
            status="done"
            dueDate="2024-03-30"
            assignee="Olivia Martinez"
            labels={[
              { id: 1, text: 'Documentation', color: 'green' },
              { id: 2, text: 'Onboarding', color: 'purple' }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
