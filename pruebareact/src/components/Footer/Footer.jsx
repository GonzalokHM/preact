import { FooterContainer, FooterText } from './Footer.styles';

const Footer = () => (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Streamingo ®️</FooterText>
      <FooterText>    <a href="https://ghmportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
        DevPortfolio
      </a> </FooterText>
    </FooterContainer>
  );
  
  export default Footer;