import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf';

class BooksApp extends React.Component {
    state = {
        showSearchPage: false
    }

    render() {
        return(
            <div className="App">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <BookShelf />
                </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        )
    }

}

export default BooksApp;