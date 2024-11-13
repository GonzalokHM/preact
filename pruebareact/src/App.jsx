import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import GlobalStyles from './styles/GlobalStyles';


function App() {
  return (
      <Router>
            <GlobalStyles />
            <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
