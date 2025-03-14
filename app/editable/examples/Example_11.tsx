"use client";

import React from "react";
import { EditableContainer } from "../_components/Editable_11";

export default function Example_11() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Research Project Management</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Research Proposal</label>
          <EditableContainer
            initialContent={`# Impact of AI on Healthcare Delivery

## Research Question
How does the implementation of AI-driven diagnostic tools affect healthcare delivery efficiency and patient outcomes in primary care settings?

## Research Objectives
1. Evaluate the accuracy of AI diagnostic tools compared to traditional methods
2. Measure the impact on patient wait times and consultation duration
3. Assess healthcare provider satisfaction and workflow changes
4. Analyze cost-effectiveness of AI implementation

## Methodology
- Mixed-methods approach
- Randomized controlled trial
- Qualitative interviews with stakeholders
- Cost-benefit analysis`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
            placeholder="Enter research proposal details..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Data Collection Plan</label>
          <EditableContainer
            initialContent={`## Primary Data Sources
1. Patient Records (n=500)
   - Diagnostic accuracy rates
   - Treatment recommendations
   - Patient outcomes

2. Healthcare Provider Surveys (n=50)
   - Workflow efficiency metrics
   - User satisfaction scores
   - Technical challenges

3. Patient Interviews (n=100)
   - Experience satisfaction
   - Trust in AI diagnostics
   - Treatment compliance

## Timeline
- Month 1-2: Setup and recruitment
- Month 3-8: Data collection
- Month 9-10: Analysis
- Month 11-12: Report writing`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
            placeholder="Enter data collection details..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Resource Allocation</label>
          <EditableContainer
            initialContent={`# Project Resources

## Personnel
- Principal Investigator: Dr. Sarah Chen
- Research Associates (2): TBD
- Data Analysts (2): TBD
- Technical Support: AI Implementation Team

## Equipment
- AI Diagnostic System: $150,000
- Computing Resources: $25,000
- Data Storage: $10,000

## Budget Breakdown
1. Personnel Costs: $280,000
2. Equipment: $185,000
3. Software Licenses: $35,000
4. Patient Compensation: $25,000
5. Travel & Conferences: $15,000
6. Publication Costs: $10,000

Total Budget: $550,000`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
            placeholder="Enter resource allocation details..."
          />
        </div>
      </div>
    </div>
  );
}
