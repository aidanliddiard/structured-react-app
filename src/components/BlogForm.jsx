import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useBlogContext, useBlogsContext } from '../hooks/blogsHooks';
import { userAuth } from '../hooks/userHooks';
import { parseDate } from '../utils/parseDate';

export default function BlogForm({ blog = null, editing, copying }) {
  const { add } = useBlogsContext();
  const { edit } = useBlogContext();
  const { user } = userAuth();
  const history = useHistory();

  const [title, setTitle] = useState(
    copying ? `Copy of ${blog.title}` : blog?.title || ''
  );
  const [location, setLocation] = useState(blog?.location || '');
  const [startDate, setStartDate] = useState(blog?.start_date.toString() || '');
  const [endDate, setEndDate] = useState(blog?.end_date.toString() || '');
  //const [weather, setWeather] = useState('');
  const [description, setDescription] = useState(blog?.description || '');
  const [alert, setAlert] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate) return setAlert('Date is required!');
    const newBlog = {
      title,
      location,
      start_date: parseDate(startDate),
      end_date: parseDate(endDate),
      weather: 'sunny',
      description,
      user_id: user.id,
    };
    if (editing) {
      await edit(newBlog, blog.id);
    } else {
      await add(newBlog);
    }

    history.push('/blogs');
  };

  return (
    <>
      {alert && <p style={{ color: 'red' }}>{alert}</p>}
      {editing && <h2>Editing</h2>}
      {copying && <h2>Copy of {blog.title}</h2>}
      <form onSubmit={handleSubmit}>
        <input
          aria-label="title input"
          name="title"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          aria-label="location input"
          name="location"
          placeholder="Location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          aria-label="start date input"
          name="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          aria-label="end date input"
          name="endDate"
          type="date"
          value={endDate}
          min={startDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <div>
          <p>Weather:</p>
          {/* <label>
            <input
              aria-label="sunny checkbox"
              name="sunny"
              type="checkbox"
              value={weather}
              onChange={setWeather('Sunny')}
            />
            Sunny
          </label> */}
          {/* <label>
            <input aria-label="snowy checkbox" name="snowy" type="checkbox" />
            Snowy
          </label>
          <label>
            <input aria-label="Rainy checkbox" name="Rainy" type="checkbox" />
            Rainy
          </label>
          <label>
            <input aria-label="Hot checkbox" name="Hot" type="checkbox" />
            Hot
          </label>
          <label>
            <input aria-label="Cloudy checkbox" name="Cloudy" type="checkbox" />
            Cloudy
          </label>
          <label>
            <input aria-label="Cold checkbox" name="Cold" type="checkbox" />
            Cold
          </label>
          <label>
            <input aria-label="Windy checkbox" name="Windy" type="checkbox" />
            Windy
          </label> */}
          <textarea
            aria-label="description input"
            name="description"
            placeholder="Description"
            type="text"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
