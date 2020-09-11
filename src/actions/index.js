export const updateDrinksList = (drinksList) => {
  return {
    type: 'ADD_DRINKS_LIST',
    drinksList
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

export const createError = (error) => {
  return {
    type: 'ERRORED',
    error 
  }
}