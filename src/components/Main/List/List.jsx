import {useDispatch, useSelector} from 'react-redux';
import style from './List.module.css';
import Post from './Post';
import {PuffLoader} from 'react-spinners';
import {useEffect, useRef} from 'react';
import {postRequestAsync} from '../../../store/post/postAction';
import {Outlet, useParams} from 'react-router-dom';
import {changePage} from '../../../store/post/postsSlice';
import {searchRequest} from '../../../store/search/searchAction';

export const List = () => {
  const authData = useSelector(state => state.auth.data);
  const postsData = useSelector(state => state.post.data);
  const loading = useSelector(state => state.post.loading);
  const loadingSearch = useSelector(state => state.search.loadingSearch);
  const {page} = useParams();
  const dispatch = useDispatch();
  const authName = useSelector(state => state.auth.data.name);
  const countPage = useSelector(state => state.post.countPage);
  const endList = useRef(null);

  const searchData = useSelector(state => state.search.posts);
  const searchRequests = useSelector(state => state.search.searchRequest);
  const countSearchPage = useSelector(state => state.search.countSearchPage);
  const search = useSelector(state => state.search.search);
  const endListSearch = useRef(null);

  useEffect(() => {
    if (searchRequests) {
      dispatch(changePage(page));
      return;
    }
    dispatch(changePage(page));
    dispatch(postRequestAsync(page));
  }, [page, searchRequests]);

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
    if (countPage < 3 && postsData.length) {
      observer.observe(endList.current);
    }

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, countPage]);

  useEffect(() => {
    if (!authName) return;

    const observerSearch = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(searchRequest(search));
        }
      },
      {
        rootMargin: '100px',
      },
    );
    if (countSearchPage < 3 && searchData.length) {
      observerSearch.observe(endListSearch.current);
    }

    return () => {
      if (endListSearch.current) {
        observerSearch.unobserve(endListSearch.current);
      }
    };
  }, [endListSearch.current, countSearchPage]);

  const handleBtnClick = () => {
    if (postsData.length) {
      dispatch(postRequestAsync());
    } else {
      dispatch(searchRequest(search));
    }
  };

  return (
    <>
      {authData.name && (
        <>
          <ul className={style.list}>
            {loading || loadingSearch ? (
              <PuffLoader
                color="#cc6633"
                cssOverride={{
                  display: 'block',
                  margin: '0 auto',
                }}
                size={250}
              />
            ) : !searchData.length ? (
              postsData?.map(postData => (
                <Post key={postData.data.id} postData={postData} />
              ))
            ) : (
              searchData?.map(postData => (
                <Post key={postData.data.id} postData={postData} />
              ))
            )}

            <li ref={endListSearch} className={style.end} />

            <li ref={endList} className={style.end} />
          </ul>
          {(countPage || countSearchPage) >= 3 && (
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
