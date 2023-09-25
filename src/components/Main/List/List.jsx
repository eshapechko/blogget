import {useBestPost} from '../../../hooks/useBestPost';
import style from './List.module.css';
import Post from './Post';
import {PuffLoader} from 'react-spinners';

export const List = () => {
  const [bestsPost, loading] = useBestPost();
  console.log('bestsPost: ', bestsPost);

  return (
    <>
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
        <ul className={style.list}>
          {bestsPost?.map(bestPost => (
            <Post
              key={bestPost.data.id}
              bestPost={bestPost}
              loading={loading}
            />
          ))}
        </ul>
      )}
    </>
  );
};
