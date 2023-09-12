import formatDate from '../../../../../utils/formatDate';
import style from './PostTime.module.css';
import PropTypes from 'prop-types';

export const PostTime = ({date}) => (
  <time className={style.date} dateTime={date}>
    {formatDate(date)}
  </time>
);

PostTime.propTypes = {
  date: PropTypes.string,
};
