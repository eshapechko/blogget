import {createSlice} from '@reduxjs/toolkit';
import {commentRequestAsync} from './commentAction';

const initialState = {
  loading: false,
  comment: '',
  updateComment: '',
  error: '',
  status: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    updateComment: (state, action) => {
      state.loading = false;
      state.updateComment = action.payload.updateComment;
      state.error = '';
    },
    clearComment: state => {
      state.loading = false;
      state.comment = '';
      state.updateComment = '';
      state.error = '';
      state.status = '';
    },
  },
  extraReducers: {
    [commentRequestAsync.pending.type]: state => {
      state.loading = true;
      state.error = '';
      state.status = 'loading';
    },
    [commentRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.comment = action.payload;
      state.error = '';
      state.status = 'loaded';
    },
    [commentRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.status = 'error';
    },
  },
});

export const {updateComment, clearComment} = commentsSlice.actions;

export default commentsSlice.reducer;
