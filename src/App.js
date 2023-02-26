import React, { Component } from "react";
import "./App.css";
import { USERS_URL } from "./constants/AppConstants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch(USERS_URL)
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, filteredMonsters: users };
        })
      );
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString);
            });
            this.setState({
              filteredMonsters,
            });
          }}
        />
        {this.state.filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
