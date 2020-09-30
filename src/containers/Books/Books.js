import React from 'react';
import { BooksList } from '../../data/books';
import { Link } from 'react-router-dom';
import './Books.css'

const books = (props) => {
    let books = BooksList.map(book => {
        return(
            <div className="book-container">
                <Link to={`/books/${book.url}`}>
                    <div className="book-image" style={{ backgroundImage: "url(" + book.img_src + ")" }}></div>
                </Link>
                <h3>{book.name}</h3>
                <h4>{book.author}</h4>
            </div>
        );
    });
    return (
        <div className="main-content">
            <Link className="back" to="/">Back</Link>
            <h2>Books</h2>
            <div className="container">
                {books}
            </div>
        </div>
    );
}
 
export default books;