/* ===== paste into react-live (scope: { React }) ===== */

/* ---- FloatingBadge component ---- */
const FloatingBadge = ({ text, color = 'bg-amber-500', ...props }) => (
  <div
    className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color}
    hover:animate-float hover:-translate-y-1 hover:shadow-lg
    transition-all duration-300 cursor-pointer`}
    {...props}
  >
    {text}
  </div>
);

/* ---- demo ---- */
const BadgeDemo7 = () => {
  // Add keyframes for the float animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
        100% { transform: translateY(0px); }
      }
      .hover\:animate-float:hover {
        animation: float 1.5s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="p-6 space-y-6 bg-white" style={{ minHeight: 300 }}>
      <h3 className="text-lg font-bold">Floating Badge</h3>
      <div className="flex flex-wrap gap-6 items-center">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Hover to float:</p>
          <FloatingBadge text="Hover Me" />
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Different color:</p>
          <FloatingBadge 
            text="Try Me" 
            color="bg-purple-500"
          />
        </div>
      </div>
      <p className="text-sm text-gray-600">Hover over badges to see them float</p>
    </div>
  );
};

render(<BadgeDemo7 />);
