import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { addBlog, fetchBlogs } from '../services/blogs';

export function useBlogContext() {
  const context = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within BlogProvider');
  }

  const { blogList, dispatch } = context;

  useEffect(() => {
    console.log('in use effect', blogList);
    // if (blogList) return;
    const fetchData = async () => {
      const payload = await fetchBlogs();
      dispatch({ type: 'FETCH', payload });
      setLoading(false);
    };
    fetchData();
  }, []);

  const add = async () => {
    try {
      const payload = await addBlog(newBlog);
      dispatch({ type: 'ADD', payload });
    } catch (error) {
      console.log(error.message);
    }
  };

  return { blogList, loading, add };
}
