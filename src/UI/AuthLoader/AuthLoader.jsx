import {RingLoader} from 'react-spinners';
import PropTypes from 'prop-types';

export const AuthLoader = ({size}) => (
  <RingLoader color="#cc6633" css={{display: 'block'}} size={size} />
);

AuthLoader.propTypes = {
  size: PropTypes.number,
};
