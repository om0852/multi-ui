import React from 'react'
import { Editable_24 } from '../_components/Editable_24'

export default function Example_24() {
  const handleSave = (content: string) => {
    console.log('Saved content:', content)
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Calendar Events
        </h2>
        <p className="text-gray-500">
          Schedule and manage your daily activities
        </p>
      </div>

      <div className="space-y-4">
        <Editable_24
          initialContent="Weekly Team Sync
- Project updates from each team member
- Sprint planning for next week
- Review of current blockers
- Resource allocation discussion

Notes:
- Prepare sprint metrics
- Update project timeline
- Review team capacity"
          onSave={handleSave}
          category="meeting"
          date="2024-03-25"
          time="10:00 AM"
        />

        <Editable_24
          initialContent="Client Presentation: New Feature Demo
- Overview of new dashboard
- Live demonstration of key features
- Q&A session
- Next steps discussion

Preparation:
- Test demo environment
- Prepare backup slides
- Review talking points"
          onSave={handleSave}
          category="work"
          date="2024-03-25"
          time="02:00 PM"
        />

        <Editable_24
          initialContent="Gym Session
- Cardio warm-up (15 mins)
- Upper body workout
  • Bench press: 4 sets
  • Pull-ups: 3 sets
  • Shoulder press: 3 sets
- Cool down stretches

Remember to bring:
- Gym bag
- Water bottle
- Workout gloves"
          onSave={handleSave}
          category="personal"
          date="2024-03-25"
          time="05:30 PM"
        />

        <Editable_24
          initialContent="Tech Meetup: AI in Production
Speaker: Dr. Sarah Chen
Topic: Scaling ML Models

Key Points:
- Model deployment strategies
- Performance optimization
- Monitoring and maintenance
- Real-world case studies

Location: Virtual (Zoom link in email)"
          onSave={handleSave}
          category="other"
          date="2024-03-25"
          time="07:00 PM"
        />
      </div>
    </div>
  )
}
