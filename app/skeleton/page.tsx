"use client"
import Skeleton from "./tsx/Skeleton_16";

const App: React.FC = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-lg font-bold">Skeleton Loader Examples</h1>

    {/* Default Rectangular Skeleton */}
    <Skeleton width="300px" height="1.5rem" />

    {/* Circular Skeleton */}
    <Skeleton width="300px" height="1.5rem" />

    {/* Custom Border Radius */}
    <Skeleton width="150px" height="1rem" borderRadius="1rem" />

    {/* Fast Animation Rectangular */}
    <Skeleton width="200px" height="1rem"  />
  </div>
);

export default App;
