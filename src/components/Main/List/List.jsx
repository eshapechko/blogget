import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2023-09-11T03:45:00.000Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 65,
      date: '2023-09-21T04:45:00.000Z',
      id: '456',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 58,
      date: '2023-09-31T05:45:00.000Z',
      id: '567',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2023-03-10T06:45:00.000Z',
      id: '789',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map(postData => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
