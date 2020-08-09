import React from 'react';
import BookListGrid from './BookListGrid';

const BooksReadStat = (props) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                {props.books.length > 0 && 
                    <BookListGrid books={props.books}/>
                } 
            </div>
        </div>
    )
}

export default BooksReadStat;