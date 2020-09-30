import React from 'react';
import { Link } from "react-router-dom";
import './Book.css';

const book = (props) => {
    return (
        <div className="main-content">
            <Link to="/books" className="back">Back</Link>
            <div >
                <div className="image-profile" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
                <h2>{props.name}</h2>
                <h3 >{props.author}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};
 
export default book;