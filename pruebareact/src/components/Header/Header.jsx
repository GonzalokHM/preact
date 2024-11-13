import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, NavLinks } from './Header.styles';

const Header = () => (
    <HeaderContainer>
      <Logo>Streamingo</Logo>
      <NavLinks>
        <Link to="/">Inicio</Link>
        <Link to="/series">Series</Link>
        <Link to="/movies">Películas</Link>
      </NavLinks>
    </HeaderContainer>
  );
  
  export default Header;