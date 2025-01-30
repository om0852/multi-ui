'use client';
import React, { useState } from 'react';

const taskAnimation = `
  @keyframes checkmark {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes progressFill {
    from { width: 0; }
    to { width: var(--progress-width); }
  }
`;

const Collapsible_45: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [completedTasks, setCompletedTasks] = useState(0);
  const totalTasks = 5;

  const handleTaskComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedTasks(prev => (prev < totalTasks ? prev + 1 : 0));
  };

  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div style={{
      margin: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <style>{taskAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 20px',
          cursor: 'pointer',
          borderBottom: '1px solid #eee',
          background: '#f8f9fa',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: '#4CAF50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}>
              ✓
            </div>
            <h3 style={{
              margin: 0,
              fontSize: '1.1rem',
              color: '#2c3e50',
              fontWeight: 600,
            }}>
              {title}
            </h3>
          </div>
          <div style={{
            color: '#95a5a6',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>
            ▼
          </div>
        </div>

        <div style={{
          background: '#e9ecef',
          height: '6px',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: '#4CAF50',
              transition: 'width 0.3s ease',
              animation: 'progressFill 0.5s ease-out',
              '--progress-width': `${progress}%`,
            } as any}
          />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px',
          fontSize: '0.9rem',
          color: '#95a5a6',
        }}>
          <span>{completedTasks} of {totalTasks} tasks completed</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '16px 20px',
        }}>
          {Array.from({ length: totalTasks }).map((_, i) => (
            <div
              key={i}
              onClick={handleTaskComplete}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 0',
                cursor: 'pointer',
                color: i < completedTasks ? '#95a5a6' : '#2c3e50',
                textDecoration: i < completedTasks ? 'line-through' : 'none',
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid',
                borderColor: i < completedTasks ? '#4CAF50' : '#bdc3c7',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                background: i < completedTasks ? '#4CAF50' : 'transparent',
                transition: 'all 0.2s ease',
              }}>
                {i < completedTasks && <span style={{
                  animation: 'checkmark 0.2s ease-out',
                }}>✓</span>}
              </div>
              <span>Task {i + 1}</span>
            </div>
          ))}
          <div style={{
            marginTop: '16px',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
            fontSize: '0.95rem',
            color: '#2c3e50',
            lineHeight: '1.6',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_45; 