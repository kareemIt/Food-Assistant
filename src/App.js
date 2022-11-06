import React, { useState } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import './style.css';
//https://serpapi.com/
export default function App() {
  const [userLocation, setUserLocation] = useState('');
  const [userRadius, setUserRadius] = useState('');
  const [foodChoosen, setFoodChoosen] = useState('');
  const [foundResult, setFoundResult] = useState('');

  return (
    <div className="container">
      <h1>Food Assistant</h1>
      <div className="inner-container">
        <div className="location-container">
          <h2>Location</h2>
          <input type="text" />
        </div>

        <div className="radius-container">
          <h2>Radius</h2>
          <select>
            <option>5 miles </option>
            <option>10 miles </option>
            <option>15 miles </option>
          </select>
        </div>
      </div>

      <div className="food-container">
        <h2>Types of food</h2>
        <input type="text" />
      </div>

      <Search />
    </div>
  );
}
