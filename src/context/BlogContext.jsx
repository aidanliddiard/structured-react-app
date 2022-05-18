import { createContext } from 'react';
import { useContext } from 'react';
import { blogData } from '../../MockBlogData';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const initialBlogs = blogData;

  return (
    <BlogContext.Provider value={{ initialBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error('useBlogContext must be used within BlogProvider');
  }
  return context;
};

export { BlogProvider, useBlogContext };
