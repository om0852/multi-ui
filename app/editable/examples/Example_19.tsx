"use client";

import React from "react";
import { EditableContainer } from "../tsx/Editable_19";

export default function Example_19() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Research Notes
        </h2>
        <p className="text-gray-500">
          Document your research findings and observations
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Literature Review
          </label>
          <EditableContainer
            initialContent={`Title: Impact of AI on Healthcare Delivery
Author(s): Zhang et al. (2023)
Journal: Digital Health Quarterly
DOI: 10.1234/dhq.2023.789

Key Findings:
- 45% reduction in diagnostic errors
- Improved patient outcomes in 78% of cases
- Cost reduction of 30% in routine screenings

Methodology:
- Meta-analysis of 50 studies
- Data from 2018-2023
- Focus on diagnostic AI applications

Research Gaps:
- Limited long-term impact studies
- Need for standardized evaluation metrics
- Ethics considerations underdeveloped`}
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Experiment Notes
          </label>
          <EditableContainer
            initialContent={`Experiment ID: AI-HC-2024-001
Date: March 15, 2024
Location: University Medical Center

Setup:
- Control group: 100 cases
- Test group: 100 cases
- AI system: HealthAI v2.1
- Duration: 3 months

Observations:
1. AI accuracy rate: 94.5%
2. Average response time: 2.3 seconds
3. False positive rate: 3.2%
4. User satisfaction: 4.2/5.0

Technical Notes:
- System calibration required weekly
- Data preprocessing crucial
- Network latency impacts noted`}
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Future Directions
          </label>
          <EditableContainer
            initialContent={`Research Priorities:

1. Algorithm Enhancement
   - Improve accuracy in edge cases
   - Reduce false positives
   - Optimize processing speed

2. Integration Studies
   - EMR system compatibility
   - Clinical workflow impact
   - Staff training requirements

3. Validation Studies
   - Multi-center trials
   - Diverse patient populations
   - Long-term effectiveness

4. Ethical Considerations
   - Privacy frameworks
   - Consent protocols
   - Bias mitigation strategies`}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
