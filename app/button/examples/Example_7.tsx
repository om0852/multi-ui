import React from 'react';
import Button7 from '../_components/Button_7';

const Example7 = () => {
    return (
        <div>
            <h2>Example 7: Button 7 Example</h2>
            <Button7 frontText="Front" backText="Back" onClick={() => alert('Button 7 Clicked!')} />
        </div>
    );
};

export default Example7; 