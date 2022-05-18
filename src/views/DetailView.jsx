import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';

export default function DetailView() {
  const { initialBlogs } = useBlogContext();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const thisBlog = initialBlogs.filter((blog) => blog.id === Number(id));
    setBlog(thisBlog[0]);
  }, [id]);

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.location}</h3>
      <p>{blog.weather}</p>
      <p>{blog.description}</p>
      {/* TODO: Edit Button + Delete Button will go here? */}
    </div>
  );
}
