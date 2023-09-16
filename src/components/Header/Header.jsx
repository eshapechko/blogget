import PropTypes from 'prop-types';

import Layout from '../Layout';
import style from './Header.module.css';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

export const Header = ({token, delToken}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text="Главная" />
        <Search />
        <Auth token={token} delToken={delToken} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
