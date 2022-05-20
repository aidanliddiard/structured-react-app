import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../hooks/blogsHooks';

export default function DetailView() {
  const { blogList, setId, loading } = useBlogContext();
  const { id } = useParams();

  useEffect(() => {
    setId(id);
  }, []);
  console.log('blogList', blogList);

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
        </>
      )}
      {/* TODO: Edit Button + Delete Button will go here? */}
    </div>
  );
}
