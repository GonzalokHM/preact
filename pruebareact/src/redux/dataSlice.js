import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
  );
  if (!response.ok) throw new Error('failed to fetch data');
  return await response.json();
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    itemsPerPage: 20,
    filterYear: '',
  },
  reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
      setItemsPerPage: (state, action) => {
        state.itemsPerPage = action.payload;
      },
      setFilterYear: (state, action) => {
        state.filterYear = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.entries;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setItemsPerPage, setFilterYear } = dataSlice.actions;
export default dataSlice.reducer;
