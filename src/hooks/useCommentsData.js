import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentRequestAsync} from '../store/comment/commentAction';

export const useCommentsData = id => {
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.comment.loading);
  const bestPost = useSelector(state => state.comment.comment);
  const status = useSelector(state => state.comment.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentRequestAsync(id));
  }, [token]);

  return [bestPost, status, loading];
};
