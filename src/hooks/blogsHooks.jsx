import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { addBlog, fetchBlogs } from '../services/blogs';

export function useBlogContext() {
  const context = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within BlogProvider');
  }

  const { blogList, dispatch } = context;

  useEffect(() => {
    // if (blogList) return;
    const fetchData = async () => {
      const payload = await fetchBlogs(id);
      dispatch({ type: 'FETCH', payload });
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const add = async (newBlog) => {
    try {
      const payload = await addBlog(newBlog);
      dispatch({ type: 'ADD', payload });
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   const thisBlog = initialBlogs.filter((blog) => blog.id === Number(id));
  //   setBlog(thisBlog[0]);
  // }, [id]);

  return { blogList, loading, add, setId };
}
