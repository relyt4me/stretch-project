import React from 'react';
import { DrinkRecipe, mapDispatchToProps, mapStateToProps, fetchRecipe, errorHandler } from './DrinkRecipe';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index.js';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createDrinkRecipe, createError } from '../../actions/index.js'
jest.mock('../../helpers/apiCalls');
import { fetchDrinkRecipe } from '../../helpers/apiCalls';

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('DrinkRecipe', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      recipe = {}
    })
  });
  it('should create a recipe on page load', () => {
    fetchDrinkRecipe.mockResolvedValue({
      "drinks": [
            {
                "idDrink": "11007",
                "strDrink": "Margarita",
                "strDrinkAlternate": null,
                "strDrinkES": null,
                "strDrinkDE": null,
                "strDrinkFR": null,
                "strDrinkZH-HANS": null,
                "strDrinkZH-HANT": null,
                "strTags": "IBA,ContemporaryClassic",
                "strVideo": null,
                "strCategory": "Ordinary Drink",
                "strIBA": "Contemporary Classics",
                "strAlcoholic": "Alcoholic",
                "strGlass": "Cocktail glass",
                "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
                "strInstructionsES": null,
                "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
                "strInstructionsFR": null,
                "strInstructionsZH-HANS": null,
                "strInstructionsZH-HANT": null,
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
                "strIngredient1": "Tequila",
                "strIngredient2": "Triple sec",
                "strIngredient3": "Lime juice",
                "strIngredient4": "Salt",
                "strIngredient5": null,
                "strIngredient6": null,
                "strIngredient7": null,
                "strIngredient8": null,
                "strIngredient9": null,
                "strIngredient10": null,
                "strIngredient11": null,
                "strIngredient12": null,
                "strIngredient13": null,
                "strIngredient14": null,
                "strIngredient15": null,
                "strMeasure1": "1 1/2 oz ",
                "strMeasure2": "1/2 oz ",
                "strMeasure3": "1 oz ",
                "strMeasure4": null,
                "strMeasure5": null,
                "strMeasure6": null,
                "strMeasure7": null,
                "strMeasure8": null,
                "strMeasure9": null,
                "strMeasure10": null,
                "strMeasure11": null,
                "strMeasure12": null,
                "strMeasure13": null,
                "strMeasure14": null,
                "strMeasure15": null,
                "strCreativeCommonsConfirmed": "Yes",
                "dateModified": "2015-08-18 14:42:59"
            }
          ]
    });

    const expectedActions = //what gets dispatched [
      {
        type: 'CREATE_DRINK_RECIPE',
        drinkRecipe: {
          id: '11007',
          name: 'Margarita',
          type: 'Alcoholic',
          glass: 'Cocktail glass',
          instructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
          picture: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
          ingredients: ['Tequila', 'Triple sec', 'Lime juice', 'Salt'],
          ingredientAmounts: ['1 1/2 oz', '1/2 oz', '1 oz']
        }
      }
    ]

  })
  //it('should do a fetch call on page load', async () => {

    // const store = mockStore(getState? Object,Function) => store: Function;
    //
    // return store.dispatch(collectRecipe(11007))
    //   .then(() => {
    //     const actions = store.getActions()
    //     expect(actions[0]).toEqual(createDrinkRecipe())
    //   })

  //   const store = createStore(rootReducer);
  //
  //   fetchDrinkRecipe.mockResolvedValue({
  //     "drinks": [
  //       {
  //           "idDrink": "11007",
  //           "strDrink": "Margarita",
  //           "strDrinkAlternate": null,
  //           "strDrinkES": null,
  //           "strDrinkDE": null,
  //           "strDrinkFR": null,
  //           "strDrinkZH-HANS": null,
  //           "strDrinkZH-HANT": null,
  //           "strTags": "IBA,ContemporaryClassic",
  //           "strVideo": null,
  //           "strCategory": "Ordinary Drink",
  //           "strIBA": "Contemporary Classics",
  //           "strAlcoholic": "Alcoholic",
  //           "strGlass": "Cocktail glass",
  //           "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  //           "strInstructionsES": null,
  //           "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
  //           "strInstructionsFR": null,
  //           "strInstructionsZH-HANS": null,
  //           "strInstructionsZH-HANT": null,
  //           "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  //           "strIngredient1": "Tequila",
  //           "strIngredient2": "Triple sec",
  //           "strIngredient3": "Lime juice",
  //           "strIngredient4": "Salt",
  //           "strIngredient5": null,
  //           "strIngredient6": null,
  //           "strIngredient7": null,
  //           "strIngredient8": null,
  //           "strIngredient9": null,
  //           "strIngredient10": null,
  //           "strIngredient11": null,
  //           "strIngredient12": null,
  //           "strIngredient13": null,
  //           "strIngredient14": null,
  //           "strIngredient15": null,
  //           "strMeasure1": "1 1/2 oz ",
  //           "strMeasure2": "1/2 oz ",
  //           "strMeasure3": "1 oz ",
  //           "strMeasure4": null,
  //           "strMeasure5": null,
  //           "strMeasure6": null,
  //           "strMeasure7": null,
  //           "strMeasure8": null,
  //           "strMeasure9": null,
  //           "strMeasure10": null,
  //           "strMeasure11": null,
  //           "strMeasure12": null,
  //           "strMeasure13": null,
  //           "strMeasure14": null,
  //           "strMeasure15": null,
  //           "strCreativeCommonsConfirmed": "Yes",
  //           "dateModified": "2015-08-18 14:42:59"
  //       }
  //     ]
  //   });
  //
  //   render(
  //     <Provider store={store}>
  //       <MemoryRouter>
  //         <DrinkRecipe />
  //       </MemoryRouter>
  //     </Provider>
  //   )
  //
  //   const button = screen.getByRole('button', {name: 'Back'});
  //   const drinkImg = screen.getByAltText('image of drink');
  //   const drinkName = screen.getByText('Rum Old-fashioned');
  //   const drinkType = screen.getByText('Alcoholic');
  //   const glassType = screen.getByText('Old-fashioned glass');
  //   const ingredientsTitle = screen.getByText('Ingredients');
  //   const firstIngredient = screen.getByText('1 1/2 oz Light rum');
  //   const instructionsTitle = screen.getByText('Instructions');
  //   const firstStep = screen.getByText('Stir powdered sugar, water, and bitters in an old-fashioned glass')
  //
  //   expect(button).toBeInTheDocument();
  //   expect(drinkImg).toBeInTheDocument();
  //   expect(drinkName).toBeInTheDocument();
  //   expect(drinkType).toBeInTheDocument();
  //   expect(glassType).toBeInTheDocument();
  //   expect(ingredientsTitle).toBeInTheDocument();
  //   expect(firstIngredient).toBeInTheDocument();
  //   expect(instructionsTitle).toBeInTheDocument();
  //   expect(firstStep).toBeInTheDocument();
  // })

//   it('should display loading on screen while waiting', () => {
//
//   })
// it('should display error message if there is an error', () => {
//
// })
})
//
describe('mapDispatchToProps', () => {
  it('calls dispatch with a collectRecipe action when fetchRecipe is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = fetchRecipe("11007");
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.fetchRecipe('11007');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })
  it('calls dispatch with an errorCreator action when errorHanlder is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = errorHandler('Sorry, we couldn\'t find that drink.');
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.errorHandler('Sorry, we couldn\'t find that drink.');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })
})

describe('mapStateToProps', () => {
  it('should only return the necessary information from the store', () => {
    const mockState = {
      drinkRecipe: {
        id: '11007',
        name: 'old fashioned',
        type: 'alcoholic',
        glass: 'tumbler',
        instructions: 'Pour alcohol in glass. Drink',
        picture: 'www.image.com',
        ingredients: ['whiskey', 'ice', 'bitters', null, null],
        ingredientAmounts: ['2 shots', '3 ice cubes', '1 teaspoon', null, null]
      },
      drinkId: '11007',
      drinksList: [{strDrink: 'old-fashioned', strDrinkThumb: 'www.image.com', idDrink: '11007'}],
      nonAlcoholicDrinks: [{strDrink: 'moscow mule', strDrinkThumb: 'www.image.com', idDrink: '11003'}],
      alcoholicDrinks: [{strDrink: 'margarita', strDrinkThumb: 'www.image.com', idDrink: '11002'}],
      errorMessage: ''
    }
    const expected = {
      drinkId: '11007',
      recipe: {
        id: '11007',
        name: 'old fashioned',
        type: 'alcoholic',
        glass: 'tumbler',
        instructions: 'Pour alcohol in glass. Drink',
        picture: 'www.image.com',
        ingredients: ['whiskey', 'ice', 'bitters', null, null],
        ingredientAmounts: ['2 shots', '3 ice cubes', '1 teaspoon', null, null]
      },
      hasErrored: ''
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  })
})

// describe('collectRecipe', () => {
//   it('should fetch a recipe from the api', () => {
//
//   })
// })
