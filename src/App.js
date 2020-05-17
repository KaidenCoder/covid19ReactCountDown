import React from 'react';
import logo from './img/spinner.gif';
import './App.css';
import Countdown from './Countdown';

function App() {
  const currentDate = new Date();
  console.log(currentDate.getMonth())
  const year = (currentDate.getMonth() === 5 && currentDate.getDate() === 31) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();


  return (
    <>
      <div className="year">
        31 May 2020
      </div>
      <h3>COVID-19 INDIA</h3>
      <br></br>
      <h1>Lockdown 4.0 Ends in</h1>
      {<Countdown date={`${year}-05-31T23:59:59`} /> || <img src={logo} alt="Loading..." id="loading" className="loading" />}
      {/* <img src={logo} alt="Loading..." id="loading" className="loading" /> */}
    </>
  );
}

export default App;
