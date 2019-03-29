import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css'
import Navbar from '../../components/navbar';
import Loading from '../../components/loading';

export default class Details extends Component {
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
                <h1>{film.title}</h1>
                <p>{film.opening_crawl}</p>
                
            </div>
        )
    }
} 