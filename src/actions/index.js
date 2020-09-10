export const updateDrinksList = (drinksList) => {
  return {
    type: 'ADD_DRINKS_LIST',
    drinksList
  }
}

export const getAlcoholicDrinks = (alcoholicDrinks) => {
  return {
    type: 'GET_ALCOHOLIC_DRINKS',
    alcoholicDrinks
  }
}

export const getNonAlcoholicDrinks = (nonAlcoholicDrinks) => {
  return {
    type: 'GET_NON_ALCOHOLIC_DRINKS',
    nonAlcoholicDrinks
  }
}