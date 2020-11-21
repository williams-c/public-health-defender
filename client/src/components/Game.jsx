import React, { useState } from 'react';
import CityMenu from './game_components/CityMenu';
import ProgressBar from './game_components/ProgressBar';
import CityManagement from './game_components/CityManagement';

const sampleCities = [
  {
    name: 'Denver',
    population: 3000000,
    infected: 500,
    spread: 5,
    income: 1000,
    infectionHistory: [[500,5],[500,5]],
    hospitalized: 0,
    hospitalBeds: 2000,
    restrictionLevel: 0,
  },
  {
    name: 'Seattle',
    population: 4000000,
    infected: 750,
    spread: 7,
    income: 1500,
    infectionHistory: [[750,7],[750,7]],
    hospitalized: 0,
    hospitalBeds: 3500,
    restrictionLevel: 1,
  },
]

const Game = () => {
  const [gameState, updateGameState] = useState('playing');
  const [cities, updateCities] = useState(sampleCities);
  const [selectedCity, updateSelectedCity] = useState('');
  const [totalMoney, updateTotalMoney] = useState(0);
  const [vaccineBuyout, updateVaccineBuyout] = useState(1000000);

  const handleCitySelect = (index) => {
    updateSelectedCity(cities[index])
  }

  const returnToCityMenu = () => {
    updateSelectedCity('')
  }

  const changeRestrictions = (name, level) => {
    let newCities = cities;
    newCities.forEach((city) => {
      if (city.name === name) {
        city.restrictionLevel = level;
      }
    })
    updateCities([...newCities])
  }

  const handleTurn = () => {
    let newCities = cities;
    newCities.forEach((city) => {
      const increase = city.infectionHistory[1][0] + Math.ceil((city.spread / 100) * city.infectionHistory[1][0])
      city.infected += increase
      // remove history from two weeks ago and add current week
      // tuple[0] num infected, tuple[1] num of tuple[0] that are hospitalized
      city.infectionHistory.shift()
      let hospitalized = Math.ceil(((Math.random() * 4) / 100) * increase)
      city.infectionHistory.push([increase, hospitalized])
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
      <ProgressBar progress={(totalMoney / vaccineBuyout) * 100} color={'#188028'} />

      {selectedCity ? <CityManagement changeRestrictions={changeRestrictions} goBack={returnToCityMenu} selectedCity={selectedCity} /> :
      <div>
        <CityMenu handleSelect={handleCitySelect} cities={cities} selectedCity={selectedCity}/>
        <button onClick={handleTurn} className="turn-btn">End Turn</button>
      </div>}

    </div>
  )
}

export default Game;