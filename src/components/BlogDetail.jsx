import React from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useBlogContext } from '../hooks/blogsHooks';
import { userAuth } from '../hooks/userHooks';

export default function BlogDetail() {
  const { id } = useParams();

  const { blog, deleteBlogHook } = useBlogContext(id);
  const { user } = userAuth();
  const history = useHistory();

  const handleDelete = async () => {
    await deleteBlogHook();
    history.replace('/blogs');
  };
  console.log('blog', blog);

  // const handleEdit = async () => {};

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.location}</h3>
      <p>{blog.weather}</p>
      <p>{blog.end_date}</p>
      <p>{blog.description}</p>
      {user.id === blog.user_id ? (
        <>
          <button onClick={handleDelete}>Delete</button>
          <button>Edit</button>
        </>
      ) : (
        <button>Copy</button>
      )}
    </div>
  );
}
