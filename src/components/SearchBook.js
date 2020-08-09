import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BookListGrid from './BookListGrid'

class SearchBook extends React.Component {
    state = {
        value: '',
        bookList: []
    }

    updateValue = (value) => {
        this.setState({
            value:value
        })
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            BooksAPI.search(this.state.value)
            .catch(error => console.log(error))
            .then((books) => {
                if(books !== undefined){
                    this.setState({
                        bookList: books
                    })
                }
            })
        }, 800)
    }

    listSearch = () => {
        if(this.state.bookList.length > 0){
            return(
                <div className="search-books-results">
                    <BookListGrid books={this.state.bookList}/>
                </div>
            )
        }
        return <div></div>
    }

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.props.closeSearch()}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.value}
                            onChange={(e) => {this.updateValue(e.target.value)}}
                        
                        />
                        <this.listSearch />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBook;