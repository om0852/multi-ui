"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Checkbox_76 from "./_components/Checkbox_76";
import Checkbox_77 from "./_components/Checkbox_77";
import Checkbox_78 from "./_components/Checkbox_78";
import Checkbox_79 from "./_components/Checkbox_79";
import Checkbox_80 from "./_components/Checkbox_80";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: #f5f5f5;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;

const SizeGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const App = () => {
  const [checkedStates, setCheckedStates] = useState(Array(35).fill(false));

  const handleChange = (index: number) => {
    const newStates = [...checkedStates];
    newStates[index] = !newStates[index];
    setCheckedStates(newStates);
  };

  return (
    <Container>
      <Section>
        <Title>Paint Splash Checkbox</Title>
        <Description>A dynamic checkbox with paint splash and drip animations</Description>
        <CheckboxGroup>
          <SizeGroup>
            <Label>Small</Label>
            <Checkbox_76
              value={checkedStates[0]}
              onChange={() => handleChange(0)}
              size="small"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Medium</Label>
            <Checkbox_76
              value={checkedStates[1]}
              onChange={() => handleChange(1)}
              size="medium"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Large</Label>
            <Checkbox_76
              value={checkedStates[2]}
              onChange={() => handleChange(2)}
              size="large"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Disabled</Label>
            <Checkbox_76
              value={checkedStates[3]}
              onChange={() => handleChange(3)}
              disabled
            />
          </SizeGroup>
        </CheckboxGroup>
      </Section>

      <Section>
        <Title>Paper Fold Checkbox</Title>
        <Description>An origami-style checkbox with paper folding animations</Description>
        <CheckboxGroup>
          <SizeGroup>
            <Label>Small</Label>
            <Checkbox_77
              value={checkedStates[4]}
              onChange={() => handleChange(4)}
              size="small"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Medium</Label>
            <Checkbox_77
              value={checkedStates[5]}
              onChange={() => handleChange(5)}
              size="medium"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Large</Label>
            <Checkbox_77
              value={checkedStates[6]}
              onChange={() => handleChange(6)}
              size="large"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Disabled</Label>
            <Checkbox_77
              value={checkedStates[7]}
              onChange={() => handleChange(7)}
              disabled
            />
          </SizeGroup>
        </CheckboxGroup>
      </Section>

      <Section>
        <Title>Bubble Pop Checkbox</Title>
        <Description>A playful checkbox with bubble pop and ripple effects</Description>
        <CheckboxGroup>
          <SizeGroup>
            <Label>Small</Label>
            <Checkbox_78
              value={checkedStates[8]}
              onChange={() => handleChange(8)}
              size="small"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Medium</Label>
            <Checkbox_78
              value={checkedStates[9]}
              onChange={() => handleChange(9)}
              size="medium"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Large</Label>
            <Checkbox_78
              value={checkedStates[10]}
              onChange={() => handleChange(10)}
              size="large"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Disabled</Label>
            <Checkbox_78
              value={checkedStates[11]}
              onChange={() => handleChange(11)}
              disabled
            />
          </SizeGroup>
        </CheckboxGroup>
      </Section>

      <Section>
        <Title>Neon Pulse Checkbox</Title>
        <Description>A cyberpunk-inspired checkbox with glowing neon effects</Description>
        <CheckboxGroup>
          <SizeGroup>
            <Label>Small</Label>
            <Checkbox_79
              value={checkedStates[12]}
              onChange={() => handleChange(12)}
              size="small"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Medium</Label>
            <Checkbox_79
              value={checkedStates[13]}
              onChange={() => handleChange(13)}
              size="medium"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Large</Label>
            <Checkbox_79
              value={checkedStates[14]}
              onChange={() => handleChange(14)}
              size="large"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Disabled</Label>
            <Checkbox_79
              value={checkedStates[15]}
              onChange={() => handleChange(15)}
              disabled
            />
          </SizeGroup>
        </CheckboxGroup>
      </Section>

      <Section>
        <Title>Cosmic Vortex Checkbox</Title>
        <Description>A mesmerizing checkbox with spiral galaxy animations</Description>
        <CheckboxGroup>
          <SizeGroup>
            <Label>Small</Label>
            <Checkbox_80
              value={checkedStates[16]}
              onChange={() => handleChange(16)}
              size="small"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Medium</Label>
            <Checkbox_80
              value={checkedStates[17]}
              onChange={() => handleChange(17)}
              size="medium"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Large</Label>
            <Checkbox_80
              value={checkedStates[18]}
              onChange={() => handleChange(18)}
              size="large"
            />
          </SizeGroup>
          <SizeGroup>
            <Label>Disabled</Label>
            <Checkbox_80
              value={checkedStates[19]}
              onChange={() => handleChange(19)}
              disabled
            />
          </SizeGroup>
        </CheckboxGroup>
      </Section>
    </Container>
  );
};

export default App;
