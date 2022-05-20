import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useBlogContext } from '../hooks/blogsHooks';
import { userAuth } from '../hooks/userHooks';

export default function DetailView() {
  const { blogList, setId, loading, deleteBlogHook } = useBlogContext();
  const { user } = userAuth();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    setId(id);
  }, []);
  //console.log('blogList', blogList);

  const handleDelete = async () => {
    console.log('indetail', id);
    await deleteBlogHook(id);
    history.push('/blogs');
  };

  const handleEdit = async () => {};

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{blogList[0].title}</h1>
          <h3>{blogList[0].location}</h3>
          <p>{blogList[0].weather}</p>
          <p>{blogList[0].end_date}</p>
          <p>{blogList[0].description}</p>
          {user.id === blogList[0].user_id ? (
            <>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={handleEdit}>Edit</button>
            </>
          ) : (
            <button>Copy</button>
          )}
        </>
      )}
      {/* TODO: Edit Button + Delete Button will go here? */}
    </div>
  );
}
