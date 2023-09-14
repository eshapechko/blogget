import {Text} from '../../../../../../UI/Text/Text';
import style from './PostContentTitle.module.css';
import PropTypes from 'prop-types';

export const PostContentTitle = ({title}) => (
  <Text As="h2" className={style.title}>
    <Text
      As="a"
      size={18}
      tsize={24}
      dsize={32}
      fontWeight="bold"
      className={style.linkPost}
      href="#post"
    >
      {title}
    </Text>
  </Text>
);

PostContentTitle.propTypes = {
  title: PropTypes.string,
};
