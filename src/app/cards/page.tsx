import React from 'react';
import Card_1 from './_components/Card_1';
import Card_2 from './_components/Card_2';
import Card_3 from './_components/Card_3';
import Card_4 from './_components/Card_4';
import Card_5 from './_components/Card_5';
import Card_6 from './_components/Card_6';
import Card_7 from './_components/Card_7';
import Card_8 from './_components/Card_8';
import Card_9 from './_components/Card_9';
import Card_10 from './_components/Card_10';


const App = () => {

    const WalletIcon = () => (
       <img className='z-10 h-fit w-fit ' src="https://www.svgrepo.com/show/805/customer-service.svg" />
      );



  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <Card_1
        title="Helllo "
        btnText="Link"
        description="Collaborative effort of a group to achieve a common goal the most effective and efficient way!"
        link="/contact"
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
      />
      <Card_2
        title="Azores"
        subtitle="lorem23 sdf f d f fd s f sf sf "
        imageUrl="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
      />
      <Card_3 />
      <Card_4 />
      <Card_5 />
      <Card_6 />
      <Card_7 />
      <Card_8 />
      <Card_9 />
      <Card_10 />
    </div>
  );
};

export default App;

