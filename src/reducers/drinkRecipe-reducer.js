const drinkRecipeReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CREATE_DRINK_RECIPE' :
      return action.drinkRecipe
    case 'RESET_RECIPE' :
      return action.drinkRecipe
    default :
      return state
  }
}

export default drinkRecipeReducer
