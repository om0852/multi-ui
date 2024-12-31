"use client"
import Skeleton from "./_components/Skeleton_6";

const App: React.FC = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-lg font-bold">Skeleton Loader Examples</h1>

    {/* Default Rectangular Skeleton */}
    <Skeleton width="300px" height="1.5rem" />

    {/* Circular Skeleton */}
    <Skeleton diameter="50px" animationSpeed={2} />

    {/* Custom Border Radius */}
    <Skeleton width="150px" height="1rem" borderRadius="1rem" />

    {/* Fast Animation Rectangular */}
    <Skeleton width="200px" height="1rem" animationSpeed={0.8} />
  </div>
);

export default App;
