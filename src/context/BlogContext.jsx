import { createContext } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { blogData } from '../../MockBlogData';

export const BlogContext = createContext();

// const initialBlogs = {};

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH':
      return action.payload;

    default:
      throw new Error('not a defined type for reducer');
  }
};

export const BlogProvider = ({ children }) => {
  const [blogList, dispatch] = useReducer(blogReducer);

  return (
    <BlogContext.Provider value={{ blogList, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
