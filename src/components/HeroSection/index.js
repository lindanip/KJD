import React from 'react';
import { Button, Container, Content, Heading, Paragraph, Section } from './styles';

const HomeHeroSection = () => {
  return (
    <Section backgroundImage={require('../../assets/hero-2.jpeg')}>
      <Container>
        <Content>
          <Heading>Live with Confidence</Heading>
          <Paragraph>
            José Mourinho brings confidence to pan-African Sanlam campaign.
          </Paragraph>
          <Button>View project</Button>
        </Content>
      </Container>
    </Section>
  );
};

export default HomeHeroSection;
