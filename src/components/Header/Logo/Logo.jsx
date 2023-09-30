import {Link} from 'react-router-dom';
import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => (
  <Link className={style.link} to="/">
    <img className={style.logo} src={logo} alt="Логотип Blogget" />
  </Link>
);
