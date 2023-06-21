import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  justify-content: center;

  background-color: #70259B;
`

export const NavigationBar = styled.nav`
  width: 1280px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.div`
`;

export const NavLink = styled.a`
  color: #FFFFFF;
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    color: #666;
  }
`;

export const Button = styled.button`
  background-color: #FFFFFF;
  background-color: var(--brand-color-1);
  padding: 9px 15px;
  border: none;
  border-radius: 27px;
  font-size: 16px;
  cursor: pointer;
`;


