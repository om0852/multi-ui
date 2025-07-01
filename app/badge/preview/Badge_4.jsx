/* ===== paste into react-live (scope: { React }) ===== */

/* ---- GradientBadge component ---- */
const GradientBadge = ({ text, gradient = 'from-purple-500 to-pink-500', ...props }) => (
  <span
    className={`inline-block px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r ${gradient} shadow-md hover:shadow-lg transition-shadow duration-300`}
    {...props}
  >
    {text}
  </span>
);

/* ---- demo ---- */
const BadgeDemo4 = () => (
  <div className="p-6 space-y-6 bg-white" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold">Gradient Badge</h3>
    <div className="flex flex-wrap gap-3 items-center">
      <GradientBadge text="Default" />
      <GradientBadge 
        text="Sunset" 
        gradient="from-orange-500 to-pink-500" 
      />
      <GradientBadge 
        text="Ocean" 
        gradient="from-blue-500 to-cyan-400" 
      />
      <GradientBadge 
        text="Forest" 
        gradient="from-green-500 to-emerald-400" 
      />
    </div>
    <p className="text-sm text-gray-600">Hover to see shadow effect</p>
  </div>
);

render(<BadgeDemo4 />);
