import React from 'react';
import Button12 from '../_components/Button_12';

const Example12 = () => {
    return (
        <div>
            <h2>Example 12: Button 12 Example</h2>
            <Button12 
                frontText="Front" 
                backText="Back" 
                onClick={() => alert('Button 12 Clicked!')} 
            />
        </div>
    );
};

export default Example12; 