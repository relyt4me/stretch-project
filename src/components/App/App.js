import React, { Component} from 'react';
import Results from '../Results/Results';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import DrinkRecipe from '../DrinkRecipe/DrinkRecipe';
import drinkData from '../DrinkRecipe/drinkData.js';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { collectDrinkData } from '../../actions'
// import '../../containers/appContainer'

//change /drinkRecipe to /:drinkId when we start importing data from api

class App extends Component {

  componentDidMount() {
    this.props.fetchData('Alcoholic');
    this.props.fetchData('Non_Alcoholic')
    //fetch call here
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

// export default App;
export default connect(null, mapDispatchToProps)(App);

