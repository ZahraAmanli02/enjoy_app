import React from 'react';
import { Route } from 'react-router-dom';
import Film from '../Film/Film';
import Films from '../Films';
import { FilmsList } from '../../../data/films'

const filmsContainers = (props) => {
    let filmUrl = FilmsList.map(film => {
        return (
        <Route path={`/films/${film.url}`} render={() => <Film image={film.profile_img} name={film.name} description={film.description} /> } />
        );
    });
    return ( 
        <div>
            <Route exact path="/films" component={Films} />
            {filmUrl}
        </div>
     );
};
 
export default filmsContainers;
