import PropTypes from 'prop-types';
import style from './Post.module.css';
import {PostRating} from './PostRating/PostRating';
import {PostTime} from './PostTime/PostTime';
import {PostContent} from './PostContent/PostContent';
import {PostImage} from './PostImage/PostImage';
import {PostDelete} from './PostDelete/PostDelete';

export const Post = ({postData}) => {
  const {data} = postData;
  const {title, author, ups, created, thumbnail, id} = data;

  return (
    <li className={style.post}>
      <PostImage title={title} thumbnail={thumbnail} />

      <PostContent title={title} author={author} id={id} />

      <PostRating ups={ups} />

      <PostTime created={created} />

      <PostDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
