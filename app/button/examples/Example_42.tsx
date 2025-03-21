import React from 'react';
import Button42 from '../_components/Button_42';

const Example42 = () => {
    return (
        <div>
            <h2>Example 42: Button 42 Example</h2>
            <Button42 filled={true} onClick={() => alert('Button 42 Clicked!')}>Button 42</Button42>
        </div>
    );
};

export default Example42; 