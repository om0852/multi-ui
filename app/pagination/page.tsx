// "use client";
// import React, { useState } from "react";
// import FancyPagination from "./_components/Pagination_10";
// import SliderPagination from "./_components/SliderPagination";
// import CircularPagination from "./_components/CircularPagination";
// import DotPagination from "./_components/DotPagination";
// import MinimalPagination from "./_components/MinimalPagination";
// import CardPagination from "./_components/CardPagination";
// import GradientPagination from './_components/GradientPagination';
// import NeumorphicPagination from './_components/NeumorphicPagination';
// import BorderAnimationPagination from './_components/BorderAnimationPagination';
// import FloatingPagination from './_components/FloatingPagination';
// import StackedPagination from './_components/StackedPagination';
// import RipplePagination from './_components/RipplePagination';
// import GlassPagination from './_components/GlassPagination';
// import ExpandingPagination from './_components/ExpandingPagination';
// import OutlinePagination from './_components/OutlinePagination';
// import MinimalistPagination from './_components/MinimalistPagination';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10;

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page); // Update the state
//     console.log("Page changed to:", page); // For debugging
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center gap-16 p-24">
//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Circular Pagination</h2>
//         <CircularPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Slider Pagination</h2>
//         <SliderPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Dot Pagination</h2>
//         <DotPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Card Pagination</h2>
//         <CardPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Minimal Pagination</h2>
//         <MinimalPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Gradient Pagination</h2>
//         <GradientPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Neumorphic Pagination</h2>
//         <NeumorphicPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Border Animation Pagination</h2>
//         <BorderAnimationPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Floating Pagination</h2>
//         <FloatingPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Stacked Pagination</h2>
//         <StackedPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Ripple Pagination</h2>
//         <RipplePagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Glass Pagination</h2>
//         <GlassPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Expanding Pagination</h2>
//         <ExpandingPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Outline Pagination</h2>
//         <OutlinePagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <div className="space-y-4">
//         <h2 className="text-xl font-bold text-center">Minimalist Pagination</h2>
//         <MinimalistPagination
//           totalPages={5}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;



import React from 'react'

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-16 p-24">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Circular Pagination</h2>
        <CircularPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Slider Pagination</h2>
        <SliderPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Dot Pagination</h2>
        <DotPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Card Pagination</h2>
        <CardPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Minimal Pagination</h2>
        <MinimalPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Gradient Pagination</h2>
        <GradientPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Neumorphic Pagination</h2>
        <NeumorphicPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Border Animation Pagination</h2>
        <BorderAnimationPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Floating Pagination</h2>
        <FloatingPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Stacked Pagination</h2>
        <StackedPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Ripple Pagination</h2>
        <RipplePagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Glass Pagination</h2>
        <GlassPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Expanding Pagination</h2>
        <ExpandingPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Outline Pagination</h2>
        <OutlinePagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Minimalist Pagination</h2>
        <MinimalistPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default page
