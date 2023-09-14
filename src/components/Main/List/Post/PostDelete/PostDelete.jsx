import style from './PostDelete.module.css';
import {Svg} from '../../../../../UI/SVG/Svg';

export const PostDelete = () => (
  <button className={style.delete}>
    <Svg name="delete" />
  </button>
);
