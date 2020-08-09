import React from 'react'
import './App.css'
import BookShelf from './components/BookShelf';
import SearchBook from './components/SearchBook'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    constructor() {
        super();
        this.timeout =  0;
    }
    
    state = {
        showSearchPage: false,
        searchedBooks : [],
        yourBooks: []
    }

    componentDidMount() {
        this.getYourBooks()
    }

    getYourBooks = () => {
        BooksAPI.getAll()
        .then(books => this.setState({ yourBooks:books }))
    }

    closeSearch = () => {
        this.setState({ showSearchPage: false })
    }

    render() {
        return(
            <div className="App">
                 {this.state.showSearchPage ? (
                     <SearchBook closeSearch={this.closeSearch} />
                 ) : (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <BookShelf yourBooks={this.state.yourBooks}/>
                    <div className="open-search">
                        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                    </div>
                </div>
                 )}
            </div>
        )
    }

}

export default BooksApp;