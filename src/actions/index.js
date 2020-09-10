import { fetchDrinks } from '../helpers/apiCalls'

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

export const collectDrinkData = (type) => {
  return (dispatch) => {
    fetchDrinks(type)
      .then(drinks => {
        if (type === 'Alcoholic') {
          dispatch(createAlcoholicDrinks(drinks.drinks))
        } else {
          dispatch(createNonAlcoholicDrinks(drinks.drinks))
        }
      })
      .catch(error => {
        dispatch(createError('We\'re sorry, our bar is closed!'))
      })
  }
}

export const createError = (error) => {
  return {
    type: 'ERRORED',
    error 
  }
}