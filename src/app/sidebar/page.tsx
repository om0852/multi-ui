import React from 'react';
import Sidebar_1 from './_components/Sidebar_1';
import Sidebar_2 from './_components/Sidebar_2';
import Sidebar_3 from './_components/Sidebar_3';
import Sidebar_4 from './_components/Sidebar_4';
import Sidebar_5 from './_components/Sidebar_5';
import Sidebar_6 from './_components/Sidebar_6';
import Sidebar_7 from './_components/Sidebar_7';
import Sidebar_8 from './_components/Sidebar_8';
import Sidebar_9 from './_components/Sidebar_9';
import Sidebar_10 from './_components/Sidebar_10';

const App = () => {

   


  return (
    <div className='flex flex-col justify-around items-center space-y-28  gap-12 '>
        
       <Sidebar_1/>
       <Sidebar_2 />
       <Sidebar_3/>
       <Sidebar_4/>
       <Sidebar_5/>
       <Sidebar_6/>
       <Sidebar_7/>
       <Sidebar_8/>
       <Sidebar_9/>
       <Sidebar_10/>
    </div>
  );
};

export default App;

