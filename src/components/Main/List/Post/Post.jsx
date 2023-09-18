import PropTypes from 'prop-types';
import style from './Post.module.css';

import {PostRating} from './PostRating/PostRating';
import {PostTime} from './PostTime/PostTime';
import {PostContent} from './PostContent/PostContent';
import {PostImage} from './PostImage/PostImage';
import {PostDelete} from './PostDelete/PostDelete';

export const Post = ({bestPost}) => {
  const {data} = bestPost;
  const {title, author, ups, created, thumbnail} = data;

  return (
    <li className={style.post}>
      <PostImage title={title} thumbnail={thumbnail} />

      <PostContent title={title} author={author} />

      <PostRating ups={ups} />

      <PostTime created={created} />

      <PostDelete />
    </li>
  );
};

Post.propTypes = {
  bestPost: PropTypes.object,
};
