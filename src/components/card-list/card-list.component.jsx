import React, { Component } from "react";
import { Card } from "../card/card.component";
import { SearchButton } from "../search-box/search-box.component";

import "./card-list.styles.css";

export default class CardList extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      monstersFiltered: [],
      searchFieldValue: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({ monsters: users, monstersFiltered: users })
      );
  }

  handleSearch = e => {
    const keyPressed = e.target.value;
    const monstersFiltered = this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(keyPressed.toLowerCase())
    );
    /* this.setState(prevState => {
      return {
        searchFieldValue: keyPressed,
        monstersFiltered: monstersFiltered
      };
    }); */
    this.setState({ monstersFiltered: monstersFiltered });
  };

  render() {
    const { monstersFiltered } = this.state;
    /* const { monsters, searchFieldValue } = this.state;
    const monstersFiltered = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    ); */
    return (
      <React.Fragment>
        <SearchButton
          placeholder="Search monsters..."
          /* handleChange={e =>
            this.setState({ searchFieldValue: e.target.value })
          } */
          handleChange={this.handleSearch}
        />
        <div className="card-list">
          {monstersFiltered.map(monster => (
            <Card key={monster.id} monster={monster} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
