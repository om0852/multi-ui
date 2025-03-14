"use client";

import React from "react";
import { Editable_44 } from "../_components/Editable_44";

export default function Example_44() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Photography Portfolio</h1>
        <p className="text-gray-600">
          A collection of stunning photographs from our talented photographers
        </p>
      </div>

      <Editable_44
        initialContent="Photography Portfolio Gallery"
        onSave={handleSave}
        className="min-h-[800px]"
        columns={3}
        spacing={4}
        images={[
          {
            id: "1",
            src: "https://picsum.photos/800/1200?random=1",
            alt: "Urban Architecture",
            width: 800,
            height: 1200,
            tags: ["architecture", "urban", "modern"],
            caption: "Modern architectural marvel in downtown metropolis",
            photographer: {
              name: "Alex Chen",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
            }
          },
          {
            id: "2",
            src: "https://picsum.photos/1200/800?random=2",
            alt: "Natural Landscape",
            width: 1200,
            height: 800,
            tags: ["nature", "landscape", "sunset"],
            caption: "Breathtaking sunset over mountain range",
            photographer: {
              name: "Sarah Kim",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
            }
          },
          {
            id: "3",
            src: "https://picsum.photos/900/900?random=3",
            alt: "Street Photography",
            width: 900,
            height: 900,
            tags: ["street", "people", "urban"],
            caption: "Life in motion: street scene in Tokyo",
            photographer: {
              name: "David Lee",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
            }
          },
          {
            id: "4",
            src: "https://picsum.photos/800/1000?random=4",
            alt: "Portrait",
            width: 800,
            height: 1000,
            tags: ["portrait", "people", "studio"],
            caption: "Environmental portrait of an artist",
            photographer: {
              name: "Emma Wilson",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
            }
          },
          {
            id: "5",
            src: "https://picsum.photos/1000/800?random=5",
            alt: "Wildlife",
            width: 1000,
            height: 800,
            tags: ["wildlife", "nature", "animals"],
            caption: "Wild tigers in their natural habitat",
            photographer: {
              name: "Michael Brown",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
            }
          },
          {
            id: "6",
            src: "https://picsum.photos/850/850?random=6",
            alt: "Abstract",
            width: 850,
            height: 850,
            tags: ["abstract", "art", "experimental"],
            caption: "Abstract light patterns in urban environment",
            photographer: {
              name: "Julia Garcia",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia"
            }
          }
        ]}
      />
    </div>
  );
}
