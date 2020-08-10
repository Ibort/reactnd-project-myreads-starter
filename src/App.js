import React from 'react'
import './App.css'
import BookShelf from './components/BookShelf';
import SearchBook from './components/SearchBook'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {    
    state = {
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

    updateBookShelf= (bookId, state) => {
        BooksAPI.update(bookId, state)
        .then(() => this.getYourBooks())
    }

    render() {
        return(
            <div className="App">
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookShelf 
                            yourBooks={this.state.yourBooks} 
                            updateBookShelf={this.updateBookShelf}
                        />
                        <div className="open-search">
                            <Link
                                to='/search'
                            ><button>Add a book</button>
                            </Link>
                            
                        </div>
                    </div>
                )} />
                <Route path='/search' render={() => (
                    <SearchBook 
                        updateBookShelf={this.updateBookShelf}
                        yourBooks={this.state.yourBooks}
                    />
                )} />
            </div>
        )
    }

}

export default BooksApp;