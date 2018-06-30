# MyReads Project

This is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that are use to persist information as you interact with the application.


## Install and Run the app


* Clone this repo in your terminal with the command `git clone https://github.com/cristalnaya/reactnd-project-myreads.git`
* or just download it to your computer
* change directory into `cd reactnd-project-myreads-master`
* run `npm install` in your terminal
* run `npm start` and the app will run locally on port: 3000.

Note: [Node JS](https://nodejs.org/en/download/) and [NPM (Node Package Manager)](https://www.npmjs.com/get-npm) is required to install and run the application. 

## Structure of the App
```bash
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── SEARCH_TERMS.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── Book.js
    ├── BooksAPI.js
    ├── BookSearch.js
    ├── BookShelf.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    ├── index.js
    └── NoMatch.js

```


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Tools Used

* [starter code](https://github.com/udacity/reactnd-project-myreads-starter) provided by Udacity

