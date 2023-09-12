import PropTypes from 'prop-types';
import style from './Post.module.css';

import {PostRating} from './PostRating/PostRating';
import {PostTime} from './PostTime/PostTime';
import {PostContent} from './PostContent/PostContent';
import {PostImage} from './PostImage/PostImage';
import {PostDelete} from './PostDelete/PostDelete';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <PostImage title={title} />

      <PostContent title={title} author={author} />

      <PostRating ups={ups} />

      <PostTime date={date} />

      <PostDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
