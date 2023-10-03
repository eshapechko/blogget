import {useParams} from 'react-router';
import style from './ErrorPage.module.css';

export const ErrorPage = () => {
  const page = useParams();

  return (
    <>
      {page['*'] === 'auth' ? (
        ''
      ) : (
        <div className={style.error}>
          <h2 className={style.title}>Произошла ошибка, попроверьте URL</h2>
        </div>
      )}
    </>
  );
};
