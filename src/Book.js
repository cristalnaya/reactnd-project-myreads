import React, { Component } from 'react';


class Book extends Component {
	
   onUpdateBookShelf = (event) => {
    const shelf = event.target.value;
    this.props.onUpdateShelf(this.props.book, shelf);
  };

  render () {
    const {book} = this.props
  	return (
  		<div className="book">
        <div className="book-top">
         	<div className="book-cover" 
            style={{ 
              width: 128, 
              height: 192, 
              backgroundImage: `url("${ book.imageLinks.thumbnail }")`
            }} />
             <div className="book-shelf-changer">
              <select 
                onChange={this.onUpdateBookShelf}
                defaultValue={book.shelf}>
                <option value="move">Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read</option>
                 <option value="none">None</option>
               </select>
               </div>
             </div>
             <div className="book-title">{book.title}</div>
             <div className="book-authors">{book.authors}</div>
          </div>
        	)
      }
  }

export default Book