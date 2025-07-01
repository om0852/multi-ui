/* ===== paste into react-live (scope: { React }) ===== */

/* ---- BounceOnClickBadge component ---- */
const BounceOnClickBadge = ({ text, color = 'bg-red-500', ...props }) => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg cursor-pointer transition-transform duration-300 ${clicked ? 'animate-bounce' : ''} ${color}`}
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
      }}
      {...props}
    >
      {text}
    </div>
  );
};

/* ---- demo ---- */
const BadgeDemo3 = () => (
  <div className="p-6 space-y-6 bg-white" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold">Bounce Badge (on click)</h3>
    <div className="flex flex-wrap gap-3">
      <BounceOnClickBadge text="Click Me" />
      <BounceOnClickBadge text="Blue" color="bg-blue-500" />
      <BounceOnClickBadge text="Green" color="bg-green-500" />
      <BounceOnClickBadge text="Purple" color="bg-purple-500" />
    </div>
    <p className="text-sm text-gray-600">Click a badge to trigger the bounce animation.</p>
  </div>
);

render(<BadgeDemo3 />);
