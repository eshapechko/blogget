import {Text} from '../../../../../../UI/Text/Text';
import style from './PostContentAuthor.module.css';
import PropTypes from 'prop-types';

export const PostContentAuthor = ({author}) => (
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
);

PostContentAuthor.propTypes = {
  author: PropTypes.string,
};
