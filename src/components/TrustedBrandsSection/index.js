import React from 'react';

import brand1Image from '../../assets/logo-1.png';
import brand2Image from '../../assets/logo-3.png';
import brand3Image from '../../assets/logo-3.png';
import brand4Image from '../../assets/logo-1.png';
import brand5Image from '../../assets/logo-5.png';

import { BrandBlock, BrandGrid, BrandImage, Container, Heading, Section } from './styles';

const TrustedBrandsSection = () => {
  return (
    <Section>
      <Container>
        <Heading>Trusted by Leading Brands</Heading>
        <BrandGrid>
          <BrandBlock>
            <BrandImage src={brand1Image} alt="Brand 1" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand2Image} alt="Brand 2" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand3Image} alt="Brand 3" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand4Image} alt="Brand 4" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand5Image} alt="Brand 5" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand1Image} alt="Brand 1" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand2Image} alt="Brand 2" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand3Image} alt="Brand 3" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand4Image} alt="Brand 4" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand5Image} alt="Brand 5" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand1Image} alt="Brand 1" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand2Image} alt="Brand 2" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand3Image} alt="Brand 3" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand4Image} alt="Brand 4" />
          </BrandBlock>
          <BrandBlock>
            <BrandImage src={brand5Image} alt="Brand 5" />
          </BrandBlock>
        </BrandGrid>
      </Container>
    </Section>
  );
};

export default TrustedBrandsSection;
