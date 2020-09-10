import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      error: '',
    };
  }

  render() {
    return (
      <form className='search-component'>
        <label htmlFor='searchPhrase' className='searchPhrase'>
          What do you have?
        </label>
        <input id='searchPhrase' className='searchPhrase-input' type='text' />
        <span id='rg-label'>Preference</span>
        <div role='radiogroup' aria-labelledby='rg-label'>
          <input type='radio' id='both' name='preference' value='both' checked />
          <label for='both'>Both</label>
          <input type='radio' id='alcoholic' name='preference' value='alcoholic' />
          <label for='alcoholic'>Alcoholic</label>
          <input type='radio' id='non-alcoholic' name='preference' value='non-alcoholic' />
          <label for='non-alcoholic'>Non Alcoholic</label>
        </div>
        {this.state.error && <label className='invalid-alert hide'>{this.state.error}</label>}
        <button className='search' aria-label='Submit'>
          Find Drinks
        </button>
        <button className='random' aria-label='Random'>
          Random Drink
        </button>
      </form>
    );
  }
}

export default Search;
