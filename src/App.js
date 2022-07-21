
import './App.css';
import Fighter from './components/Fighter'
import FighterScreen from './components/FighterScreen'
import { useState } from 'react'

function App() {

  const fighters = [
    {name: 'Wario', color: 'orange'},
    {name: 'Yoshi', color: 'green'},
    {name: 'Ganondorf', color: 'red'},
    {name: 'Kirby', color: 'pink'},
    {name: 'Samus', color: 'firebrick'},
    {name: 'Sheik', color: 'black'},
    {name: 'Link', color: 'green'},
    {name: 'Mario', color: 'blue'},
    {name: 'Zelda', color: 'white'},
    {name: 'Fox', color: 'gray'},
    {name: 'Inkling', color: 'purple'},
    {name: 'Pikachu', color: 'yellow'},
  ]

  const [selectedFighter, setSelectedFighter] =useState()

  return (
    <div className="App">
       <h1>Fighters</h1>
       <div className="fighters-grid">
       {
        fighters.map((element, index) => {
          return(
            <Fighter fighter={element} setSelectedFighter={setSelectedFighter}/>
          )
        })
       }
       </div>
       {
        //conditional render (based on ternary)
        selectedFighter ?
        <FighterScreen />
        : null
       }
    </div>
  );

}

export default App;
