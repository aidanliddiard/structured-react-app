import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetail from '../components/BlogDetail';
import BlogForm from '../components/BlogForm';
import { useBlogContext, useBlogsContext } from '../hooks/blogsHooks';

export default function DetailView() {
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
