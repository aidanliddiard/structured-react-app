import { useState, useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { addBlog, deleteBlog, editBlog, fetchBlogs } from '../services/blogs';

export function useBlogContext(id) {
  const context = useContext(BlogContext);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [copying, setCopying] = useState(false);

  if (context === undefined) {
    throw new Error('useBlogContext must be used within BlogProvider');
  }

  const { blogList, dispatch } = context;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const payload = await fetchBlogs(id);
        setBlog(payload);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  const deleteBlogHook = async () => {
    if (!blog) return;
    try {
      const payload = await deleteBlog(blog.id);
      setBlog(null);
      if (blogList) dispatch({ type: 'DELETE', payload });
      return payload; /* do we need this?? */
    } catch (error) {
      console.log(error.message);
    }
  };

  const editButton = () => {
    setEditing(true);
  };

  const copyButton = () => {
    setCopying(true);
  };

  const edit = async (newBlog, id) => {
    if (!blog) return;
    try {
      const payload = await editBlog(newBlog, id);
      dispatch({ type: 'EDIT', payload });
      return payload;
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    blog,
    deleteBlogHook,
    edit,
    loading,
    editing,
    editButton,
    copying,
    copyButton,
  };
}

export function useBlogsContext() {
  const [loading, setLoading] = useState(true);
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error('useBlogContext must be used within BlogProvider');
  }

  const { blogList, dispatch } = context;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const payload = await fetchBlogs();
        dispatch({ type: 'FETCH', payload });
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const add = async (newBlog) => {
    try {
      const payload = await addBlog(newBlog);
      dispatch({ type: 'ADD', payload });
    } catch (error) {
      console.log(error.message);
    }
  };

  return { blogList, add, loading };
}
