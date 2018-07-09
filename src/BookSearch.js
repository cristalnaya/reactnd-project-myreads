import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';


class BookSearch extends Component {

	state = {
		results: [],
    query: ''
	}

	searchBooks = (event) => {
    const query = event.target.value;
    this.setState( { query: query })

    if (!query) {
      this.setState({results: []});
      return;
    }

    BooksAPI.search(query, 20).then(results => {
      if (results.error) {
      results = [];
    }

    if (query === this.state.query) {
      results = results.map((book) => {
      const onShelf = this.props.books
      .find(b => b.id === book.id);

      if (onShelf) {
            book.shelf = onShelf.shelf;
      } else {
            book.shelf = "none";
          }
          return book;
        })

      this.setState({results});
      }
    });
  };

  render() {
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
             	onChange={this.searchBooks}
             />
           </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results && this.state.results.map(book => (
              <li key={book.id}>
            	 <Book 
                book={book}
                onUpdateShelf={this.props.onUpdateShelf}/>
              </li>
              ))}
          </ol>
         </div>
       </div>
  	);
	}
}

	export default BookSearch
