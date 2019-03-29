import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
import Navbar from "../../components/navbar";
import Loading from "../../components/loading";

export default class Character extends Component {
  state = {
    film: {},
    character: [],
    filmId: 0,
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { id } = this.props.match.params;

    const response = await api.get(`/films/${id}/`).then(response => {
      return response;
    });

    this.setState({ film: response.data });

    this.loadCharacters();

    this.setState({ loading: false });  
  }

  loadCharacters = async () => {
    const { film } = this.state;

    for (var i = 0; i < film.characters.length; i++) {
      const response = await api.get(
        `/people/${film.characters[i].replace(
          "https://swapi.co/api/people/",
          ""
        )}`
      );

      this.setState({
        character: [...this.state.character, response.data.name]
      });

      this.setState({ loading: false });  
    }
  };

  render() {
    const { film, loading, character } = this.state;

    return (
      <div className="film-info">
        <Navbar filmId={this.props.match.params.id} />
        <Loading loading={loading} message="" />

        <h1>{film.title}</h1>

        <div className="content">
            {character.map(character => (
            <article key={character}>
                <strong> 
                {character}
                </strong>
            </article>
            ))}
        </div>
        
      </div>
    );
  }
}
