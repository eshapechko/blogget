import style from './PostDelete.module.css';
import DeleteIconPath from '../img/delete.svg';
import {Svg} from '../../../../../UI/SVG/Svg';

export const PostDelete = () => (
  <button className={style.delete}>
    <Svg path={DeleteIconPath} id="delete" />
  </button>
);
