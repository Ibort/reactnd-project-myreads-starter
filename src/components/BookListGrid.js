import React from 'react';
import Book from './Book';

const BookListGrid = (props) => {
    return(
        <ol className="books-grid">
            {
                props.books.map(book => {
                    return <Book key={book.id} bookData={book} updateBookShelf={props.updateBookShelf}/>
            })}
        </ol>
    )
}

export default BookListGrid;