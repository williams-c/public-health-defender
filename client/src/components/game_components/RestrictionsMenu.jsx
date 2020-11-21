import React from 'react';

const RestrictionsMenu = ({ selectedCity, changeRestrictions }) => {
  return (
    <div className="submenu-wrapper">

      <button onClick={(e) => {changeRestrictions(selectedCity.name, 0)}} className={selectedCity.restrictionLevel === 0 ? "inactive-menu-btn" : "menu-btn"} value='0'>
        <p>No Restrictions</p>
        <p><span className="negative-effect">Spread ++++ </span><span className="positive-effect">Income +++ </span></p>
      </button>

      <button onClick={(e) => {changeRestrictions(selectedCity.name, 1)}}  className={selectedCity.restrictionLevel === 1 ? "inactive-menu-btn" : "menu-btn"} value='1'>
        <p>Level One</p>
        <p><span className="negative-effect">Spread +++ </span><span className="positive-effect">Income ++ </span></p>
      </button>

     <button onClick={(e) => {changeRestrictions(selectedCity.name, 2)}}  className={selectedCity.restrictionLevel === 2 ? "inactive-menu-btn" : "menu-btn"} value='2'>
        <p>Level Two</p>
        <p><span className="positive-effect">Spread - </span><span className="negative-effect">Income - </span></p>
      </button>

      <button onClick={(e) => {changeRestrictions(selectedCity.name, 3)}}  className={selectedCity.restrictionLevel === 3 ? "inactive-menu-btn" : "menu-btn"} value='3'>
        <p>Level Three</p>
        <p><span className="positive-effect">Spread -- </span><span className="negative-effect">Income --- </span></p>
      </button>

     <button onClick={(e) => {changeRestrictions(selectedCity.name, 4)}}  className={selectedCity.restrictionLevel === 4 ? "inactive-menu-btn" : "menu-btn"}value='4'>
        <p>Level Four</p>
        <p><span className="positive-effect">Spread --- </span><span className="negative-effect">Income ---- </span></p>
      </button>

    </div>
  )
}

export default RestrictionsMenu