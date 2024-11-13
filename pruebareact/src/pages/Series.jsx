import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData'
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination';
import YearFilter from '../components/YearFilter';
import {Container, ContainerCards, Title} from './MoviesSeries.styles'

const Series = () => {
  const { items, currentPage, itemsPerPage, filterYear } = useSelector((state) => state.data);
  const {status, error} = useFetchData


  // Filtrar y ordenar las series
  const filteredSeries = items
    .filter((item) => item.programType === 'series' && item.releaseYear >= 2010)
    .filter((item) => (filterYear ? item.releaseYear === parseInt(filterYear) : true))
    .sort((a, b) => a.title.localeCompare(b.title));
    
  // Paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSeries = filteredSeries.slice(startIndex, startIndex + itemsPerPage);

    // Manejamos los estados de carga y error
    if (status === 'loading') return <p>Cargando series...</p>;
    if (status === 'failed') return <p>Error al cargar los datos: {error}</p>;

  return (
    <Container>
      <title>Series</title>
      <YearFilter />
      <ContainerCards>
        {paginatedSeries.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </ContainerCards>
      <Pagination totalItems={filteredSeries.length} />
    </Container>
  
  );
};

export default Series;
