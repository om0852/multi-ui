"use client";

import React from "react";
import { Editable_37 } from "../_components/Editable_37";

export default function Example_37() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Team Calendar</h1>
        <p className="text-gray-600">
          Schedule and manage team meetings and events
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editable_37
          initialContent="Review Q2 project progress and discuss upcoming milestones. Topics include:
- Sprint retrospective
- Resource allocation
- Timeline adjustments
- Risk assessment"
          onSave={handleSave}
          eventTitle="Q2 Project Review"
          startDate="2024-04-15T10:00"
          endDate="2024-04-15T11:30"
          isOnline={true}
          meetingLink="https://meet.google.com/abc-defg-hij"
          attendees={[
            {
              id: "1",
              name: "Sarah Chen",
              email: "sarah.chen@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
              status: "accepted"
            },
            {
              id: "2",
              name: "Michael Lee",
              email: "michael.lee@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
              status: "accepted"
            },
            {
              id: "3",
              name: "David Kim",
              email: "david.kim@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
              status: "pending"
            }
          ]}
          reminderTime="15min"
        />

        <Editable_37
          initialContent="Monthly team building activity. Join us for:
- Team lunch
- Fun activities and games
- Recognition ceremony
- Planning for next month"
          onSave={handleSave}
          eventTitle="Team Building Day"
          startDate="2024-04-20T12:00"
          endDate="2024-04-20T16:00"
          isOnline={false}
          location="Central Park Conference Center"
          attendees={[
            {
              id: "1",
              name: "Emma Garcia",
              email: "emma.garcia@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
              status: "accepted"
            },
            {
              id: "2",
              name: "James Wilson",
              email: "james.wilson@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
              status: "tentative"
            },
            {
              id: "3",
              name: "Sophia Lee",
              email: "sophia.lee@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
              status: "pending"
            }
          ]}
          reminderTime="1day"
        />

        <Editable_37
          initialContent="Technical workshop on new authentication system implementation. Agenda:
- OAuth 2.0 overview
- Social login integration
- Security best practices
- Q&A session"
          onSave={handleSave}
          eventTitle="Auth System Workshop"
          startDate="2024-04-18T14:00"
          endDate="2024-04-18T16:00"
          isOnline={true}
          meetingLink="https://meet.google.com/xyz-abcd-efg"
          attendees={[
            {
              id: "1",
              name: "Alex Johnson",
              email: "alex.johnson@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
              status: "accepted"
            },
            {
              id: "2",
              name: "Priya Patel",
              email: "priya.patel@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
              status: "accepted"
            }
          ]}
          reminderTime="30min"
        />

        <Editable_37
          initialContent="Client presentation of new UI design and features. Topics:
- Design system overview
- Component showcase
- Responsive design
- Accessibility features"
          onSave={handleSave}
          eventTitle="Client Design Review"
          startDate="2024-04-22T09:00"
          endDate="2024-04-22T10:30"
          isOnline={true}
          meetingLink="https://meet.google.com/pqr-stuv-wxy"
          attendees={[
            {
              id: "1",
              name: "Lisa Chen",
              email: "lisa.chen@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
              status: "accepted"
            },
            {
              id: "2",
              name: "Tom Brown",
              email: "tom.brown@example.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
              status: "pending"
            }
          ]}
          reminderTime="1hour"
        />
      </div>
    </div>
  );
}
