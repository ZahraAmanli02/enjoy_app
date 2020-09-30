import React from 'react';
import  './Navbar.css'
import { NavLink } from 'react-router-dom';

const navbar = () => (
    <div>
        <nav>
            <h2 className="logo"><a className="logo-link" href="#">Enjoy</a></h2>
            <ul className="nav-menu">
                <NavLink className="nav-menu__link" activeClassName="activate" exact to="/">Home</NavLink>
                <NavLink className="nav-menu__link" activeClassName="activate" to="/films">Films</NavLink>
                <NavLink className="nav-menu__link" activeClassName="activate" to="/books">Books</NavLink>
                <NavLink className="nav-menu__link" activeClassName="activate" to="/singers">Singers</NavLink>
            </ul>
        </nav>
    </div>
);
 
export default navbar;