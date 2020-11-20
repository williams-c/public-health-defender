import React, { useState } from 'react';
import CityMenu from './game_components/CityMenu';
import ProgressBar from './game_components/ProgressBar';
import CityManagement from './game_components/CityManagement';

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
    infected: Math.floor(Math.random() * 100000),
    spread: 7,
    income: 1500,
  },
]

const Game = () => {
  const [gameState, updateGameState] = useState('playing');
  const [cities, updateCities] = useState(sampleCities);
  const [selectedCity, updateSelectedCity] = useState('');
  const [totalMoney, updateTotalMoney] = useState(0);
  const [vaccineBuyout, updateVaccineBuyout] = useState(1000000);

  const handleCitySelect = (index) => {
    console.log(index)
    console.log(cities[index])
    updateSelectedCity(cities[index])
  }

  const returnToCityMenu = () => {
    updateSelectedCity('')
  }

  const handleTurn = () => {
    let newCities = cities;
    newCities.forEach((city) => {
      const increase = Math.ceil((city.spread / 100) * city.infected)
      city.infected += increase
      updateTotalMoney(totalMoney + city.income)
      // check if player has lost
      if (city.infected >= city.population) {
        updateGameState('defeat')
      }
    })
    updateCities([...newCities])
  }

  return (
    <div>

      {gameState === 'defeat' ? <div> Game Over ! </div> : ''}

      <h3>Vaccine Progress</h3>
      <ProgressBar progress={(totalMoney / vaccineBuyout) * 100} />

      {selectedCity ? <CityManagement goBack={returnToCityMenu} selectedCity={selectedCity} /> :
      <div>
        <CityMenu handleSelect={handleCitySelect} cities={cities} selectedCity={selectedCity}/>
        <button onClick={handleTurn} className="turn-btn">End Turn</button>
      </div>}

    </div>
  )
}

export default Game;