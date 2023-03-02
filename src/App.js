import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { USERS_URL } from "./constants/AppConstants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch(USERS_URL)
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState({
      searchString,
    });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
