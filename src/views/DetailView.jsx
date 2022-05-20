import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import BlogDetail from '../components/BlogDetail';
import EditBlog from '../components/EditBlog';
import { useBlogContext, useBlogsContext } from '../hooks/blogsHooks';
import { userAuth } from '../hooks/userHooks';

export default function DetailView() {
  // const { blogList, setId, deleteBlogHook } = useBlogsContext();

  const { loading, editing } = useBlogContext();
  console.log('editing', editing);

  let content;

  if (editing) {
    content = (
      <>
        <EditBlog />
      </>
    );
  } else {
    content = (
      <>
        <BlogDetail />
      </>
    );
  }

  return (
    <div>
      <h1>Detail</h1>
      {loading ? <p>Loading...</p> : content}
    </div>
  );
}
