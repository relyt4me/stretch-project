import nonAlcoholicDrinksReducer from './nonAlcoholicDrinks-reducer'

describe('nonAlcoholicDrinksReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = nonAlcoholicDrinksReducer(undefined, {});

    expect(result).toEqual(expected)
  });

  it('should return the correct state if action is CREATE_NON_ALCOHOLIC_DRINKS', () => {
    const initialState = [];
    const action = {
      type: 'CREATE_NON_ALCOHOLIC_DRINKS',
      nonAlcoholicDrinks: [
        {
          strDrink: 'Virgin Margarita',
          strDrinkThumb: "https://virgin-margarita-img.com",
          idDrink: '10'
        }
      ]
    }
    const newState = [
      {
        strDrink: 'Virgin Margarita',
        strDrinkThumb: "https://virgin-margarita-img.com",
        idDrink: '10'
      }
    ]

    const result = nonAlcoholicDrinksReducer(initialState, action);

    expect(result).toEqual(newState)
  });
})