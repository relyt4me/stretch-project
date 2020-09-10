const alcoholicDrinksReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALCOHOLIC_DRINKS' :
      return action.alcoholicDrinks
    default:
      return state
  }
}

export default alcoholicDrinksReducer