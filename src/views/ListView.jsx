import React, { useState } from 'react';
import { useEffect } from 'react';
import { useBlogContext } from '../context/BlogContext';
import { fetchBlogs } from '../utils/blogs';
// import { blogData } from '../../MockBlogData';

export default function ListView() {
  const [blogs, setBlogs] = useState([]);
  // const { initialBlogs } = useBlogContext();

  return (
    <>
      <h1>Welcome to Hear 'n There</h1>
      <h2>Previous Blogs</h2>
      {blogs.map((blog) => (
        <h3 key={blog.id}>{blog.title}</h3>
      ))}
    </>
  );
}
