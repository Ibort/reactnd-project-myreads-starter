import React from 'react'
import BooksReadStat from './BooksReadStat'


class BooksShelf extends React.Component {
    
    render() {
        const currR = this.props.yourBooks.filter(books => books.shelf === "currentlyReading")
        const wantR = this.props.yourBooks.filter(books => books.shelf === "wantToRead")
        const read = this.props.yourBooks.filter(books => books.shelf === "read")
        return(
            <div>
                <BooksReadStat name="Currently Reading"  books={currR}/>
                <BooksReadStat name="Want to Read" books={wantR}/>
                <BooksReadStat name="Read" books={read}/>
            </div>
        )
    }

}

export default BooksShelf;