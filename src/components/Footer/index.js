import React from 'react';
import { ColumnBlock, Container, FirstRow, Heading, Link, LocationText, SecondRow, Section } from './styles';

const Footer = () => {
  return (
    <Section>
      <Container>
        <FirstRow>
          <Heading>Have a project in mind? lets make it happen</Heading>
          <LocationText>
            22 Lawley Road Woodstock, 7925
            Cape Town, South African
            +27 21 469 1500
            enquirie@kingjames.co.za
          </LocationText>
        </FirstRow>
        <SecondRow>
        <ColumnBlock>
        <Link href="#">Terms of use</Link>
            <Link href="#">Private policy</Link>
            <Link href="#">Impressum</Link>
          </ColumnBlock>
          <ColumnBlock>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
          </ColumnBlock>
          <ColumnBlock>
            <Link href="#">Github</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Teams</Link>
          </ColumnBlock>
          <ColumnBlock>
            <Link href="#">Youtube</Link>
            <Link href="#">Behance</Link>
            <Link href="#">Dribble</Link>
          </ColumnBlock>
          <ColumnBlock>
            <Link href="#">Explore open jobs</Link>
            <Link href="#">@2000 - 2022 King James Digital</Link>
          </ColumnBlock>
        </SecondRow>
      </Container>
    </Section>
  );
};

export default Footer;
