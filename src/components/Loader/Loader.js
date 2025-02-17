import React from 'react';
import './Loader.scss';


export const Loader = () => (
  <div className="loader-container">
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
