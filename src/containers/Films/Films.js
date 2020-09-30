import React from 'react';
import { FilmsList } from '../../data/films';
import { Link } from 'react-router-dom';
import './Films.css';

const films = (props) => {

    let films = FilmsList.map(film => {
        return (
            <div className="film-container">
                <Link to={`/films/${film.url}`}>
                    <div className="film-image" style={{ backgroundImage: "url(" + film.img_src + ")" }}></div>
                </Link>
                <h3>{film.name}</h3>
            </div>
        );
    });

    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>Films</h2>
            <div className="container">
                {films}
            </div>
        </div> 
    );
};      
 
export default films;