import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPost = () => {
  const {token} = useContext(tokenContext);
  const [bestsPost, setBestPost] = useState([]);

  useEffect(() => {
    if (!token) {
      setBestPost([]);
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
