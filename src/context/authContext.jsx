import {createContext} from 'react';
import PropTypes from 'prop-types';
import {useAuth} from '../hooks/useAuth';

export const authContext = createContext({});

export const AuthContextProvider = ({children}) => {
  const [auth, clearAuth] = useAuth();

  return (
    <authContext.Provider value={{auth, clearAuth}}>
      {children}
    </authContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
