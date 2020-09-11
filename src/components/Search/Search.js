import React, { Component } from 'react';
import './Search.css';
import { connect } from 'react-redux';
import { updateDrinksList } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      preference: '',
      error: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchPhrase: event.target.value });
  };

  handleRadioClick = (event) => {
    this.setState({ preference: event.target.value });
  };

  searchClick = (event) => {
    event.preventDefault();
  };

  randomClick = (event) => {
    event.preventDefault();
    //make api fetch calls to get the list of drinks with that ingredient
    //`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.searchPhrase}`
    //then if preference was not 'both', filter list so that only drinks with ids included in that alcoholic/nonAlcoholic list passed down from props (whatever preference was selected) are included in final drinksList
    //then that drinksList should be dispatched to the store (handleSearch fn passing in drinksList)
  };

  render() {
    return (
      <form className='search-component'>
        <div className='search-label-wrapper'>
          <label htmlFor='searchPhrase' className='searchPhrase'>
            What do you have?
          </label>
          <input id='searchPhrase' className='searchPhrase-input' type='text' placeholder='Vodka' onChange={this.handleChange} />
        </div>
        <div className='search-preference-wrapper'>
          <span id='rg-label'>Preference</span>
          <div role='radiogroup' aria-labelledby='rg-label' className='preference-radio-wrapper'>
            <label htmlFor='both' onClick={this.handleRadioClick}>
              <input type='radio' id='both' name='preference' value='both' />
              Both
            </label>
            <label htmlFor='alcoholic' onClick={this.handleRadioClick}>
              <input type='radio' id='alcoholic' name='preference' value='alcoholic' />
              Alcoholic
            </label>
            <label htmlFor='non-alcoholic' onClick={this.handleRadioClick}>
              <input type='radio' id='non-alcoholic' name='preference' value='non-alcoholic' />
              Non Alcoholic
            </label>
          </div>
        </div>
        {this.state.error && <label className='invalid-search'>{this.state.error}</label>}
        <div className='search-buttons-wrapper'>
          <button className='search' aria-label='Find' onClick={this.searchClick}>
            Find Drinks
          </button>
          <button className='random' aria-label='Random' onClick={this.randomClick}>
            Random Drink
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { alcoholicDrinks: state.alcoholicDrinks, nonAlcoholicDrinks: state.nonAlcoholicDrinks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (drinksList) => {
      dispatch(updateDrinksList(drinksList));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
