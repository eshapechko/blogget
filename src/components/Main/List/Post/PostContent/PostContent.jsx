import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

export const PostContent = ({title, author}) => (
  <div className={style.content}>
    <Text As="h2" className={style.title}>
      <Text
        As="a"
        size={18}
        tsize={26}
        fontWeight="bold"
        className={style.linkPost}
        href="#post"
      >
        {title}
      </Text>
    </Text>

    <Text
      As="a"
      size={12}
      tsize={14}
      color={'orange'}
      className={style.linkAuthor}
      href="#author"
    >
      {author}
    </Text>
  </div>
);

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
