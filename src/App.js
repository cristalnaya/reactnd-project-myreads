import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import BookSearch from './BookSearch'
import BookList from './BookList'


class BooksApp extends React.Component {

  state = {
    myBooks: []
    /**
     * Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }


// Add books to state
  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({ myBooks })
    })
  }

  
  onUpdateShelf = (book, shelf) => {
    if (this.state.myBooks) {
      BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf
        const updateShelf = this.state.myBooks
        .filter(b => b.id !== book.id)
        updateShelf.push(book)
        this.setState({ myBooks: updateShelf })
      })
    }
  }

  render() {
    const currentlyReading = this.state.myBooks
    .filter((book) => book.shelf === 'currentlyReading')

    const wantToRead = this.state.myBooks
    .filter((book) => book.shelf === 'wantToRead')

    const read = this.state.myBooks
    .filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            onUpdateShelf={this.onUpdateShelf}
            />
          )}
        />
        <Route exact path="/search" render={({history}) => (
           <BookSearch
             onUpdateShelf={this.onUpdateShelf}
             history={history}
             books={currentlyReading.concat(wantToRead, read)}
             />
            )}
          />
      </div>
    );
  }
}

 

export default BooksApp
