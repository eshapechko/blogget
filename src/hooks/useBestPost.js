import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/post/postAction';

export const useBestPost = () => {
  const token = useSelector(state => state.token.token);
  const bestsPost = useSelector(state => state.post.data);
  const loading = useSelector(state => state.post.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);

  return [bestsPost, loading];
};
