/* ===== paste into react-live (scope: { React, useState, useEffect }) ===== */

/* ---- OrbitingDotsBadge component ---- */
const OrbitingDotsBadge = ({
  text,
  color = "bg-purple-600 dark:bg-purple-700",
  dotColor = "bg-pink-400 dark:bg-pink-300",
  ...props
}) => {
  const [dots] = useState(new Array(6).fill(0));
  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes orbit {
        0% { transform: rotate(0deg) translate(60px) rotate(0deg); }
        100% { transform: rotate(360deg) translate(60px) rotate(-360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="relative flex items-center justify-center p-10" {...props}>
      <span
        className={`relative z-10 px-6 py-3 text-white font-semibold rounded-full ${color}`}
      >
        {text}
      </span>
      {dots.map((_, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 ${dotColor} rounded-full`}
          style={{
            animation: `orbit 3s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

/* ---- demo ---- */
const BadgeDemo11 = () => (
  <div className="p-6 space-y-6 bg-white dark:bg-gray-900" style={{ minHeight: 400 }}>
    <h3 className="text-lg font-bold dark:text-white">Orbiting Dots Badge</h3>
    
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Default:</p>
        <OrbitingDotsBadge text="Orbiting Dots" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Custom colors:</p>
        <OrbitingDotsBadge 
          text="Custom Dots" 
          color="bg-blue-600 dark:bg-blue-700"
          dotColor="bg-amber-400 dark:bg-amber-300"
        />
      </div>
    </div>
    
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Watch the dots orbit around the badge
    </p>
  </div>
);

render(<BadgeDemo11 />);
