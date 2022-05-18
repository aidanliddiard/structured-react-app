import client from './client';

export async function fetchBlogs() {
  const data = await client.from('travel_blogs').select('*');
  console.log('data', data);
  return data.data;
}
