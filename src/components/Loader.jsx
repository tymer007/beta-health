// Loader.js
import React from 'react';

const Loader = () => {
  const loaderStyle = {
    width: '50px',
    height: '15px',
    borderRadius: '15px',
    background: 'linear-gradient(#D73D00 0 0) 0/0% no-repeat #4cd1d1',
    animation: 'l2 5s infinite steps(10)'
  };

  const keyframesStyle = `
    @keyframes l2 {
      100% { background-size: 110%; }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={loaderStyle}></div>
    </>
  );
};

export default Loader;
