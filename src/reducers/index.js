import { combineReducers } from 'redux'
import drinksListReducer from './drinksList-reducer';
import alcoholicDrinksReducer from './alcoholicDrinks-reducer'
import nonAlcoholicDrinksReducer from './nonAlcholicDrinks-reducer'
import errorReducer from './error-reducer'

const rootReducer = combineReducers({
  drinksListReducer,
  nonAlcoholicDrinksReducer,
  alcoholicDrinksReducer,
  errorReducer
})

export default rootReducer 