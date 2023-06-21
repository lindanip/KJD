import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;
`;

export const Container = styled.div`
  max-width: 1281px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Card = styled.div`
  width: 399px;
  height: 399px;
  position: relative;
  margin: 0 10px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  color: #fff;
`;

export const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
`;