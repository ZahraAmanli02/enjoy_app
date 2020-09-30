import React from 'react';
import { Link } from 'react-router-dom';
import { SingersList } from '../../data/singers';
import './Singers.css';

const singers = (props) => {

    let singers = SingersList.map(singer => {
        return (
            <div className="singer-container">
                <Link to={`/singers/${singer.url}`}>
                    <div className="singer-image" style={{ backgroundImage: "url(" + singer.img_src + ")" }}></div>  
                </Link>   
                <h3>{singer.name}</h3>           
            </div>
        );
    })
    return ( 
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>Singers</h2>
            <div className="container">
                {singers}
            </div>
        </div>
     );
};
 
export default singers;