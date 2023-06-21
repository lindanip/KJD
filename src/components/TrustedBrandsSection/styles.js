import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;
`;

export const Container = styled.div`
  max-width: 1281px;
  margin: 0 auto;
`;

export const BrandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

export const BrandBlock = styled.div`
  width: 100%;
  padding-bottom: 50%;
  position: relative;
`;

export const BrandImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
`;