import style from './StartPage.module.css';
import {Text} from '../../../UI/Text/Text';
import {useSelector} from 'react-redux';

export const StartPage = () => {
  const authName = useSelector(state => state.auth.data.name);

  return (
    <div className={style.start}>
      <Text className={style.title} As="h1" size={26} tsize={34}>
        Стартовая страница
      </Text>
      <Text className={style.subtitle} As="p" size={16} tsize={20}>
        Добро пожаловать!
      </Text>

      <Text className={style.desc} As="p" size={16} tsize={20}>
        {authName ? 'Выберите категорию' : 'Пожалуйса пройдите авторизацию'}
      </Text>
    </div>
  );
};
