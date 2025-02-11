import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const CreditCardInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const InputWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CreditCardInput = styled.input`
  padding-left: 30px; /* Create space for the icon */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
`;

const Icon = styled.img`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
`;

const CreditCardInputField = () => {
  const [cardNumber, setCardNumber] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  return (
    <CreditCardInputContainer>
      <InputWithIcon>
        <Icon src="/path-to-your-credit-card-icon.png" alt="Credit Card" />
        <CreditCardInput
          type="text"
          placeholder="Enter Credit Card Number"
          value={cardNumber}
          onChange={handleChange}
          maxLength={16}
        />
      </InputWithIcon>
    </CreditCardInputContainer>
  );
};

export default CreditCardInputField;
