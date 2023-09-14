import PropTypes from 'prop-types';
import Icons from './sprite.svg';

export const Svg = ({name, className}) => (
  <svg className={className}>
    <use href={`${Icons}#icon-${name}`}></use>
  </svg>
);

Svg.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};
