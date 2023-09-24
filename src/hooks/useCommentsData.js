import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useCommentsData = id => {
  const token = useSelector(state => state.token);
  const [commentsPost, setCommentsPost] = useState([]);

  useEffect(() => {
    if (!token) {
      setCommentsPost([]);
    }

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {children},
          },
        ]) => {
          const comments = children.map(item => item.data);

          setCommentsPost([post, comments]);
        },
      )
      .catch(error => {
        if (error.toString().includes('401')) {
          alert('Ошибка авторизации, получите токен');
        }
      });
  }, [token]);

  return [commentsPost];
};
