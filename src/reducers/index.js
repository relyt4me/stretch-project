import { combineReducers } from 'redux'
import drinksListReducer from './drinksList-reducer';
import alcoholicDrinksReducer from './alcoholicDrinks-reducer'
import nonAlcoholicDrinksReducer from './nonAlcholicDrinks-reducer'

const rootReducer = combineReducers({
  drinksListReducer,
  nonAlcoholicDrinksReducer,
  alcoholicDrinksReducer
})

export default rootReducer 