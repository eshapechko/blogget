import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {Svg} from '../../../UI/SVG/Svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth : <Svg name="auth" className={style.svg} />}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
