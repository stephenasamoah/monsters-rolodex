import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'

class App extends Component {
    constructor() {
        super();

        this.state = {
            displayText: 'Hello, Asamoah'
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo"/>
                    <p>
                        { this.state.displayText }
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    <button onClick={ () => this.setState({ displayText: 'Welcome' }) }>Change text</button>
                </header>
            </div>
        )
    }

    swapState() {
        return this.setState({ displayText: 'Welcome' })
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
