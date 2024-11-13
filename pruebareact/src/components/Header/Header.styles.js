import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: #0087b2;
`;

export const NavLinks = styled.nav`
  a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #ff6347; /* Cambia de color al pasar el mouse */
    }
  }
`;
