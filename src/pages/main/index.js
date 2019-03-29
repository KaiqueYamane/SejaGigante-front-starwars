import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css'
import Loading from '../../components/loading';

export default class Main extends Component {
    state = {
        films: [],
        loading: false,
    }

    componentDidMount(){
        this.setState({ loading: true })
        this.loadfilms();
    }

    loadfilms = async () => {
        const response = await api.get("/films/").then(response => {
            this.setState({ loading: false })
            return response;
        });
        
        this.setState({ films : response.data.results });
    }

    render(){
        const { films, loading } = this.state;

        return (
            <div className="film-list">
                <Loading loading={loading} message='' />
                {films.map(film =>
                <article key={film.episode_id}>
                    <strong>{film.title} (Episode {film.episode_id})</strong>
                    <p>{film.opening_crawl}</p>

                    <Link to={`/details/${film.url.replace("https://swapi.co/api/films/", "")}synopsis`}>Ver mais</Link>
                </article>
                )}
            </div>
        )
    }
}