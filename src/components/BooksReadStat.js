import React from 'react';
import Book from './Book';

const BooksReadStat = (props) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                <Book />
            </div>
        </div>
    )
}

export default BooksReadStat;