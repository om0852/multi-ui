/* ===== paste into react-live (scope: { React }) ===== */

/* ---- BounceBadge component ---- */
const BounceBadge = ({ text, color = 'bg-yellow-500', ...props }) => (
  <span
    className={`inline-block px-4 py-2 text-white text-sm font-semibold rounded-full shadow-lg ${color} transform transition-transform duration-500 hover:animate-bounce`}
    {...props}
  >
    {text}
  </span>
);

/* ---- demo ---- */
const BadgeDemo2 = () => (
  <div className="p-6 space-y-6 bg-white" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold">Bounce Badge (hover)</h3>
    <div className="flex flex-wrap gap-3">
      <BounceBadge text="Default Yellow" />
      <BounceBadge text="Blue" color="bg-blue-500" />
      <BounceBadge text="Green" color="bg-green-500" />
      <BounceBadge text="Purple" color="bg-purple-500" />
    </div>
    <p className="text-sm text-gray-600">Hover any badge to see the bounce animation.</p>
  </div>
);

render(<BadgeDemo2 />);
