import alcoholicDrinksReducer from './alcoholicDrinks-reducer'

describe('alcoholicDrinksReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = alcoholicDrinksReducer(undefined, {});

    expect(result).toEqual(expected)
  });

  it('should return the correct state if action is CREATE_ALCOHOLIC_DRINKS', () => {
    const initialState = [];
    const action = { 
      type: 'CREATE_ALCOHOLIC_DRINKS',
      alcoholicDrinks: [
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

    const result = alcoholicDrinksReducer(initialState, action);
    
    expect(result).toEqual(newState)
  });
})