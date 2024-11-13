import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterText = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;

  a {
    color: #ff6347;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
