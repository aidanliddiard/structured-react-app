import { createContext } from 'react';
import { useContext } from 'react';
import { blogData } from '../../MockBlogData';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  //const initialBlogs = blogData;

  const initialBlogs = {};

  const blogReducer = (state = initialBlogs, action) => {
    switch (action.type) {
      case 'FETCH':
        return { ...state, ...payload };

      default:
        return state;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const blogData = await fetchBlogs();
      setBlogs(blogData);
    };
    fetchData();
  }, []);

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
