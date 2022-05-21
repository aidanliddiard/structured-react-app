import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import BlogDetail from '../components/BlogDetail';
import BlogForm from '../components/BlogForm';
import EditBlog from '../components/EditBlog';
import { useBlogContext, useBlogsContext } from '../hooks/blogsHooks';
import { userAuth } from '../hooks/userHooks';

export default function DetailView() {
  // const { blogList, setId, deleteBlogHook } = useBlogsContext();
  const { id } = useParams();
  const {
    blog,
    loading,
    deleteBlogHook,
    editing,
    editButton,
    copying,
    copyButton,
  } = useBlogContext(id);

  if (!blog) return null;

  return (
    <div>
      <h1>Detail</h1>
      {loading && <p>Loading...</p>}
      {editing || copying ? (
        <BlogForm blog={blog} editing={editing} copying={copying} />
      ) : (
        <BlogDetail
          editButton={editButton}
          blog={blog}
          deleteBlogHook={deleteBlogHook}
          copyButton={copyButton}
        />
      )}
    </div>
  );
}
