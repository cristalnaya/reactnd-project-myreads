import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'


class BookSearch extends Component {

	state = {
		query: '',
		books: []
	}

	searchBooks = (e) => {
    const query = e.target.value.trim()
    this.setState( { query: query })
    BooksAPI.search(query, 20).then(books => {
      this.setState({ books })
    })
  }

  render() {
  	const {query} = this.state

  return (
  	<div className="search-books">
        <div className="search-books-bar">
           <Link to="/" className="close-search">Close</Link>
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
                	value={ query }
                	onChange={this.searchBooks}
                />
              </div>
            </div>
            <div className="search-books-results">
            	<Book
            		books={this.state.books}
            		onUpdateShelf={this.props.onUpdateShelf}
            	/>
            </div>
          </div>
  		)
	}
}

	export default BookSearch
