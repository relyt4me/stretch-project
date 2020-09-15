import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of ADD_DRINKS_LIST', () => {
    const drinksList = [
      {
        strDrink: 'Toms Margarita',
        strDrinkThumb: "https://margarita-img.com",
        idDrink: '1'
      },
      {
        strDrink: 'G & T',
        strDrinkThumb: "https://g-and-t-img.com",
        idDrink: '2'
      }
    ];
    const expectedAction = {
      type: 'ADD_DRINKS_LIST',
      drinksList: [
        {
          strDrink: 'Toms Margarita',
          strDrinkThumb: "https://margarita-img.com",
          idDrink: '1'
        },
        {
          strDrink: 'G & T',
          strDrinkThumb: "https://g-and-t-img.com",
          idDrink: '2'
        }
      ]
    }

    const result = actions.updateDrinksList(drinksList);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CREATE_ALCOHOLIC_DRINKS', () => {
    const alcoholicDrinks = [
      {
        strDrink: 'Toms Margarita',
        strDrinkThumb: "https://margarita-img.com",
        idDrink: '1'
      },
      {
        strDrink: 'G & T',
        strDrinkThumb: "https://g-and-t-img.com",
        idDrink: '2'
      }
    ];
    const expectedAction = {
      type: 'CREATE_ALCOHOLIC_DRINKS',
      alcoholicDrinks: [
        {
          strDrink: 'Toms Margarita',
          strDrinkThumb: "https://margarita-img.com",
          idDrink: '1'
        },
        {
          strDrink: 'G & T',
          strDrinkThumb: "https://g-and-t-img.com",
          idDrink: '2'
        }
      ]
    }

    const result = actions.createAlcoholicDrinks(alcoholicDrinks);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CREATE_NON_ALCOHOLIC_DRINKS', () => {
    const nonAlcoholicDrinks = [
      {
        strDrink: 'Virgin Margarita',
        strDrinkThumb: "https://virgin-margarita-img.com",
        idDrink: '10'
      },
      {
        strDrink: 'Pina colada',
        strDrinkThumb: "https://pina-colada.com",
        idDrink: '11'
      }
    ];
    const expectedAction = {
      type: 'CREATE_NON_ALCOHOLIC_DRINKS',
      nonAlcoholicDrinks: [
        {
          strDrink: 'Virgin Margarita',
          strDrinkThumb: "https://virgin-margarita-img.com",
          idDrink: '10'
        },
        {
          strDrink: 'Pina colada',
          strDrinkThumb: "https://pina-colada.com",
          idDrink: '11'
        }
      ]
    }

    const result = actions.createNonAlcoholicDrinks(nonAlcoholicDrinks);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_RECIPE_ID', () => {
    const recipeId = '10'

    const expectedAction = {
      type: 'ADD_RECIPE_ID',
      recipeId: '10'
    }

    const result = actions.addRecipeId(recipeId);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CREATE_DRINK_RECIPE', () => {
    const drinkRecipe = {
      id: '11007',
      name: 'Margarita',
      type: 'Alcoholic',
      glass: 'Cocktail glass',
      instructions: "Add alcohol. Drink it.",
      picture: "https://www.thecocktaildb.com",
      ingredients: ['Tequila', 'Triple sec', 'Lime juice', 'Salt'],
      ingredientAmounts: ['1 1/2 oz', '1/2 oz', '1 oz']
    }

    const expectedAction = {
      type: 'CREATE_DRINK_RECIPE',
      drinkRecipe: {
        id: '11007',
        name: 'Margarita',
        type: 'Alcoholic',
        glass: 'Cocktail glass',
        instructions: "Add alcohol. Drink it.",
        picture: "https://www.thecocktaildb.com",
        ingredients: ['Tequila', 'Triple sec', 'Lime juice', 'Salt'],
        ingredientAmounts: ['1 1/2 oz', '1/2 oz', '1 oz']
      }
    }

    const result = actions.createDrinkRecipe(drinkRecipe);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ERRORED', () => {
    const error = 'Oops, that didn\'t work!'

    const expectedAction = {
      type: 'ERRORED',
      error: 'Oops, that didn\'t work!'
    }

    const result = actions.createError(error);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_ERROR', () => {

    const expectedAction = {
      type: 'RESET_ERROR',
      error: ''
    }

    const result = actions.resetError();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_RECIPE', () => {

    const expectedAction = {
      type: 'RESET_RECIPE',
      drinkRecipe: {}
    }

    const result = actions.resetRecipe();

    expect(result).toEqual(expectedAction);
  });
})