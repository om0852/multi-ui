import React from 'react';
import Button64 from '../_components/Button_64';

const Example64 = () => {
    return (
        <div>
            <h2>Example 64: Button 64 Example</h2>
            <Button64 filled={true} onClick={() => alert('Button 64 Clicked!')}>Button 64</Button64>
        </div>
    );
};

export default Example64; 