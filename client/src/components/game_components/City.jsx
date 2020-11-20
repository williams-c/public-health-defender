import React from 'react';
import ProgressBar from './ProgressBar';

const City = ({ index, handleSelect, name, population, infected, spread, income, history, beds }) => {
  return (
    <div onClick={() => {handleSelect(index)}} className="city-wrapper">

      <div className="city-info">

        <div className="city-name">{name}</div>
        <div className="city-stats">Population: {population}</div>
        <div className="city-stats">Infection Rate: {spread}%</div>
        <div className="city-stats">Income: {income}</div>

        <div className="city-stats">Active Cases: {history[0][0] + history[1][0]}</div>
        <div className="city-stats">Hospitalized: {history[0][1] + history[1][1]}</div>

        <div className="city-stats">Hospital Capacity</div>
        <ProgressBar
          progress={100 * ((history[0][1] + history[1][1]) / beds)}
          color={100 * ((history[0][1] + history[1][1]) / beds) < 100 ? '#edc628' : '#d91c1c'}
        />

        <div className="city-stats">Total Infected: {infected}</div>
        <ProgressBar progress={infected > population ? 100 : (infected / population) * 100} color={"#0040e1"}/>

        <div className="city-stats">Deaths: </div>

      </div>

    </div>
  )
}

export default City;