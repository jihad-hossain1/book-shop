import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook';

const Books = () => {
    const loadBooks = useLoaderData();
    const books = loadBooks.books
    // console.log( 'data loadded',loadBooks.books);
    return (
        <div>
            <h3>Total Books: {books.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    books.map(book => <SingleBook key={book.isbn13} book={book}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default Books;