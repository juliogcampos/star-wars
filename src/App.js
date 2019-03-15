import React, { Component } from 'react';
import axios from "axios";
import logo from './img/logo.png';
import UserForm from "./components/UserForm";

class App extends Component {

  state = {
    name: "Tatooine",
    population: 200000,
    climate: "arid",
    terrain: "desert",
    films: 5
  }

  getPlanet = (e) => {

    e.preventDefault();
    var number = Math.floor((Math.random() * 61) + 1);

    axios
      .get(`https://swapi.co/api/planets/${number}/?format=json`)
      .then((res) => {
        var name = res.data.name;
        var population = res.data.population;
        var climate = res.data.climate;
        var terrain = res.data.terrain;
        var films = res.data.films.length;

        this.setState({
          name: name,
          population: population,
          climate: climate,
          terrain: terrain,
          films: films
        });

      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <img alt="logo" className="logo" src={logo} />
        </header>

        <figure className="planet">
          <h3>{this.state.name}</h3>
          <div>Population: {this.state.population}</div>
          <div>Climate: {this.state.climate}</div>
          <div>Terrain: {this.state.terrain}</div>
          <div><p>Featured in {this.state.films} films</p></div>
          <UserForm getPlanet={this.getPlanet} />
        </figure>
      </div>
    );
  }

};

export default App;
