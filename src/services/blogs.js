import client from './client';

export async function fetchBlogs() {
  const data = await client.from('travel_blogs').select('*');
  return data.data;
}

export async function addBlog(newBlog) {
  const data = await client.from('travel_blogs').insert(newBlog);
  console.log('data', data);
  return data;
}
