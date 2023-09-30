import style from './ErrorPage.module.css';

export const ErrorPage = () => (
  <div className={style.error}>
    <h2 className={style.title}>Произошла ошибка, попроверьте URL</h2>
  </div>
);
