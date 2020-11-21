import React, { useState } from 'react';
import RestrictionsMenu from './RestrictionsMenu';
import PolicyMenu from './PolicyMenu';

const CityManagement = ({ changeRestrictions, goBack, selectedCity }) => {
  const [activeMenu, changeActiveMenu] = useState('')

  const handleMenuSelect = (choice) => {
    changeActiveMenu(choice)
  }

  return (
    <div className="city-management-wrapper">

      <div className="city-name">
        {selectedCity.name}
      </div>

      {activeMenu === 'restrictions' ?
        <RestrictionsMenu changeRestrictions={changeRestrictions} selectedCity={selectedCity} /> :
        <button onClick={(e) => {handleMenuSelect(e.target.value)}} className="mgmt-btn" value="restrictions">Change Restrictions</button>}
      <br/>

      {activeMenu === 'policy' ?
        <PolicyMenu selectedCity={selectedCity} /> :
        <button onClick={(e) => {handleMenuSelect(e.target.value)}} className="mgmt-btn"    value="policy">Implement New Policies</button>}
      <br/>

      <button onClick={goBack} className="mgmt-btn">Go Back</button>

    </div>
  )
}

export default CityManagement;