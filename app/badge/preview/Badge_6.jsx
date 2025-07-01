/* ===== paste into react-live (scope: { React }) ===== */

/* ---- FlipBadge component ---- */
const FlipBadge = ({ text, color = 'bg-rose-500', ...props }) => (
  <div className="group perspective" {...props}>
    <div className={`relative preserve-3d hover:rotate-y-180 duration-500 cursor-pointer w-32 h-10`}>
      <div className={`${color} px-4 py-2 text-white font-semibold rounded-lg backface-hidden absolute inset-0 flex items-center justify-center`}>
        {text}
      </div>
      <div className={`absolute inset-0 ${color} px-4 py-2 text-white font-semibold 
        rounded-lg backface-hidden rotate-y-180 bg-opacity-80 flex items-center justify-center`}>
        ✨
      </div>
    </div>
  </div>
);

/* ---- demo ---- */
const BadgeDemo6 = () => (
  <div className="p-6 space-y-6 bg-white" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold">Flip Badge</h3>
    <div className="flex flex-wrap gap-6 items-center">
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Hover to flip:</p>
        <FlipBadge text="Click Me" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Custom color:</p>
        <FlipBadge 
          text="Surprise!" 
          color="bg-blue-500"
        />
      </div>
    </div>
    <p className="text-sm text-gray-600">Try hovering over the badges to see them flip</p>
  </div>
);

render(<BadgeDemo6 />);
