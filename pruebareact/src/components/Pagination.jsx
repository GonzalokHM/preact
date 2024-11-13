import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setItemsPerPage } from '../redux/dataSlice';

const Pagination = ({ totalItems }) => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state) => state.data);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <button onClick={() => dispatch(setCurrentPage(Math.max(1, currentPage - 1)))} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={() => dispatch(setCurrentPage(Math.min(totalPages, currentPage + 1)))} disabled={currentPage === totalPages}>
        Siguiente
      </button>
      <select value={itemsPerPage} onChange={(e) => dispatch(setItemsPerPage(Number(e.target.value)))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
};

export default Pagination;
