import { combineReducers } from 'redux'
import drinksListReducer from './drinksList-reducer';
import alcoholicDrinksReducer from './alcoholicDrinks-reducer'
import nonAlcoholicDrinksReducer from './nonAlcoholicDrinks-reducer'
import errorReducer from './error-reducer'

const rootReducer = combineReducers({
  drinksListReducer,
  nonAlcoholicDrinksReducer,
  alcoholicDrinksReducer,
  errorReducer
})

export default rootReducer 