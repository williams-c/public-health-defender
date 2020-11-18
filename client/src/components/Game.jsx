import React, { useState } from 'react';
import CityMenu from './game_components/CityMenu';

const sampleCities = [
  {
    name: 'Denver',
    population: 3000000,
    infected: 0,
    spread: 5,
    income: 1000,
  },
  {
    name: 'Seattle',
    population: 4000000,
    infected: 0,
    spread: 7,
    income: 1500,
  },
]

const Game = () => {
  const [cities, updateCities] = useState(sampleCities);

  return (
    <div>
      <CityMenu cities={cities}/>
    </div>
  )
}

export default Game;