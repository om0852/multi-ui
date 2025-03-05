import React from 'react';
import HoverAnimatedButton from '../_components/Button_31';

const Example31 = () => {
    return (
        <div>
            <h2>Example 31: Button 31 Example</h2>
            <HoverAnimatedButton 
                variant="default" 
                size="md" 
                hoverEffect="grow" 
                onClick={() => alert('Button 31 Clicked!')} 
            >
                Button 31
            </HoverAnimatedButton>
        </div>
    );
};

export default Example31; 