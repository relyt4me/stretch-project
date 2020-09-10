const nonAlcoholicDrinksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NON_ALCOHOLIC_DRINKS' :
      return action.nonAlcoholicDrinks
    default:
      return state
  }
}

export default nonAlcoholicDrinksReducer