import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';

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
          {/* moved HTML code to separate components */}
         {/* Display imported components below */}
         <Route exact path="/" render={() => (
            <MainPage
            // pass props to child page
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
          )}
        />
        <Route path="/search" render={() => (
          <SearchPage
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp