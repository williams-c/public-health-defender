import React from 'react';

const InfectionBar = ({ progress }) => {
  const containerStyles = {
    height: 20,
    width: 'auto',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#e0e0de",
    marginBottom: 10,
  }

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: "#0040e1",
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
}

export default InfectionBar;