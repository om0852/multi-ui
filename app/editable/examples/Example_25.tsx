import React from 'react'
import { Editable_25 } from '../_components/Editable_25'

export default function Example_25() {
  const handleSave = (content: string) => {
    console.log('Saved content:', content)
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Markdown Editor
        </h2>
        <p className="text-gray-500">
          Create and edit content with markdown formatting
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Project Documentation
          </label>
          <Editable_25
            initialContent={`# Project Overview

## Introduction
This project aims to create a scalable, user-friendly platform for data visualization and analysis.

## Key Features
- Real-time data processing
- Interactive dashboards
- Custom report generation
- Multi-user collaboration

## Technical Stack
- Frontend: React, TypeScript, D3.js
- Backend: Node.js, Express
- Database: PostgreSQL
- Deployment: Docker, AWS`}
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Meeting Notes
          </label>
          <Editable_25
            initialContent={`# Team Meeting - March 25, 2024

## Attendees
- Sarah Chen (Product)
- Michael Lee (Engineering)
- Priya Patel (Design)
- David Kim (QA)

## Agenda Items
1. Sprint review
2. Feature prioritization
3. Upcoming deadlines
4. Open issues

## Action Items
- [ ] Update project roadmap
- [ ] Schedule user testing
- [ ] Finalize Q2 milestones
- [ ] Review resource allocation`}
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Research Notes
          </label>
          <Editable_25
            initialContent={`# Market Research Findings

## Competitor Analysis
| Competitor | Strengths | Weaknesses |
|------------|-----------|------------|
| CompanyA   | UI/UX, Mobile | Enterprise features |
| CompanyB   | Data processing | Pricing model |
| CompanyC   | Integration | Performance |

## User Feedback
> "The dashboard customization is exactly what we needed for our team's workflow."

> "Would like to see more export options and better collaboration features."

## Next Steps
* Conduct user interviews
* Analyze feature adoption rates
* Review pricing strategies
* Identify partnership opportunities`}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  )
}
