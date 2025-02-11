"use client"
import React from 'react'
import styled from 'styled-components'
import Calendar_39 from './_components/Calendar_39'
import Calendar_40 from './_components/Calendar_40'
import Calendar_41 from './_components/Calendar_41'
import Calendar_42 from './_components/Calendar_42'
import Calendar_43 from './_components/Calendar_43'
import Calendar_44 from './_components/Calendar_44'
import Calendar_45 from './_components/Calendar_45'
import Calendar_46 from './_components/Calendar_46'
import Calendar_47 from './_components/Calendar_47'
import Calendar_48 from './_components/Calendar_48'
import Calendar_49 from './_components/Calendar_49'
import Calendar_50 from './_components/Calendar_50'

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  color: #e2e8f0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #60a5fa, #e879f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(96, 165, 250, 0.5);
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1800px;
  margin: 0 auto;
`;

const CalendarWrapper = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CalendarTitle = styled.h2`
  font-size: 1.5rem;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

const CalendarPage = () => {
  const handleDateSelect = (calendarName: string) => (date: Date | null) => {
    if (date) {
      console.log(`Selected date in ${calendarName}:`, date.toLocaleDateString());
    }
  };

  const calendars = [
    { component: Calendar_39, name: 'Neon Synthwave Calendar' },
    { component: Calendar_40, name: 'Nordic Winter Calendar' },
    { component: Calendar_41, name: 'Botanical Garden Calendar' },
    { component: Calendar_42, name: 'Desert Oasis Calendar' },
    { component: Calendar_43, name: 'Neon Cyberpunk Calendar' },
    { component: Calendar_44, name: 'Fairy Tale Calendar' },
    { component: Calendar_45, name: 'Volcanic Calendar' },
    { component: Calendar_46, name: 'Underwater Calendar' },
    { component: Calendar_47, name: 'Retro Gaming Calendar' },
    { component: Calendar_48, name: 'Steampunk Calendar' },
    { component: Calendar_49, name: 'Cyberpunk Calendar' },
    { component: Calendar_50, name: 'Cosmic Calendar' },
  ];

  return (
    <PageContainer>
      <Header>
        <Title>Themed Calendar Collection</Title>
        <Subtitle>
          A showcase of beautifully designed calendar components with unique themes and animations.
          Each calendar features smooth transitions, responsive design, and accessible controls.
        </Subtitle>
      </Header>

      <Grid>
        {calendars.map(({ component: CalendarComponent, name }) => (
          <CalendarWrapper key={name}>
            <CalendarTitle>{name}</CalendarTitle>
            <CalendarComponent
              onSelectDate={handleDateSelect(name)}
              initialDate={new Date()}
            />
          </CalendarWrapper>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default CalendarPage
