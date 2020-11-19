import React, { useState } from 'react';
import City from './City';

const CityMenu = ({ cities, selectedCity }) => {
  return (
    <div>
      {cities.map((city, index) => {
        return <City
                  name={city.name}
                  population={city.population}
                  infected={city.infected}
                  spread={city.spread}
                  income={city.income}
               />
      })}
    </div>
  )
}

export default CityMenu;