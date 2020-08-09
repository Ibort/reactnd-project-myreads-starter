import React from 'react';
import Book from './Book';

const BookListGrid = (props) => {
    return(
        <ol className="books-grid">
            {
                props.books.map(book => {
                    if(props.yourBooks) {
                        let isOnYourSelf = props.yourBooks.filter(e => e.title === book.title);
                        if(isOnYourSelf.length === 0) isOnYourSelf[0] = book;                         
                        return <Book 
                                    key={book.id} 
                                    bookData={isOnYourSelf[0]} 
                                    updateBookShelf={props.updateBookShelf}
                                    history={props.history}
                                    />
                    }
                    else {
                        return <Book 
                                    key={book.id} 
                                    bookData={book} 
                                    updateBookShelf={props.updateBookShelf}
                                    history={props.history}
                                    />
                    }
                    
            })}
        </ol>
    )
}

export default BookListGrid;