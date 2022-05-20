import client from './client';

export async function fetchBlogs(id) {
  let data;
  if (id) {
    data = await client.from('travel_blogs').select('*').match({ id }).single();
  } else {
    data = await client.from('travel_blogs').select('*');
  }
  return data.data;
}

export async function addBlog(newBlog) {
  const data = await client.from('travel_blogs').insert(newBlog);
  return data;
}

export async function deleteBlog(id) {
  const data = await client.from('travel_blogs').delete().match({ id });
  return data;
}

export async function editBlog(newBlog) {
  const data = await client
    .from('travel_blog')
    .update(newBlog)
    .match({ id: newBlog.id });
  return data;
}
