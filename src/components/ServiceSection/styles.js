import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;
`;

export const Container = styled.div`
  max-width: 1281px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Heading = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Card = styled.div`
  flex: 1;
  max-width: 290px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
`;

export const CardHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CardParagraph = styled.p`
  font-size: 20px;
`;
