import React from 'react';
import ProgressBar from './ProgressBar';

const City = ({ name, population, infected, spread, income }) => {
  return (
    <div className="city-wrapper">

      <div className="city-info">

        <div className="city-name">{name}</div>
        <div className="city-stats">Population: {population}</div>
        <div className="city-stats">Total Infected: {infected}</div>
        <ProgressBar progress={infected > population ? 100 : (infected / population) * 100} type={'infection'}/>
        <div className="city-stats">Infection Rate: {spread}%</div>
        <div className="city-stats">Income: {income}</div>

      </div>

    </div>
  )
}

export default City;