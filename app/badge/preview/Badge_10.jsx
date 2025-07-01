/* ===== paste into react-live (scope: { React, useEffect }) ===== */

/* ---- NeonBadge component ---- */
const NeonBadge = ({ 
  text, 
  color = "bg-fuchsia-500 dark:bg-fuchsia-600",
  ...props 
}) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes neon-pulse {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.3); }
      }
      .hover\:animate-neon-pulse:hover { 
        animation: neon-pulse 1s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div
      className={`inline-block px-4 py-2 font-semibold rounded-lg cursor-pointer
      ${color} text-white hover:animate-neon-pulse
      hover:shadow-[0_0_15px_rgba(217,70,219,0.5)] 
      dark:hover:shadow-[0_0_20px_rgba(217,70,219,0.7)]
      transition-all duration-300`}
      {...props}
    >
      {text}
    </div>
  );
};

/* ---- demo ---- */
const BadgeDemo10 = () => (
  <div className="p-6 space-y-6 bg-white dark:bg-gray-900" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold dark:text-white">Neon Badge</h3>
    <div className="flex flex-wrap gap-6 items-center">
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Default:</p>
        <NeonBadge text="Neon Effect" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Custom color:</p>
        <NeonBadge 
          text="Custom Neon" 
          color="bg-cyan-500 dark:bg-cyan-600"
        />
      </div>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400">Hover to see the neon pulse effect</p>
  </div>
);

render(<BadgeDemo10 />);
