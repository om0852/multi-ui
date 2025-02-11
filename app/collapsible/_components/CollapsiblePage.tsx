'use client';
import React from 'react';
import Collapsible_1 from './Collapsible_1';
import Collapsible_2 from './Collapsible_2';
import Collapsible_3 from './Collapsible_3';
import Collapsible_19 from './Collapsible_19';
import Collapsible_20 from './Collapsible_20';
import Collapsible_21 from './Collapsible_21';
import Collapsible_22 from './Collapsible_22';
import Collapsible_23 from './Collapsible_23';

const CollapsiblePage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Collapsible Components</h1>
      
      <div className="space-y-4">
        <Collapsible_1 title="Basic Collapsible">
          <p>This is a basic collapsible component with smooth transitions.</p>
        </Collapsible_1>

        <Collapsible_2 title="Enhanced Collapsible">
          <p>This collapsible features enhanced animations and styling.</p>
        </Collapsible_2>

        <Collapsible_3 title="Advanced Collapsible">
          <p>This is an advanced collapsible with complex animations.</p>
        </Collapsible_3>

        <Collapsible_19 title="Retro TV">
          <p>Welcome to your regularly scheduled programming! This retro TV-themed collapsible features static effects, scanlines, and channel switching animations. Adjust your antenna for the best viewing experience.</p>
        </Collapsible_19>

        <Collapsible_20 title="Vinyl Record">
          <p>Drop the needle on this vinyl record-themed collapsible! Watch as the record spins and the grooves shimmer. Features authentic record textures and a rotating label design.</p>
        </Collapsible_20>

        <Collapsible_21 title="Game Cartridge">
          <p>Insert this retro game cartridge and power on! Complete with insertion animation, power LED, and pixelated transitions. Don't forget to blow on the contacts!</p>
        </Collapsible_21>

        <Collapsible_22 title="Vintage Book">
          <p>Open this leather-bound tome to reveal its secrets. Features page-turning animations, a bookmark ribbon, and classic typography. Mind the dust!</p>
        </Collapsible_22>

        <Collapsible_23 title="Film Strip">
          <p>Roll the film with this cinema-inspired collapsible. Watch the frames advance, complete with film grain effects and authentic sprocket holes. Action!</p>
        </Collapsible_23>
      </div>
    </div>
  );
};

export default CollapsiblePage; 