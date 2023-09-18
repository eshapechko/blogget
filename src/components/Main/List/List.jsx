import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postsContext} from '../../../context/postsContext';

export const List = () => {
  const [bestsPost] = useContext(postsContext);
  console.log('bestsPost: ', bestsPost);

  return (
    <ul className={style.list}>
      {bestsPost?.map(bestPost => (
        <Post key={bestPost.data.id} bestPost={bestPost} />
      ))}
    </ul>
  );
};
