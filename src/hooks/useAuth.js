import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
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
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(error => {
        console.log(error);
        if (error.toString().includes('401')) {
          alert('Ошибка токена, получите новый токен');
        }

        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
