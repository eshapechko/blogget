import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {PostContentAuthor} from './PostContentAuthor/PostContentAuthor';
import {PostContentTitle} from './PostContentTitle/PostContentTitle';

export const PostContent = ({title, author}) => (
  <div className={style.content}>
    <PostContentTitle title={title} />

    <PostContentAuthor author={author} />
  </div>
);

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
