import drinksListReducer from './drinksList-reducer'

describe('drinksListReducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = drinksListReducer(null, {});

    expect(result).toEqual(expected)
  });

  it('should return the correct state if action is ADD_DRINKS_LIST', () => {
    const initialState = null 
    const action = {
      type: 'ADD_DRINKS_LIST',
      drinksList: [
        {
          strDrink: 'Toms Margarita',
          strDrinkThumb: "https://margarita-img.com",
          idDrink: '1'
        }
      ]
    }
    const newState = [
      {
        strDrink: 'Toms Margarita',
        strDrinkThumb: "https://margarita-img.com",
        idDrink: '1'
      }
    ]

    const result = drinksListReducer(initialState, action);

    expect(result).toEqual(newState);
  });
})