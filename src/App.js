
import './App.css';
import Fighter from './components/Fighter'

function App() {

  const fighters = [
    {name: 'Wario', color: 'ochre'},
    {name: 'Yoshi', color: 'green'},
    {name: 'Ganondorf', color: 'red'},
    {name: 'Kirby', color: 'pink'},
    {name: 'Samus', color: 'firebrick'},
    {name: 'Sheik', color: 'midnightblue'},
    {name: 'Link', color: 'green'},
    {name: 'Mario', color: 'blue'},
    {name: 'Zelda', color: 'white'},
    {name: 'Fox', color: 'gray'},
    {name: 'Inkling', color: 'purple'}
  ]
  return (
    <div className="App">
       <h1>Fighters</h1>
       <div className="fighters-grid">
       {
        fighters.map((element, index) => {
          return(
            <Fighter fighter={element}/>
          )
        })
       }
       </div>
    </div>
  );
}

export default App;
