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