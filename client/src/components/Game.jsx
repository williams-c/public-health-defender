import React, { useState } from 'react';
import CityMenu from './game_components/CityMenu';

const sampleCities = [
  {
    name: 'Denver',
    population: 3000000,
    infected: Math.floor(Math.random() * 1000),
    spread: 5,
    income: 1000,
  },
  {
    name: 'Seattle',
    population: 4000000,
    infected: Math.floor(Math.random() * 1000),
    spread: 7,
    income: 1500,
  },
]

const Game = () => {
  const [gameState, updateGameState] = useState('playing');
  const [cities, updateCities] = useState(sampleCities);

  const handleTurn = () => {
    let newCities = cities;
    newCities.forEach((city) => {
      const increase = Math.ceil((city.spread / 100) * city.infected)
      city.infected += increase
      if (city.infected >= city.population) {
        updateGameState('defeat')
      }
    })
    updateCities([...newCities])
  }

  return (
    <div>
      {gameState === 'defeat' ? <div> Game Over ! </div> : ''}
      <CityMenu cities={cities}/>
      <button onClick={handleTurn} className="turn-btn">End Turn</button>
    </div>
  )
}

export default Game;