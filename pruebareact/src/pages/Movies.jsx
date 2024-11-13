import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination';
import YearFilter from '../components/YearFilter';
import {Container, ContainerCards, Title} from './MoviesSeries.styles'

const Movies = () => {
  const { items, currentPage, itemsPerPage, filterYear } = useSelector((state) => state.data);
  const { status, error } = useFetchData();

  // Filtrar y ordenar las movies
  const filteredMovies = items
    .filter((item) => item.programType === 'movie' && item.releaseYear >= 2010)
    .filter((item) => (filterYear ? item.releaseYear === parseInt(filterYear) : true))
    .sort((a, b) => a.title.localeCompare(b.title));
    
  // Paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

    // Manejamos los estados de carga y error
    if (status === 'loading') return <p>Loading movies...</p>;
    if (status === 'failed') return <p>Oops something went wrong{error}</p>;

  return (
    <Container>
      <Title>Movies</Title>
      <YearFilter />
      <ContainerCards>
        {paginatedMovies.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </ContainerCards>
      <Pagination totalItems={filteredMovies.length} />
    </Container>
  
  );
};

export default Movies;
