import React from 'react';

export default function BlogForm() {
  return (
    <>
      <form>
        <input
          aria-label="title input"
          name="title"
          placeholder="Title"
          type="text"
        />
        <input
          aria-label="location input"
          name="location"
          placeholder="Location"
          type="text"
        />
        <input aria-label="start date input" name="startDate" type="date" />
        <input aria-label="end date input" name="endDate" type="date" />
        <div>
          <p>Weather:</p>
          <label>
            <input aria-label="sunny checkbox" name="sunny" type="checkbox" />
            Sunny
          </label>
          <label>
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
          </label>
          <textarea
            aria-label="description input"
            name="description"
            placeholder="Description"
            type="text"
            rows={5}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
