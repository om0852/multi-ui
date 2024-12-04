// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./_components/Accordian";

// const Page = () => {
//   return (
//     <div>
//       <Accordion className="space-y-4">
//         <AccordionItem id="item1" className="border border-gray-300 rounded">
//           <AccordionTrigger
//             id="item1"
//             className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200"
//           >
//             Section 1
//           </AccordionTrigger>
//           <AccordionContent
//             id="item1"
//             className="p-4"
//             openClasses="max-h-screen opacity-100"
//             closeClasses="max-h-0 opacity-0 overflow-hidden"
//           >
//             Content for section 1
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="item2" className="border border-gray-300 rounded">
//           <AccordionTrigger
//             id="item2"
//             className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200"
//           >
//             Section 2
//           </AccordionTrigger>
//           <AccordionContent
//             id="item2"
//             className="p-4"
//             openClasses="max-h-screen opacity-100"
//             closeClasses="max-h-0 opacity-0 overflow-hidden"
//           >
//             Content for section 2
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//       <Accordion className="space-y-6">
//         <AccordionItem id="item1" className="bg-white shadow-md rounded-lg">
//           <AccordionTrigger
//             id="item1"
//             className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg font-medium text-gray-800"
//           >
//             Section 1
//           </AccordionTrigger>
//           <AccordionContent
//             id="item1"
//             className="px-6 py-4 text-gray-700 bg-white"
//             openClasses="max-h-screen opacity-100"
//             closeClasses="max-h-0 opacity-0 overflow-hidden"
//           >
//             Content for section 1
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="item2" className="bg-white shadow-md rounded-lg">
//           <AccordionTrigger
//             id="item2"
//             className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg font-medium text-gray-800"
//           >
//             Section 2
//           </AccordionTrigger>
//           <AccordionContent
//             id="item2"
//             className="px-6 py-4 text-gray-700 bg-white"
//             openClasses="max-h-screen opacity-100"
//             closeClasses="max-h-0 opacity-0 overflow-hidden"
//           >
//             Content for section 2
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//       <Accordion className="space-y-4">
//         <AccordionItem id="item1" className="border rounded-lg shadow-md">
//           <AccordionTrigger
//             id="item1"
//             className="p-4 bg-gray-100 hover:bg-gray-200"
//           >
//             Section 1
//           </AccordionTrigger>
//           <AccordionContent
//             id="item1"
//             className="p-4"
//             animation="slide"
//             duration={0.5}
//           >
//             Content for section 1
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="item2" className="border rounded-lg shadow-md">
//           <AccordionTrigger
//             id="item2"
//             className="p-4 bg-gray-100 hover:bg-gray-200"
//           >
//             Section 2
//           </AccordionTrigger>
//           <AccordionContent
//             id="item2"
//             className="p-4"
//             animation="fade"
//             duration={0.5}
//           >
//             Content for section 2
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//       <Accordion className="space-y-4">
//         <AccordionItem id="item1" className="border rounded-lg">
//           <AccordionTrigger
//             id="item1"
//             className="p-4 bg-green-200 hover:bg-green-300"
//           >
//             Section 1
//           </AccordionTrigger>
//           <AccordionContent
//             id="item1"
//             className="p-4 bg-green-100"
//             animation="fadeInUp"
//             duration={0.5}
//           >
//             This is the content for Section 1 with a fade-in-up animation.
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="item2" className="border rounded-lg">
//           <AccordionTrigger
//             id="item2"
//             className="p-4 bg-blue-200 hover:bg-blue-300"
//           >
//             Section 2
//           </AccordionTrigger>
//           <AccordionContent
//             id="item2"
//             className="p-4 bg-blue-100"
//             animation="zoomIn"
//             duration={0.7}
//           >
//             This is the content for Section 2 with a zoom-in animation.
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//       <Accordion className="space-y-4">
//   {/* Section 1 */}
//   <AccordionItem id="item1" className="border rounded-lg">
//     <AccordionTrigger
//       id="item1"
//       className="p-4 bg-green-200 hover:bg-green-300"
//     >
//       Section 1
//     </AccordionTrigger>
//     <AccordionContent
//       id="item1"
//       className="p-4 bg-green-100"
//       animation="fadeInUp"
//       duration={0.5}
//     >
//       This is the content for Section 1 with a fade-in-up animation.
//     </AccordionContent>
//   </AccordionItem>

//   {/* Section 2 */}
//   <AccordionItem id="item2" className="border rounded-lg">
//     <AccordionTrigger
//       id="item2"
//       className="p-4 bg-blue-200 hover:bg-blue-300"
//     >
//       Section 2
//     </AccordionTrigger>
//     <AccordionContent
//       id="item2"
//       className="p-4 bg-blue-100"
//       animation="zoomIn"
//       duration={0.7}
//     >
//       This is the content for Section 2 with a zoom-in animation.
//     </AccordionContent>
//   </AccordionItem>

//   {/* Section 3 */}
//   <AccordionItem id="item3" className="border rounded-lg">
//     <AccordionTrigger
//       id="item3"
//       className="p-4 bg-yellow-200 hover:bg-yellow-300"
//     >
//       Section 3
//     </AccordionTrigger>
//     <AccordionContent
//       id="item3"
//       className="p-4 bg-yellow-100"
//       animation="slideInLeft"
//       duration={0.6}
//     >
//       This is the content for Section 3 with a slide-in-left animation.
//     </AccordionContent>
//   </AccordionItem>

//   {/* Section 4 */}
//   <AccordionItem id="item4" className="border rounded-lg">
//     <AccordionTrigger
//       id="item4"
//       className="p-4 bg-red-200 hover:bg-red-300"
//     >
//       Section 4
//     </AccordionTrigger>
//     <AccordionContent
//       id="item4"
//       className="p-4 bg-red-100"
//       animation="flipInX"
//       duration={0.8}
//     >
//       This is the content for Section 4 with a flip-in animation.
//     </AccordionContent>
//   </AccordionItem>

//   {/* Section 5 */}
//   <AccordionItem id="item5" className="border rounded-lg">
//     <AccordionTrigger
//       id="item5"
//       className="p-4 bg-purple-200 hover:bg-purple-300"
//     >
//       Section 5
//     </AccordionTrigger>
//     <AccordionContent
//       id="item5"
//       className="p-4 bg-purple-100"
//       animation="bounceIn"
//       duration={0.5}
//     >
//       This is the content for Section 5 with a bounce-in animation.
//     </AccordionContent>
//   </AccordionItem>

//   {/* Section 6 */}
//   <AccordionItem id="item6" className="border rounded-lg">
//     <AccordionTrigger
//       id="item6"
//       className="p-4 bg-teal-200 hover:bg-teal-300"
//     >
//       Section 6
//     </AccordionTrigger>
//     <AccordionContent
//       id="item6"
//       className="p-4 bg-teal-100"
//       animation="fadeInDown"
//       duration={0.4}
//     >
//       This is the content for Section 6 with a fade-in-down animation.
//     </AccordionContent>
//   </AccordionItem>
// </Accordion>

//     </div>
//   );
// };

// export default Page;
"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionControls,
} from "@/app/accordian/_components/Accordian";

const Page = () => {
  const sections = ["section1", "section2", "section3"];

  const loadContent = async (id: string) => {
    // Simulate content loading
    return new Promise<React.ReactNode>((resolve) => {
      setTimeout(() => {
        resolve(`Dynamically loaded content for ${id}`);
      }, 1000);
    });
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Sample Accordion</h1>

      {/* Accordion Controls */}
      <AccordionControls items={sections} />

      <Accordion multiple persistState storageKey="sampleAccordion">
        {/* Accordion Item 1 */}
        <AccordionItem id="section1" className="border rounded-lg">
          <AccordionTrigger
            id="section1"
            className="p-4 bg-green-200 hover:bg-green-300"
            openIcon={<span>-</span>}
            closeIcon={<span>+</span>}
          >
            Section 1
          </AccordionTrigger>
          <AccordionContent
            id="section1"
            className="p-4 bg-green-100"
            animation="fadeInUp"
            duration={0.5}
          >
            This is the content for Section 1.
          </AccordionContent>
        </AccordionItem>

        {/* Accordion Item 2 */}
        <AccordionItem id="section2" className="border rounded-lg">
          <AccordionTrigger
            id="section2"
            className="p-4 bg-blue-200 hover:bg-blue-300"
          >
            Section 2
          </AccordionTrigger>
          <AccordionContent
            id="section2"
            className="p-4 bg-blue-100"
            animation="zoomIn"
            duration={0.7}
            loadOnOpen={() => loadContent("section2")}
          />
        </AccordionItem>

        {/* Accordion Item 3 */}
        <AccordionItem id="section3" className="border rounded-lg">
          <AccordionTrigger
            id="section3"
            className="p-4 bg-red-200 hover:bg-red-300"
          >
            Section 3
          </AccordionTrigger>
          <AccordionContent
            id="section3"
            className="p-4 bg-red-100"
            animation="slideFromRight"
            duration={0.6}
          >
            This is the content for Section 3.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
           <Accordion className="space-y-4">
  {/* Section 1 */}
  <AccordionItem id="item1" className="border rounded-lg">
    <AccordionTrigger
      id="item1"
      className="p-4 bg-green-200 hover:bg-green-300"
    >
      Section 1
    </AccordionTrigger>
    <AccordionContent
      id="item1"
      className="p-4 bg-green-100"
      animation="fadeInUp"
      duration={0.5}
    >
      This is the content for Section 1 with a fade-in-up animation.
    </AccordionContent>
  </AccordionItem>

  {/* Section 2 */}
  <AccordionItem id="item2" className="border rounded-lg">
    <AccordionTrigger
      id="item2"
      className="p-4 bg-blue-200 hover:bg-blue-300"
    >
      Section 2
    </AccordionTrigger>
    <AccordionContent
      id="item2"
      className="p-4 bg-blue-100"
      animation="zoomIn"
      duration={0.7}
    >
      This is the content for Section 2 with a zoom-in animation.
    </AccordionContent>
  </AccordionItem>

  {/* Section 3 */}
  <AccordionItem id="item3" className="border rounded-lg">
    <AccordionTrigger
      id="item3"
      className="p-4 bg-yellow-200 hover:bg-yellow-300"
    >
      Section 3
    </AccordionTrigger>
    <AccordionContent
      id="item3"
      className="p-4 bg-yellow-100"
      animation="slideIn"
      duration={0.6}
    >
      This is the content for Section 3 with a slide-in-left animation.
    </AccordionContent>
  </AccordionItem>

  {/* Section 4 */}
  <AccordionItem id="item4" className="border rounded-lg">
    <AccordionTrigger
      id="item4"
      className="p-4 bg-red-200 hover:bg-red-300"
    >
      Section 4
    </AccordionTrigger>
    <AccordionContent
      id="item4"
      className="p-4 bg-red-100"
      animation="scaleUp"
      duration={0.8}
    >
      This is the content for Section 4 with a flip-in animation.
    </AccordionContent>
  </AccordionItem>

  {/* Section 5 */}
  <AccordionItem id="item5" className="border rounded-lg">
    <AccordionTrigger
      id="item5"
      className="p-4 bg-purple-200 hover:bg-purple-300"
    >
      Section 5
    </AccordionTrigger>
    <AccordionContent
      id="item5"
      className="p-4 bg-purple-100"
      animation="bounceIn"
      duration={0.5}
    >
      This is the content for Section 5 with a bounce-in animation.
    </AccordionContent>
  </AccordionItem>

  {/* Section 6 */}
  <AccordionItem id="item6" className="border rounded-lg">
    <AccordionTrigger
      id="item6"
      className="p-4 bg-teal-200 hover:bg-teal-300"
    >
      Section 6
    </AccordionTrigger>
    <AccordionContent
      id="item6"
      className="p-4 bg-teal-100"
      animation="fadeInDown"
      duration={0.4}
    >
      This is the content for Section 6 with a fade-in-down animation.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  );
};

export default Page;
