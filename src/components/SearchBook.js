import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BookListGrid from './BookListGrid'
import { Link } from 'react-router-dom'

class SearchBook extends React.Component {
    state = {
        value: '',
        bookList: []
    }

    bookApi= () => {
        BooksAPI.search(this.state.value)
        .catch(error => console.log(error))
        .then((books) => {
            this.setState({
                bookList: books
            })
        })
    }

    updateValue = (value) => {
        this.setState({
            value:value
        }, this.bookApi)  
    }

    listSearch = () => {
        if(this.state.bookList){
            if(this.state.bookList.length > 0){
                return(
                    <div className="search-books-results">
                        <BookListGrid 
                            books={this.state.bookList} 
                            updateBookShelf={this.props.updateBookShelf}
                            yourBooks={this.props.yourBooks}
                        />
                    </div>
                )
            }
        }
        return null
    }

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                    ><button className="close-search">Close</button>
                    </Link>
                    
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.value}
                            onChange={(e) => {this.updateValue(e.target.value)}}
                        
                        />
                    </div>
                </div>
                <this.listSearch />
            </div>
        )
    }
}

export default SearchBook;