import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/CardList";

class App extends Component {
    constructor() {
        super();

        this.state = {
            people: []
        }
    }

    render() {
        return (
            <div className="App">
                <CardList people={ this.state.people }></CardList>
            </div>)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => this.setState({ people: data}))
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
