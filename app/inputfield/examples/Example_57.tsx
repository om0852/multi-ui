import React, { useState } from 'react';
import InputField from '../_components/InputField_57';

const Example_57: React.FC = () => {
  const [formData, setFormData] = useState({
    gardenName: '',
    plantType: '',
    wateringSchedule: '',
    growthStage: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateGardenName = (name: string): boolean => {
    return name.length >= 3 && /^[a-zA-Z\s]+$/.test(name);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Natural background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2327ae60' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        opacity: 0.5,
        pointerEvents: 'none'
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        <h3 style={{ 
          color: '#27ae60',
          fontSize: '2.2rem',
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          Garden Planner
        </h3>
        <p style={{ 
          color: '#7f8c8d',
          fontFamily: "'Quicksand', sans-serif",
          fontSize: '1.1rem'
        }}>
          Track your garden&lsquo;s growth and care schedule
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        width: '100%',
        position: 'relative',
        justifyItems: 'center'
      }}>
        <div>
          <InputField
            label="Garden Name"
            placeholder="Enter your garden's name"
            value={formData.gardenName}
            onChange={handleChange('gardenName')}
            success={validateGardenName(formData.gardenName)}
            error={formData.gardenName && !validateGardenName(formData.gardenName) ? 'Please enter a valid name' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Plant Type"
            placeholder="What are you growing?"
            value={formData.plantType}
            onChange={handleChange('plantType')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="Watering Schedule"
            placeholder="How often to water?"
            value={formData.wateringSchedule}
            onChange={handleChange('wateringSchedule')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="Growth Stage"
            placeholder="Current growth phase"
            value={formData.growthStage}
            onChange={handleChange('growthStage')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(39, 174, 96, 0.1)',
        borderRadius: '12px',
        border: '2px solid #27ae60',
        color: '#27ae60',
        fontSize: '0.9rem',
        textAlign: 'center',
        fontFamily: "'Quicksand', sans-serif",
        position: 'relative',
        boxShadow: 'inset 0 2px 4px rgba(39, 174, 96, 0.1)'
      }}>
        Focus on any input field to see the natural elements bloom and grow
      </div>
    </div>
  );
};

export default Example_57; 