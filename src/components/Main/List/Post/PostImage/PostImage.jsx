import style from './PostImage.module.css';
import PropTypes from 'prop-types';
import notphoto from '../img/notphoto.jpg';

export const PostImage = ({title, thumbnail}) => (
  <img
    className={style.img}
    src={thumbnail?.includes('.jpg') ? thumbnail : notphoto}
    alt={title}
  />
);

PostImage.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
