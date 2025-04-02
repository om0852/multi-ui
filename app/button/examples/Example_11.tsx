import React from 'react';
import Button11 from '../tsx/Button_11';

const Example11 = () => {
    return (
        <div>
            <h2>Example 11: Button 11 Example</h2>
            <Button11 
                activeText="Active" 
                inactiveText="Inactive" 
                onToggle={(isActive) => alert(isActive ? 'Button 11 Activated!' : 'Button 11 Deactivated!')} 
            />
        </div>
    );
};

export default Example11; 