"use client";

import React from "react";
import { Editable_41 } from "../_components/Editable_41";

export default function Example_41() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  const features = [
    {
      id: "1",
      name: "Workout Types",
      description: "Available workout categories",
      included: {
        basic: "3 types",
        pro: "10 types",
        elite: "Unlimited"
      }
    },
    {
      id: "2",
      name: "Custom Programs",
      description: "Create personalized workout plans",
      included: {
        basic: false,
        pro: true,
        elite: true
      }
    },
    {
      id: "3",
      name: "Progress Tracking",
      description: "Track your fitness progress",
      included: {
        basic: "Basic",
        pro: "Advanced",
        elite: "Premium"
      }
    }
  ];

  const plans = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for beginners",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: {
        workoutTypes: "3 types",
        customPrograms: false,
        progressTracking: "Basic"
      },
      cta: "Start Free"
    },
    {
      id: "pro",
      name: "Pro",
      description: "For serious athletes",
      monthlyPrice: 15,
      yearlyPrice: 150,
      features: {
        workoutTypes: "10 types",
        customPrograms: true,
        progressTracking: "Advanced"
      },
      popular: true,
      cta: "Go Pro"
    },
    {
      id: "elite",
      name: "Elite",
      description: "Ultimate fitness experience",
      monthlyPrice: 30,
      yearlyPrice: 300,
      features: {
        workoutTypes: "Unlimited",
        customPrograms: true,
        progressTracking: "Premium"
      },
      cta: "Get Elite"
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Workout Plans</h1>
        <p className="text-gray-600">
          Choose the perfect plan for your fitness journey
        </p>
      </div>

      <Editable_41
        initialContent="Transform your fitness journey with our flexible workout plans"
        onSave={handleSave}
        features={features}
        plans={plans}
        className="bg-white rounded-xl shadow-lg"
      />
    </div>
  );
}

