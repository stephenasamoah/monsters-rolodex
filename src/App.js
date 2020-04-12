import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/CardList";
import { SearchBox } from "./components/SearchBox/SearchBox.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            people: [],
            keywords: ''
        };
    }

    searchHandler = evt => {
        this.setState({ keywords: evt.target.value });
    };

    render() {
        const { people, keywords } = this.state;
        const userType = keywords.toLowerCase();

        const filtered = people.filter((p) => {
            const parsedName = p.name.toLowerCase();
            return parsedName.includes(userType);
        });

        return (
            <div className="App">
                <h1 className={'title'}>Monsters Rolodex</h1>

                <SearchBox placeholder={ 'Search people...' }
                           changeHandler={ this.searchHandler }/>
                <CardList people={ filtered }></CardList>
            </div>);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => this.setState({ people: data }));
    }
}

export default App;
