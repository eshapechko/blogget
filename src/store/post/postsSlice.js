import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  countPage: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.countPage = 0;
      state.data = [];
    },
  },
  extraReducers: {
    [postRequestAsync.pending.type]: state => {
      state.loading = true;
      state.error = '';
    },
    [postRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload.data];
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.countPage = action.payload.after ? state.countPage + 1 : 0;
    },
    [postRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {changePage} = postsSlice.actions;

export default postsSlice.reducer;
