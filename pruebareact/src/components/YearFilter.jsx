import { useDispatch, useSelector } from 'react-redux';
import { setFilterYear } from '../redux/dataSlice';

const YearFilter = () => {
  const dispatch = useDispatch();
  const filterYear = useSelector((state) => state.data.filterYear);

  return (
    <div>
      <label>Filtrar por año:</label>
      <input
        type="number"
        value={filterYear}
        onChange={(e) => dispatch(setFilterYear(e.target.value))}
        placeholder="Ejemplo: 2015"
      />
    </div>
  );
};

export default YearFilter;