import React from 'react';
import { Link } from 'react-router-dom';
import './Singer.css'

const singer = (props) => {
    return ( 
        <div className="main-content">
            <div><Link to="/singers" className="back">Back</Link></div>
            <div className="container">
                <div className="image-profile" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
     );
};
 
export default singer;