import style from './PostImage.module.css';
import PropTypes from 'prop-types';
import notphoto from '../img/notphoto.jpg';

export const PostImage = ({title}) => (
  <img className={style.img} src={notphoto} alt={title} />
);

PostImage.propTypes = {
  title: PropTypes.string,
};
