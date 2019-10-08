import React, { Component } from 'react';
import './App.css';
import CardList from "./components/CardList";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cars: [
                { id: 0, name: 'Audi' },
                { id: 1, name: 'Peugeot' },
                { id: 2, name: 'Mazda' },
                { id: 3, name: 'Mitsubishi' },
            ]
        }
    }

    render() {
        return (<div className="App">
            <CardList>{ this.state.cars.map((car) => (<h1 key={ car.id }>{ car.name }</h1>)) }</CardList>
        </div>)
    }
}

// function App() {
//   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={ logo } className="App-logo" alt="logo"/>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//   );
// }

export default App;
