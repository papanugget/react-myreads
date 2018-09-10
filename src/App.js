import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      this.setState({ books: books })
    })
  }

  changeShelf=(book, shelf) => {
    BooksAPI.update(book, shelf)

    // refreshes UI after changing shelf
    this.componentDidMount()
  }

  render() {
    // console.log(this.state.books)

    return (
      <div className="app">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
         {/* moved HTML code to separate components */}
         {/* Display imported components below */}
         <MainPage
          // pass props to child page
          books={this.state.books}
          changeShelf={this.changeShelf}
         />
         <SearchPage/>
      </div>
    )
  }
}

export default BooksApp
