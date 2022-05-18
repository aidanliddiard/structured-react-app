import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { fetchBlogs } from '../utils/blogs';

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

  return { blogList, loading };
}
