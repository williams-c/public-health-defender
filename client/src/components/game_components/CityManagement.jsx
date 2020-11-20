import React from 'react';

const CityManagement = ({ goBack, selectedCity }) => {
  return (
    <div>
      <div>
        {selectedCity.name}
      </div>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default CityManagement;