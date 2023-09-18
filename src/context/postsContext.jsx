import {createContext} from 'react';
import PropTypes from 'prop-types';
import {useBestPost} from '../hooks/useBestPost';

export const postsContext = createContext({});

export const PostsContextProvider = ({children}) => {
  const [bestsPost] = useBestPost();

  return (
    <postsContext.Provider value={[bestsPost]}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
