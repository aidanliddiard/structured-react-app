import client from './client';

export async function fetchBlogs() {
  const data = await client.from('travel_blogs').select('*');
  return data.data;
}
