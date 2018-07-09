import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'

class BookList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              shelfTitle='Currently Reading' 
              listBooks={this.props.currentlyReading}
              onUpdateShelf={this.props.onUpdateShelf}
              />
            <BookShelf 
              shelfTitle='Want to Read' 
              listBooks={this.props.wantToRead} 
              onUpdateShelf={this.props.onUpdateShelf}
              />
            <BookShelf 
              shelfTitle='Read' 
              listBooks={this.props.read} 
              onUpdateShelf={this.props.onUpdateShelf}
              />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList