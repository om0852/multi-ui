"use client";

import React from "react";
import { Editable_32 } from "../_components/Editable_32";

export default function Example_32() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Review System</h1>
        <p className="text-gray-600">
          Collect and manage customer feedback for your products with this interactive review system.
        </p>
      </div>

      <div className="space-y-6">
        <Editable_32
          initialContent="I've been using this laptop for about a month now and I'm extremely impressed with its performance. The battery life is exceptional, lasting me through an entire workday without needing to recharge. The display is crisp and vibrant, perfect for both work and entertainment. The keyboard has a nice tactile feel and the trackpad is responsive. Overall, this is one of the best laptops I've owned."
          onSave={handleSave}
          author="Emily Johnson"
          rating={5}
          timestamp="3 days ago"
          likes={24}
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
          className="mb-4"
        />

        <Editable_32
          initialContent="The smartphone camera quality is outstanding, especially in low light conditions. The user interface is intuitive and the phone runs smoothly even with multiple apps open. My only complaint is that the battery drains a bit faster than advertised when using resource-intensive applications. Otherwise, it's a solid device that I would recommend to others looking for a high-performance smartphone."
          onSave={handleSave}
          author="Michael Chen"
          rating={4}
          timestamp="1 week ago"
          likes={18}
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
          className="mb-4"
        />

        <Editable_32
          initialContent="These wireless earbuds have changed my daily commute experience. The noise cancellation is effective at blocking out ambient sounds, and the sound quality is rich and balanced. The battery life is impressive - I only need to charge the case once a week with my usage pattern. They're comfortable to wear for extended periods, and the touch controls are responsive without being too sensitive. Highly recommended!"
          onSave={handleSave}
          author="Sarah Williams"
          rating={5}
          timestamp="2 weeks ago"
          likes={32}
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          className="mb-4"
        />

        <Editable_32
          initialContent="I purchased this smart home hub to centralize control of my various devices. The setup was straightforward, and the companion app is well-designed. It integrates seamlessly with most of my existing smart devices, though I had some trouble connecting my older model lights. Customer support was helpful in resolving the issues. The voice recognition works well, even from across the room. It's a good value for the price."
          onSave={handleSave}
          author="David Rodriguez"
          rating={3}
          timestamp="1 month ago"
          likes={9}
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=David"
          className="mb-4"
        />
      </div>
    </div>
  );
}
