import React from 'react';
import { Route, Link } from 'react-router-dom';
import { BooksList } from '../../../data/books';
import Books from '../Books';
import Book from '../Book/Book'; 

const bookContainer = () => {
    let books = BooksList.map(book => {
        return (
            <Route path={`/books/${book.url}`} render={() => <Book image={book.profile_image} name={book.name} author={book.author} description={book.description} />} />
        );
    });
    return ( 
        <div>
            <Route exact path="/books" component={Books} />
            {books}
        </div>
     );
}
 
export default bookContainer;