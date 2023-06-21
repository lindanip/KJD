import React from 'react';
import { Card, CardContainer, CardHeading, CardParagraph, Container, Heading, Icon, Section } from './styles';

const ServiceSection = () => {
  return (
    <Section>
      <Container>
        <Heading>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</Heading>
        <CardContainer>
          <Card>
            <Icon src={require('../../assets/service-1.png')} alt="Service Icon 1" />
            <CardHeading>Web development</CardHeading>
            <CardParagraph>
              We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.
            </CardParagraph>
          </Card>
          <Card>
            <Icon src={require('../../assets/service-2.png')} alt="Service Icon 2" />
            <CardHeading>User experience & design</CardHeading>
            <CardParagraph>
              Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.
            </CardParagraph>
          </Card>
          <Card>
            <Icon src={require('../../assets/service-3.png')} alt="Service Icon 3" />
            <CardHeading>Mobile app development</CardHeading>
            <CardParagraph>
              Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.
            </CardParagraph>
          </Card>
          <Card>
            <Icon src={require('../../assets/service-4.png')} alt="Service Icon 4" />
            <CardHeading>Blockchain solutions</CardHeading>
            <CardParagraph>
              We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.
            </CardParagraph>
          </Card>
        </CardContainer>
      </Container>
    </Section>
  );
};

export default ServiceSection;
