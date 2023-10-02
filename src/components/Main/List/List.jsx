import {useDispatch, useSelector} from 'react-redux';
import style from './List.module.css';
import Post from './Post';
import {PuffLoader} from 'react-spinners';
import {useEffect, useRef} from 'react';
import {postRequestAsync} from '../../../store/post/postAction';
import {Outlet, useParams} from 'react-router-dom';
import {changePage} from '../../../store/post/postsSlice';

export const List = () => {
  const authData = useSelector(state => state.auth.data);
  const bestsPost = useSelector(state => state.post.data);
  console.log('bestsPost: ', bestsPost);
  const loading = useSelector(state => state.post.loading);
  const {page} = useParams();
  const dispatch = useDispatch();
  const authName = useSelector(state => state.auth.data.name);
  const countPage = useSelector(state => state.post.countPage);
  const endList = useRef(null);

  useEffect(() => {
    dispatch(changePage(page));
    dispatch(postRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!authName) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(postRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      },
    );

    if (countPage < 3) {
      observer.observe(endList.current);
    }

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, countPage]);

  const handleBtnClick = () => {
    dispatch(postRequestAsync());
  };

  return (
    <>
      {authData.name && (
        <>
          <ul className={style.list}>
            {loading ? (
              <PuffLoader
                color="#cc6633"
                cssOverride={{
                  display: 'block',
                  margin: '0 auto',
                }}
                size={250}
              />
            ) : (
              bestsPost?.map(bestPost => (
                <Post key={bestPost.data.id} bestPost={bestPost} />
              ))
            )}

            <li ref={endList} className={style.end} />
          </ul>
          {countPage >= 3 && (
            <button className={style.btn} onClick={handleBtnClick}>
              Показать ещё
            </button>
          )}
          <Outlet />
        </>
      )}
    </>
  );
};
