import React from 'react';
import Button20 from '../tsx/Button_20';

const Example20 = () => {
    return (
        <div>
            <h2>Example 20: Button 20 Example</h2>
            <Button20 
                text="Button 20" 
                revealText="Reveal" 
                onClick={() => alert('Button 20 Clicked!')} 
            />
        </div>
    );
};

export default Example20; 