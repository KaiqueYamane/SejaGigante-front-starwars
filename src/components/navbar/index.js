import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  state = {
    id: 0,
  };

  componentDidMount(){
    this.setState({ id: this.props.filmId })
  }

  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <ul className="rigth">
            <li><NavLink to={`/`}>Home</NavLink></li>
            <li><NavLink to={`/details/${this.state.id}/synopsis`}>Synopsis</NavLink></li>
            <li><NavLink to={`/details/${this.state.id}/datasheet`}>Datasheet</NavLink></li>
            <li><NavLink to={`/details/${this.state.id}/character`}>Characters</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  
  }
}