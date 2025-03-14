import React from 'react'
import { Editable_28 } from '../_components/Editable_28'

export default function Example_28() {
  const handleSave = (content: string) => {
    console.log('Saved content:', content)
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Poll Creator
        </h2>
        <p className="text-gray-500">
          Create and manage interactive polls
        </p>
      </div>

      <div className="space-y-6">
        <Editable_28
          initialContent="What programming language do you primarily use for web development?"
          onSave={handleSave}
          totalVotes={245}
          options={[
            { id: 1, text: 'JavaScript', votes: 120 },
            { id: 2, text: 'TypeScript', votes: 85 },
            { id: 3, text: 'Python', votes: 25 },
            { id: 4, text: 'PHP', votes: 15 }
          ]}
        />

        <Editable_28
          initialContent="Which frontend framework do you prefer?"
          onSave={handleSave}
          totalVotes={189}
          options={[
            { id: 1, text: 'React', votes: 98 },
            { id: 2, text: 'Vue', votes: 45 },
            { id: 3, text: 'Angular', votes: 28 },
            { id: 4, text: 'Svelte', votes: 18 }
          ]}
        />

        <Editable_28
          initialContent="How do you prefer to style your web applications?"
          onSave={handleSave}
          totalVotes={156}
          options={[
            { id: 1, text: 'Tailwind CSS', votes: 72 },
            { id: 2, text: 'CSS Modules', votes: 35 },
            { id: 3, text: 'Styled Components', votes: 30 },
            { id: 4, text: 'SASS/SCSS', votes: 19 }
          ]}
        />

        <Editable_28
          initialContent="What's your preferred deployment platform?"
          onSave={handleSave}
          totalVotes={132}
          options={[
            { id: 1, text: 'Vercel', votes: 58 },
            { id: 2, text: 'AWS', votes: 42 },
            { id: 3, text: 'Netlify', votes: 22 },
            { id: 4, text: 'Digital Ocean', votes: 10 }
          ]}
        />
      </div>
    </div>
  )
}
