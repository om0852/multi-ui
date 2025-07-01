/* ===== paste into react-live (scope: { React }) ===== */

/* --- component under demo --- */
const BlurBadge = ({
  text,
  color = 'bg-orange-500',
  ...props
}) => (
  <div
    className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} hover:blur-[1px] hover:scale-110 transition-all duration-300 cursor-pointer`}
    {...props}
  >
    {text}
  </div>
);

/* --- example page --- */
const BadgeExample1 = (props) => (
  <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800" {...props}>
    <h2 className="text-2xl font-bold text-white mb-6">Blur Badge</h2>

    {/* Basic usage */}
    <section className="space-y-3 max-w-xl mx-auto mb-8">
      <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
      <div className="flex flex-wrap gap-3">
        <BlurBadge text="Default Badge" />
      </div>
    </section>

    {/* Color variations */}
    <section className="space-y-3 max-w-xl mx-auto mb-8">
      <h3 className="text-xl font-semibold text-white">Color Variations</h3>
      <div className="flex flex-wrap gap-3">
        <BlurBadge text="Blue" color="bg-blue-500" />
        <BlurBadge text="Green" color="bg-green-500" />
        <BlurBadge text="Purple" color="bg-purple-500" />
      </div>
    </section>

    {/* Hover instructions */}
    <section className="space-y-3 max-w-xl mx-auto mb-8 text-center">
      <h3 className="text-xl font-semibold text-white">Hover Effect Demonstration</h3>
      <BlurBadge text="Hover over me" color="bg-pink-500" />
      <p className="text-base text-white mt-3">
        The badge blurs slightly and scales up when hovered.
      </p>
    </section>

    {/* Use cases */}
    <section className="space-y-3 max-w-xl mx-auto">
      <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex flex-wrap gap-3 mb-3">
          <BlurBadge text="New" color="bg-green-500" />
          <BlurBadge text="Featured" color="bg-blue-500" />
        </div>
        <p className="text-base text-gray-300">
          Product information or content would appear here...
        </p>
      </div>
    </section>
  </div>
);

/* --- demo render --- */
render(<BadgeExample1 />);
