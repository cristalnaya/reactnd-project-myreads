import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import BookSearch from './BookSearch'
import BookShelf from './BookShelf'
import NoMatch from './NoMatch'


class BooksApp extends React.Component {

  state = {
    books: [],
    /**
     * Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBooks(shelf) {
    return this.state.books.filter(book => book.shelf === shelf)
  }

  onUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    return (
      <div className="app">
      <Switch>
        <Route path="/search" render={() => (
          <BookSearch
            onUpdateShelf={this.onUpdateShelf}
            />
          )}
        />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf
                title="Currently Reading"
                books={this.updateBooks("currentlyReading")}
                onUpdateShelf={this.onUpdateShelf}
              />
              <BookShelf
                title="Read"
                books={this.updateBooks("read")}
                onUpdateShelf={this.onUpdateShelf}
              />
              <BookShelf
                title="Want To Read"
                books={this.updateBooks("wantToRead")}
                onUpdateShelf={this.onUpdateShelf}
              />
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          </div>
        )}
       />
       <Route component={NoMatch} />
       </Switch>
      </div>
    )
  }
}

 

export default BooksApp
