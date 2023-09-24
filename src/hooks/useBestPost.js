import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useBestPost = () => {
  const token = useSelector(state => state.token);
  const [bestsPost, setBestPost] = useState([]);

  useEffect(() => {
    if (!token) {
      setBestPost([]);
      return;
    }

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 400) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => setBestPost(data.data.children))
      .catch(error => {
        if (error.toString().includes('400')) {
          alert('Ошибка сервера, зайдите позже');
        }
      });
  }, [token]);

  return [bestsPost];
};
