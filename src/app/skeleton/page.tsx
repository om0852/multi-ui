// "use client"
// import React, { useEffect, useState } from 'react'
// import Skeleton from './_components/Skeleton_3';

// const page = () => {
//     const [loading, setLoading] = useState(true);

//     // Simulate loading state
//     useEffect(() => {
//       setTimeout(() => setLoading(false), 3000); // Simulate loading for 3 seconds
//     }, []);
  
//     return (
//       <div className="flex flex-col items-center justify-center h-screen space-y-8">
//         <h1 className="text-2xl font-semibold">Skeleton Loader Demo</h1>
  
//         <div className="space-y-6">
//           {/* Title Skeleton */}
//           {loading ? (
//             <Skeleton className='w-[100vh] border-[3vh] '  />
//           ) : (
//             <h2 className="text-xl font-bold">Content Loaded</h2>
//           )}
  
//           {/* Paragraph Skeleton */}
//           {loading ? (
//             <Skeleton width="300px" height="20px" />
//           ) : (
//             <p className="text-gray-600">
//               This is the content that has been loaded after the skeleton.
//             </p>
//           )}
  
//           {/* Image Skeleton */}
//           {loading ? (
//             <Skeleton width="200px" height="200px" borderRadius="full" />
//           ) : (
//             <img
//               src="https://via.placeholder.com/200"
//               alt="Example"
//               className="rounded-full"
//             />
//           )}
//         </div>
//       </div>
  
//   )
// }

// export default page
