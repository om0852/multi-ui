import React from 'react';
import Button9 from '../tsx/Button_9';

const Example9 = () => {
    return (
        <div>
            <h2>Example 9: Button 9 Example</h2>
            <Button9 text="Button 9" icon={<img src="https://img.icons8.com/?size=100&id=110293&format=png&color=000000" />} onClick={() => alert('Button 9 Clicked!')} />
j        </div>
    );
};

export default Example9; 