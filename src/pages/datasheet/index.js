import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css'
import Navbar from '../../components/navbar';
import Loading from '../../components/loading';


export default class Datasheet extends Component {
    state = {
        film: {},
        filmId: 0,
        loading: false,
    };

    async componentDidMount() {
        this.setState({ loading: true })
        const { id } = this.props.match.params

        const response = await api.get(`/films/${id}/`).then(response => {
            this.setState({ loading: false })
            return response;
        });

        this.setState({ film: response.data })
    }

    render() {
        const { film, loading } = this.state;

        return (
            <div className="film-info">
                <Navbar filmId={this.props.match.params.id}/>
                <Loading loading={loading} message='' />

                {this.state.loading ? null :
                    <div className="result">
                        <h1>{film.title}</h1>
                        <p>Director: {film.director}</p>
                        <p>Producer: {film.producer}</p>
                        <p>Realese Date: {film.release_date}</p>
                    </div>
                }
                
 
            </div>
        )
    }
} 