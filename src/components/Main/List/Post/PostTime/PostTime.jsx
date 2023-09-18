import formatDate from '../../../../../utils/formatDate';
import style from './PostTime.module.css';
import PropTypes from 'prop-types';

export const PostTime = ({created}) => (
  <time className={style.date} dateTime={created}>
    {formatDate(created)}
  </time>
);

PostTime.propTypes = {
  created: PropTypes.number,
};
