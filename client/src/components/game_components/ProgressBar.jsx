import React from 'react';

const ProgressBar = ({ progress, color }) => {
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
    width: `${progress < 100 ? progress : 100}%`,
    backgroundColor: color,
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
}

export default ProgressBar;