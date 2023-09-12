import style from './PostContentAuthor.module.css';
import PropTypes from 'prop-types';

export const PostContentAuthor = ({author}) => (
  <a className={style.linkAuthor} href="#author">
    {author}
  </a>
);

PostContentAuthor.propTypes = {
  author: PropTypes.string,
};
