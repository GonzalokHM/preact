import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/dataSlice';

const useFetchData = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.data);

  useEffect(() => {
    // Solo despachamos `fetchData` si el estado es 'idle'
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  return { status, error };
};

export default useFetchData;
