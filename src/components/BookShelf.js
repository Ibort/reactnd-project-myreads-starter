import React from 'react'
import BooksReadStat from './BooksReadStat'


class BooksShelf extends React.Component {
    render() {
        return(
            <div>
                <BooksReadStat name="Currently Reading" />
                <BooksReadStat name="Want to Read"/>
                <BooksReadStat name="Read"/>
            </div>
        )
    }

}

export default BooksShelf;