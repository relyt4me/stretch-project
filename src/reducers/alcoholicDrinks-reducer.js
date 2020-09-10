const alcoholicDrinksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ALCOHOLIC_DRINKS' :
      return action.alcoholicDrinks
    default:
      return state
  }
}

export default alcoholicDrinksReducer