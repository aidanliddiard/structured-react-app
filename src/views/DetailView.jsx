import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../hooks/blogsHooks';

export default function DetailView() {
  const { blogList, setId, loading } = useBlogContext();
  console.log('setId', setId);
  useEffect(() => {
    const { id } = useParams();
    setId(id);
    // console.log('id', useParams().id);
    console.log('blogList', blogList);
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? <p>Loading...</p> : <h1>{blog.title}</h1>}
      {/* <h3>{blog.location}</h3>
      <p>{blog.weather}</p>
      <p>{blog.description}</p> */}
      {/* TODO: Edit Button + Delete Button will go here? */}
    </div>
  );
}
