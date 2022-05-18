import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useBlogContext } from '../hooks/blogsHooks';
import { parseDate } from '../utils/parseDate';

export default function BlogForm() {
  const { add } = useBlogContext();

  const history = useHistory();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  //const [weather, setWeather] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    add({
      title,
      location,
      startDate: parseDate(startDate),
      endDate: parseDate(endDate),
      weather: 'sunny',
      description,
    });
    history.push('/blogs');
  };

  return (
    <>
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
