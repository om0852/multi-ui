"use client"

import { useState } from "react"
import { FloatingTextarea } from "./_components/Textarea_5"

export default function ExampleUsage() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue1(e.target.value)
    if (e.target.value.length < 10) {
      setError("Please enter at least 10 characters")
    } else {
      setError("")
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 p-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Floating Label Textarea</h2>
        <FloatingTextarea
          label="Your Message"
          placeholder="Type your message here"
          value={value1}
          onChange={handleChange}
          error={error}
          required
          helperText="Share your thoughts with us"
          showCharacterCount
          maxLength={200}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Custom Styled Textarea</h2>
        <FloatingTextarea
          label="Custom Theme"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          className="border-purple-200 focus:border-purple-500"
          labelClassName="text-purple-500"
          containerClassName="max-w-md"
          helperText="This textarea has custom purple theme"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Disabled State</h2>
        <FloatingTextarea
          label="Disabled Input"
          placeholder="This textarea is disabled"
          disabled
          helperText="You cannot edit this textarea"
        />
      </div>
    </div>
  );
}

