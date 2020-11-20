import React from 'react';

const CityManagement = ({ goBack, selectedCity }) => {
  return (
    <div className="city-wrapper">
      <div className="city-name">
        {selectedCity.name}
      </div>
      <button>Change Restrictions</button><br/>
      <button>Implement New Policies</button><br/>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default CityManagement;