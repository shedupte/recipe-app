import './App.css';
import React,{useEffect, useState } from 'react';

function App() {

  const APP_ID='82841968';
  const APP_KEY='7794f3dc2d70cff758355fa60bb59ff8';

  const exampleReq= `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter]=useState(0);

  useEffect(()=>{
    console.log("effect has been run");
  },[])

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          submit
        </button>
      </form>
      <h1>
        <button onClick={()=> setCounter(counter+1)} >{counter}</button>
      </h1>
    </div>
  );
}

export default App;
    