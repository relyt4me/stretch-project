import React, { Component} from 'react';
import Results from '../Results/Results';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import DrinkRecipe from '../DrinkRecipe/DrinkRecipe';
import drinkData from '../DrinkRecipe/drinkData.js';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchDrinks } from '../../helpers/apiCalls'
import { createAlcoholicDrinks, createNonAlcoholicDrinks, createError } from '../../actions'

//change /drinkRecipe to /:drinkId when we start importing data from api

class App extends Component {

  componentDidMount() {
    this.props.fetchData('Alcoholic');
    this.props.fetchData('Non_Alcoholic')
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Route exact path='/drinkRecipe' render={() => <DrinkRecipe drinkData={drinkData} />} />
        <Route
          exact
          path='/'
          render={() => (
            <>
              <Search />
              <Results />
            </>
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (type) => dispatch(collectDrinkData(type))
  }
}

const collectDrinkData = (type) => {
  return (dispatch) => {
    fetchDrinks(type)
      .then(drinks => {
        if (type === 'Alcoholic') {
          dispatch(createAlcoholicDrinks(drinks.drinks))
        } else {
          dispatch(createNonAlcoholicDrinks(drinks.drinks))
        }
      })
      .catch(error => {
        dispatch(createError('We\'re sorry, our bar is closed!'))
      })
  }
}

export default connect(null, mapDispatchToProps)(App);

