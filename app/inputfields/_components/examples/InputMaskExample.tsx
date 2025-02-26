"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import DynamicMaskInput from '../../../inputmask/_components/InputMask_16';
import { FaPhone, FaCalendar, FaCreditCard, FaClock, FaPassport } from 'react-icons/fa';

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 12px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  color: #1890ff;
  margin: 0;
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  color: #595959;
  margin: 0;
  font-size: 0.9rem;
`;

const InputMaskExample: React.FC = () => {
  const [phoneValue, setPhoneValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [cardValue, setCardValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [passportValue, setPassportValue] = useState('');

  return (
    <ExampleContainer>
      <Title>Input Mask Examples</Title>
      <Description>
        Below are examples of masked inputs for different formats. Try typing in each field
        to see how the mask guides your input.
      </Description>

      <Section>
        <DynamicMaskInput
          label="Phone Number"
          mask="(999) 999-9999"
          value={phoneValue}
          onChange={setPhoneValue}
          placeholder="Enter phone number"
          icon={<FaPhone />}
        />
        <Description>
          Format: (XXX) XXX-XXXX - Only numbers allowed
        </Description>
      </Section>

      <Section>
        <DynamicMaskInput
          label="Date"
          mask="99/99/9999"
          value={dateValue}
          onChange={setDateValue}
          placeholder="DD/MM/YYYY"
          icon={<FaCalendar />}
        />
        <Description>
          Format: DD/MM/YYYY - Enter date in numeric format
        </Description>
      </Section>

      <Section>
        <DynamicMaskInput
          label="Credit Card"
          mask="9999 9999 9999 9999"
          value={cardValue}
          onChange={setCardValue}
          placeholder="Enter card number"
          icon={<FaCreditCard />}
        />
        <Description>
          Format: XXXX XXXX XXXX XXXX - Spaces added automatically
        </Description>
      </Section>

      <Section>
        <DynamicMaskInput
          label="Time"
          mask="99:99"
          value={timeValue}
          onChange={setTimeValue}
          placeholder="HH:MM"
          icon={<FaClock />}
        />
        <Description>
          Format: HH:MM - 24-hour time format
        </Description>
      </Section>

      <Section>
        <DynamicMaskInput
          label="Passport Number"
          mask="999999999"
          value={passportValue}
          onChange={setPassportValue}
          placeholder="Enter passport number"
          icon={<FaPassport />}
          error={passportValue && passportValue.length < 9 ? "Passport number must be 9 digits" : ""}
        />
        <Description>
          Format: XXXXXXXXX - 9-digit passport number with validation
        </Description>
      </Section>
    </ExampleContainer>
  );
};

export default InputMaskExample; 