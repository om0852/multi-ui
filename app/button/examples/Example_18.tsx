import React from 'react';
import Button18 from '../_components/Button_18';

const Example18 = () => {
    return (
        <div>
            <h2>Example 18: Button 18 Example</h2>
            <Button18 
                text="Button 18" 
                backText="Back" 
                onClick={() => alert('Button 18 Clicked!')} 
            />
        </div>
    );
};

export default Example18; 
