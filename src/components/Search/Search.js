import React, { Component } from 'react';
import './Search.css';
import { connect } from 'react-redux';
import { updateDrinksList, createError } from '../../actions';
import { fetchDrinkByIngredient, fetchRandomDrink } from '../../helpers/apiCalls';
import { Redirect } from 'react-router-dom'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      preference: '',
      randomDrink: null
    };
  }

  handleChange = (event) => {
    this.setState({ searchPhrase: event.target.value });
  };

  handleRadioClick = (event) => {
    this.setState({ preference: event.target.value });
  };

  searchClick = (event) => {
    const { searchPhrase, preference } = this.state;
    event.preventDefault();
    if (searchPhrase && preference) {
      fetchDrinkByIngredient(searchPhrase)
        .then((drinks) => {
          if (preference !== 'both') {
            const drinksList = this.filterDrinksByPreference(drinks.drinks, preference);
            this.props.handleSearch(drinksList);
          } else {
            this.props.handleSearch(drinks.drinks);
          }
        })
        .catch((error) => {
          this.props.handleError("We're sorry we could not find that ingredient. Check that you have spelled the ingredient correctly or try a different search.");
        });
    }
  };

  filterDrinksByPreference = (drinks, preference) => {
    let filterList;
    if (preference === 'alcoholic') {
      filterList = this.props.alcoholicDrinks;
    } else if (preference === 'non-alcoholic') {
      filterList = this.props.nonAlcoholicDrinks;
    }
    return drinks.filter((drink) => {
      return filterList.find((filterDrink) => {
        return filterDrink.idDrink === drink.idDrink;
      });
    });
  };

  randomClick = (event) => {
    event.preventDefault();
    fetchRandomDrink()
      .then(drink => {
        this.setState({ randomDrink: drink.drinks[0] });
      })
      .catch(error => {
        this.props.handleError('Our bartender is out. Please try again later.')
      })
  };

  render() {
    if (this.state.randomDrink) {
      return <Redirect to={`/recipe/${this.state.randomDrink.idDrink}/${this.state.randomDrink.strDrink}`} />
    }
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
    handleError: (error) => {
      dispatch(createError(error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
