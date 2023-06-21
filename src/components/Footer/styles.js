import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;
  background-color: var(--brand-color-1);
  color: #fff;
`;

export const Container = styled.div`
  max-width: 1281px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FirstRow = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

export const SecondRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 0 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr) 2fr;
  }
`;

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  max-width: 300px;
`;

export const LocationText = styled.p`
  font-size: 16px;
  max-width: 300px;
`;

export const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  font-size: 16px;
  margin-bottom: 5px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
