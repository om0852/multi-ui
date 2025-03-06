import React from 'react';
import Card1 from '../_components/Card_1';

const ExampleCard1 = () => {
    return (
        <div>
            <h2>Example Card 1</h2>
            <Card1 
                title="Card 1 Title"
                description="This is the description for Card 1."
                link="/card1"
                imageUrl="https://via.placeholder.com/300"
                btnText="Learn More"
            />
        </div>
    );
};

export default ExampleCard1; 