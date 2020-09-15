import drinkIdReducer from './drinkId-reducer';

describe('drinkIdReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = drinkIdReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if action is ADD_RECIPE_ID', () => {
    const initialState = [];
    const action = {
      type: 'ADD_RECIPE_ID',
      recipeId: '1',
    };
    const newState = '1';

    const result = drinkIdReducer(initialState, action);

    expect(result).toEqual(newState);
  });
});
