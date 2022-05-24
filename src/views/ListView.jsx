import { useBlogsContext } from '../hooks/blogsHooks';
import { Link } from 'react-router-dom';

export default function ListView() {
  const { blogList, loading } = useBlogsContext();
  return (
    <>
      <h1>Welcome to Hear 'n There</h1>
      <h2>Previous Blogs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        blogList.map((blog) => (
          <h3 key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </h3>
        ))
      )}
    </>
  );
}
