import React from 'react';
import { Link } from 'react-router-dom';

const Loader = () => {
  const loaderStyle = {
    width: '93px',
    height: '24px',
    borderRadius: '15px',
    background: 'linear-gradient(#D73D00 0 0) 0/0% no-repeat #4cd1d1',
    animation: 'l2 4s infinite steps(10)',
    position: 'relative',
  };

  const invertText = {
    position: 'static',
    top: '50 %',
    left: '50 %',
    transform: 'translate(-50 %, -50 %)',
    color: 'white'
  };

  const keyframesStyle = `
    @keyframes l2 {
      100% { background-size: 110%; }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={loaderStyle}>
        <span style={invertText} className="font-medium">&nbsp;&nbsp;&nbsp;Beta Health</span>
      </div>
    </>
  );
};

export default Loader;
