import drinkRecipeReducer from './drinkRecipe-reducer';

describe('drinkRecipeReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = drinkRecipeReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if action is CREATE_DRINK_RECIPE', () => {
    const initialState = {};
    const action = {
      type: 'CREATE_DRINK_RECIPE',
      drinkRecipe: {
        id: '4',
        name: 'Boozy Booze',
        type: 'Alcoholic',
        glass: 'Bottle',
        instructions: 'Make that stuff',
        picture: 'image',
        ingredients: ['booze', 'more booze'],
        ingredientAmounts: ['some', 'more'],
      },
    };
    const newState = {
      id: '4',
      name: 'Boozy Booze',
      type: 'Alcoholic',
      glass: 'Bottle',
      instructions: 'Make that stuff',
      picture: 'image',
      ingredients: ['booze', 'more booze'],
      ingredientAmounts: ['some', 'more'],
    };

    const result = drinkRecipeReducer(initialState, action);

    expect(result).toEqual(newState);
  });

  it('should return the correct state if action is RESET_RECIPE', () => {
    const initialState = {
      id: '4',
      name: 'Boozy Booze',
      type: 'Alcoholic',
      glass: 'Bottle',
      instructions: 'Make that stuff',
      picture: 'image',
      ingredients: ['booze', 'more booze'],
      ingredientAmounts: ['some', 'more'],
    };
    const action = {
      type: 'RESET_RECIPE',
      drinkRecipe: {},
    };
    const newState = {};

    const result = drinkRecipeReducer(initialState, action);

    expect(result).toEqual(newState);
  });
});
