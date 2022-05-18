import React, { useState } from 'react';
import { useEffect } from 'react';
import { useBlogContext } from '../hooks/blogsHooks';
// import { blogData } from '../../MockBlogData';

export default function ListView() {
  // const [blogs, setBlogs] = useState([]);
  const { blogList, loading } = useBlogContext();
  console.log('blogList', blogList);
  return (
    <>
      <h1>Welcome to Hear 'n There</h1>
      <h2>Previous Blogs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        blogList.map((blog) => <h3 key={blog.id}>{blog.title}</h3>)
      )}
    </>
  );
}
