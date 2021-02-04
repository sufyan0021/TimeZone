import logo from './logo.svg';
import './App.css';
import React, { useEffect,useState } from 'react';
import getData from './utils/getData';
import TimeZone from './components/TimeZone';

import {TimeContext} from './context/TimeContext';

function App() {

  const [timeZones, settimeZones] = useState();

  //fetching timezone data-list
  useEffect(()=>{
    const dataFetcher = async()=>{
        var prom =  await getData();
        settimeZones(prom.data.zones);
    } 
    dataFetcher();    
  },[])

  return (
    <div className="App">
      {/*passing context value to child components*/}
      <TimeContext.Provider value={timeZones}>
          <TimeZone/>
      </TimeContext.Provider>
    </div>
  );
}

export default App;
