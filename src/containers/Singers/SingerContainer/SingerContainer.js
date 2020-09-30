import React from 'react';
import { Route } from "react-router-dom";
import { SingersList } from '../../../data/singers';
import Singers from '../Singers';
import Singer from '../Singer/Singer';


const singerContainer = (props) => {

    let singers = SingersList.map(singer => {
        return (
            <Route path={`/singers/${singer.url}`} render={() => <Singer image={singer.profile_image} name={singer.name} description={singer.description} />} />
        );
    });

    return ( 
        <div>
            <Route exact path="/singers" component={Singers} />
            {singers}
        </div>
     );
     
};
 
export default singerContainer;