'use client';
import React, { useState } from 'react';

const socialAnimation = `
  @keyframes likeEffect {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const Collapsible_39: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div style={{
      margin: '16px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      transform: isOpen ? 'translateY(-2px)' : 'none',
    }}>
      <style>{socialAnimation}</style>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px',
          cursor: 'pointer',
          borderBottom: isOpen ? '1px solid #f0f0f0' : 'none',
          background: '#ffffff',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '12px',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #ff6b6b, #ffc0cb)',
            marginRight: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.2rem',
          }}>
            {title.charAt(0)}
          </div>
          <div style={{
            flex: 1,
          }}>
            <h3 style={{
              margin: 0,
              fontSize: '1rem',
              fontWeight: 600,
              color: '#1a1a1a',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}>
              {title}
            </h3>
            <div style={{
              fontSize: '0.8rem',
              color: '#666',
              marginTop: '2px',
            }}>
              Just now
            </div>
          </div>
          <div style={{
            color: '#666',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
            transition: 'transform 0.3s ease',
          }}>
            ▼
          </div>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          padding: '16px',
          color: '#333',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}>
          {children}
        </div>
        
        <div style={{
          padding: '12px 16px',
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <button
            onClick={handleLike}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: isLiked ? '#ff4f4f' : '#666',
              fontSize: '0.9rem',
              animation: isLiked ? 'likeEffect 0.3s ease' : 'none',
            }}
          >
            {isLiked ? '❤️' : '🤍'} {likes}
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#666',
              fontSize: '0.9rem',
            }}
          >
            💬 Comment
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#666',
              fontSize: '0.9rem',
            }}
          >
            ↗️ Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collapsible_39; 