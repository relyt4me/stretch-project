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

  it('should have a type of RESET_DRINKS_LIST', () => {
    const expectedAction = {
      type: 'RESET_DRINKS_LIST',
      drinksList: []
    }

    const result = actions.resetDrinksList();

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

  it('should have a type of ERRORED', () => {
    const error = 'Oops, that didn\'t work!'

    const expectedAction = {
      type: 'ERRORED',
      error: 'Oops, that didn\'t work!'
    }

    const result = actions.createError(error);

    expect(result).toEqual(expectedAction);
  });
})