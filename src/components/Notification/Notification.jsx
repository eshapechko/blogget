import ReactDOM from 'react-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = () => {
  const notify = () => toast.error('Ошибка авторизации');
  return ReactDOM.createPortal(
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    >
      {notify()}
    </ToastContainer>,
    document.getElementById('notification'),
  );
};
