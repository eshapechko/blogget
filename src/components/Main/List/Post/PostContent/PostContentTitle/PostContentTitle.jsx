import style from './PostContentTitle.module.css';
import PropTypes from 'prop-types';

export const PostContentTitle = ({title}) => (
  <h2 className={style.title}>
    <a className={style.linkPost} href="#post">
      {title}
    </a>
  </h2>
);

PostContentTitle.propTypes = {
  title: PropTypes.string,
};
