import {Text} from '../../../UI/Text/Text';
import {PostTime} from '../../Main/List/Post/PostTime/PostTime';
import style from './Comments.module.css';
import PropTypes from 'prop-types';

export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments ? (
      comments.map(item => (
        <li key={item.id} className={style.item}>
          <Text As="h3" className={style.author} size={18} tsize={22}>
            {item.author}
          </Text>
          <Text As="p" className={style.comment} size={14} tsize={18}>
            {item.body}
          </Text>
          {item.created ? <PostTime created={Number(item.created)} /> : ''}
        </li>
      ))
    ) : (
      <Text As="p" className={style.comment} size={14} tsize={18}>
        Нет комментариев
      </Text>
    )}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
