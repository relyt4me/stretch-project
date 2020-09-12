const drinkIdReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_RECIPE_ID' :
      return action.recipeId
    default :
      return state
  }
}

export default drinkIdReducer
