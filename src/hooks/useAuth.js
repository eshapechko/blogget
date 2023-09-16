import {useEffect, useState} from 'react';

export const useAuth = (URL_API, token, delToken, state) => {
  const [auth, setAuth] = useState(state);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          delToken();
          throw new Error('Ошибка запроса на авторизацию, связанная с токеном');
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

  return [auth];
};
