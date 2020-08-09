import React from 'react'
import BooksReadStat from './BooksReadStat'


const BooksShelf = (props) => {
    const currR = props.yourBooks.filter(books => books.shelf === "currentlyReading")
    const wantR = props.yourBooks.filter(books => books.shelf === "wantToRead")
    const read = props.yourBooks.filter(books => books.shelf === "read")
    return(
        <div>
            <BooksReadStat name="Currently Reading"  books={currR} updateBookShelf={props.updateBookShelf}/>
            <BooksReadStat name="Want to Read" books={wantR} updateBookShelf={props.updateBookShelf}/>
            <BooksReadStat name="Read" books={read} updateBookShelf={props.updateBookShelf}/>
        </div>
    )
}

export default BooksShelf;