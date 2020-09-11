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

  