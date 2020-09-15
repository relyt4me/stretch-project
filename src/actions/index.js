export const updateDrinksList = (drinksList) => {
  return {
    type: 'ADD_DRINKS_LIST',
    drinksList
  }
}

export const resetDrinksList = () => {
  return {
    type: 'RESET_DRINKS_LIST',
    drinksList: []
  }
}

export const createAlcoholicDrinks = (alcoholicDrinks) => {
  return {
    type: 'CREATE_ALCOHOLIC_DRINKS',
    alcoholicDrinks
  }
}

export const createNonAlcoholicDrinks = (nonAlcoholicDrinks) => {
  return {
    type: 'CREATE_NON_ALCOHOLIC_DRINKS',
    nonAlcoholicDrinks
  }
}

export const addRecipeId = (recipeId) => {
  return {
    type: 'ADD_RECIPE_ID',
    recipeId
  }
}

export const createDrinkRecipe = (drinkRecipe) => {
  return {
    type: 'CREATE_DRINK_RECIPE',
    drinkRecipe
  }
}

export const createError = (error) => {
  return {
    type: 'ERRORED',
    error
  }
}

export const resetError = () => {
  return {
    type: 'RESET_ERROR',
    error: ''
  }
}

export const resetRecipe = () => {
  return {
    type: 'RESET_RECIPE',
    drinkRecipe: {}
  }
}
