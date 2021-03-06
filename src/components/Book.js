import React from 'react';

class Book extends React.Component {
    state = {
        value:''
    }

    componentDidMount() {
        if(this.props.bookData.shelf) {
            this.setState({
                value: this.props.bookData.shelf
            })
        }
        else{
            this.setState({
                value: 'none'
            }) 
        }
    }

    updateValue = (e) => {
        this.props.updateBookShelf({id:this.props.bookData.id} ,e)
        this.setState({
            value: e
        })
    }

    authList = (list) => {
        if(list){
          return  list.map(auth => {
                return <div key={auth}>{auth}</div>
            })
        }
    }

    render() {
        const thumbnail = this.props.bookData.imageLinks ? this.props.bookData.imageLinks.thumbnail : '';
        return(
                <li key={this.props.bookData.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                            <div className="book-shelf-changer" style={{ backgroundColor: this.state.value === 'none' ? 'green' : 'blue'}}>
                                <select 
                                    onChange={(e) => {this.updateValue(e.target.value)}} 
                                    value={this.state.value}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{this.props.bookData.title} </div>
                        <div className="book-authors">{this.authList(this.props.bookData.authors)}</div>
                    </div>
                </li>
        )
    }
}


export default Book;