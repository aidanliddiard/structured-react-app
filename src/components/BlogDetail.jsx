import React from 'react';
import { useHistory } from 'react-router-dom';
import { userAuth } from '../hooks/userHooks';

export default function BlogDetail({
  editButton,
  deleteBlogHook,
  blog,
  copyButton,
}) {
  const { user } = userAuth();
  const history = useHistory();

  if (!blog) return null;

  const handleDelete = async () => {
    await deleteBlogHook();
    history.replace('/blogs');
  };

  const handleEdit = () => {
    editButton();
  };
  const handleCopy = () => {
    copyButton();
  };

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.location}</h3>
      <p>{blog.weather}</p>
      <p>{blog.start_date}</p>
      <p>{blog.end_date}</p>
      <p>{blog.description}</p>
      {user.id === blog.user_id ? (
        <>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      ) : (
        <button onClick={handleCopy}>Copy</button>
      )}
    </div>
  );
}
