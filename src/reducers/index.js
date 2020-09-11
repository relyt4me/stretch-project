import { combineReducers } from 'redux'
import drinksListReducer from './drinksList-reducer';
import alcoholicDrinksReducer from './alcoholicDrinks-reducer'
import nonAlcoholicDrinksReducer from './nonAlcoholicDrinks-reducer'
import errorReducer from './error-reducer'

const rootReducer = combineReducers({
  drinksList: drinksListReducer,
  nonAlcholicDrinks: nonAlcoholicDrinksReducer,
  alcoholicDrinks: alcoholicDrinksReducer,
  errorMessage: errorReducer
})

export default rootReducer
