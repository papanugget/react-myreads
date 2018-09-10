import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
    render() {
        console.log(this.props.books)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Experimental</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        {/* moved book to book.js component */}
                        <Book/>
                    </li>
                </ol>
            </div>
            </div>
        );
    }
}

export default BookShelf;