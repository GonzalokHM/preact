import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Inicio</h1>
    <Link to="/series">Series</Link>
    <Link to="/movies">Películas</Link>
  </div>
);

export default Home;