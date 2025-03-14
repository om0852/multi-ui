"use client";

import React from "react";
import { Editable_33 } from "../_components/Editable_33";

export default function Example_33() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Social Media Feed</h1>
        <p className="text-gray-600">
          An interactive social media feed with editable posts, likes, comments, and reposts.
        </p>
      </div>

      <div className="space-y-4">
        <Editable_33
          initialContent="Just launched our new product today! After months of hard work, I'm excited to share that our team has created something truly innovative. Check out the link in my bio for more details. #ProductLaunch #Innovation #TechNews"
          onSave={handleSave}
          username="Alex Morgan"
          userHandle="@alexmorgan"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
          attachedImage="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          likes={128}
          reposts={45}
          comments={23}
        />

        <Editable_33
          initialContent="The conference was amazing! Met so many brilliant minds and learned about cutting-edge technologies. Can't wait to implement some of these ideas in our next project. #TechConference #Networking #ProfessionalDevelopment"
          onSave={handleSave}
          username="Samantha Lee"
          userHandle="@samlee"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Samantha"
          likes={87}
          reposts={12}
          comments={9}
        />

        <Editable_33
          initialContent="Working on a new design system that will revolutionize our user experience. Early feedback has been incredibly positive. Stay tuned for the official announcement next week! #UXDesign #DesignSystem #ProductDesign"
          onSave={handleSave}
          username="Marcus Johnson"
          userHandle="@marcusj"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
          attachedImage="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          likes={215}
          reposts={78}
          comments={34}
        />

        <Editable_33
          initialContent="Just finished reading 'The Psychology of User Experience' - highly recommend for anyone in product development. It offers valuable insights into how users interact with digital products and how to design with human behavior in mind. #BookRecommendation #UX #ProductDevelopment"
          onSave={handleSave}
          username="Priya Patel"
          userHandle="@priyap"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
          likes={64}
          reposts={18}
          comments={7}
        />
      </div>
    </div>
  );
}
