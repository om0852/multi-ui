import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./_components/Accordian";

const Page = () => {
  return (
    <div>
      <Accordion className="space-y-4">
        <AccordionItem id="item1" className="border border-gray-300 rounded">
          <AccordionTrigger
            id="item1"
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200"
          >
            Section 1
          </AccordionTrigger>
          <AccordionContent
            id="item1"
            className="p-4"
            openClasses="max-h-screen opacity-100"
            closeClasses="max-h-0 opacity-0 overflow-hidden"
          >
            Content for section 1
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="item2" className="border border-gray-300 rounded">
          <AccordionTrigger
            id="item2"
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200"
          >
            Section 2
          </AccordionTrigger>
          <AccordionContent
            id="item2"
            className="p-4"
            openClasses="max-h-screen opacity-100"
            closeClasses="max-h-0 opacity-0 overflow-hidden"
          >
            Content for section 2
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="space-y-6">
  <AccordionItem id="item1" className="bg-white shadow-md rounded-lg">
    <AccordionTrigger
      id="item1"
      className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg font-medium text-gray-800"
    >
      Section 1
    </AccordionTrigger>
    <AccordionContent
      id="item1"
      className="px-6 py-4 text-gray-700 bg-white"
      openClasses="max-h-screen opacity-100"
      closeClasses="max-h-0 opacity-0 overflow-hidden"
    >
      Content for section 1
    </AccordionContent>
  </AccordionItem>

  <AccordionItem id="item2" className="bg-white shadow-md rounded-lg">
    <AccordionTrigger
      id="item2"
      className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg font-medium text-gray-800"
    >
      Section 2
    </AccordionTrigger>
    <AccordionContent
      id="item2"
      className="px-6 py-4 text-gray-700 bg-white"
      openClasses="max-h-screen opacity-100"
      closeClasses="max-h-0 opacity-0 overflow-hidden"
    >
      Content for section 2
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className="space-y-4">
  <AccordionItem id="item1" className="border rounded-lg shadow-md">
    <AccordionTrigger
      id="item1"
      className="p-4 bg-gray-100 hover:bg-gray-200"
    >
      Section 1
    </AccordionTrigger>
    <AccordionContent
      id="item1"
      className="p-4"
      animation="slide"
      duration={0.5}
    >
      Content for section 1
    </AccordionContent>
  </AccordionItem>

  <AccordionItem id="item2" className="border rounded-lg shadow-md">
    <AccordionTrigger
      id="item2"
      className="p-4 bg-gray-100 hover:bg-gray-200"
    >
      Section 2
    </AccordionTrigger>
    <AccordionContent
      id="item2"
      className="p-4"
      animation="fadeInUp"
      duration={0.5}
    >
      Content for section 2
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  );
};

export default Page;
