import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DrinkRecipe.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createDrinkRecipe, createError } from '../../actions';
import { fetchDrinkRecipe } from '../../helpers/apiCalls';

export class DrinkRecipe extends Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.drinkId);
  }

  displayIngredients(recipe) {
    return recipe.ingredients
      .filter((ingredient) => {
        if (ingredient != null) {
          return ingredient;
        }
      })
      .map((ingredient, index) => {
        return (
          <li key={index}>
            {recipe.ingredientAmounts[index]}
            {ingredient}
          </li>
        );
      });
  }

  displayInstructions(instructions) {
    return instructions.map((instruction, index) => {
      return <li key={index}>{instruction}</li>;
    });
  }

  render() {
    const { recipe, hasErrored } = this.props;

    if (recipe['instructions']) {
      let instructions = recipe.instructions.split('. ');
      return (
        <section className='drink-recipe'>
          <div className='drink-data'>
            <Link className='back-btn' to='/'>Back</Link>
            <img src={recipe.picture} className='drink-image' alt={`Glass of ${recipe.name}`} />
            <div className='drink-title'>
              <p className='drink-name'>{recipe.name}</p>
              <h3>{recipe.type}</h3>
              <h4>{recipe.glass}</h4>
            </div>
            <div className='ingredients'>
              <h2 className='ingredients-title'>Ingredients</h2>
              <ul>{this.displayIngredients(recipe)}</ul>
            </div>
            <div className='instructions'>
              <h2 className='instructions-title'>Instructions</h2>
              <ol>{this.displayInstructions(instructions)}</ol>
            </div>
          </div>
        </section>
      );
    } else if (hasErrored !== '') {
      return <h2 className='error-message'>{hasErrored}</h2>;
    } else {
      return <h2 className='loading'>Loading...</h2>;
    }
  }
}

DrinkRecipe.propTypes = {
  drinkId: PropTypes.string.isRequired,
  recipe: PropTypes.object.isRequired,
  fetchRecipe: PropTypes.func.isRequired,
  hasErrored: PropTypes.string,
};

export const mapStateToProps = (state) => {
  return {
    drinkId: state.drinkId,
    recipe: state.drinkRecipe,
    hasErrored: state.errorMessage,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: (id) => dispatch(collectRecipe(id)),
  };
};

export const collectRecipe = (id) => {
  return (dispatch) => {
    fetchDrinkRecipe(id)
      .then((recipe) => {
        const newRecipe = fixRecipeData(recipe.drinks[0]);
        dispatch(createDrinkRecipe(newRecipe));
      })
      .catch((error) => {
        dispatch(createError("We're sorry, we couldn't find that recipe!"));
      });
  };
};

export const fixRecipeData = (data) => {
  const drinkRecipe = {
    id: data.idDrink,
    name: data.strDrink,
    type: data.strAlcoholic,
    glass: data.strGlass,
    instructions: data.strInstructions,
    picture: data.strDrinkThumb,
    ingredients: [data.strIngredient1, data.strIngredient2, data.strIngredient3, data.strIngredient4, data.strIngredient5, data.strIngredient6, data.strIngredient7, data.strIngredient8, data.strIngredient9, data.strIngredient10, data.strIngredient11, data.strIngredient12, data.strIngredient13, data.strIngredient14, data.strIngredient15],
    ingredientAmounts: [data.strMeasure1, data.strMeasure2, data.strMeasure3, data.strMeasure4, data.strMeasure5, data.strMeasure6, data.strMeasure7, data.strMeasure8, data.strMeasure9, data.strMeasure10, data.strMeasure11, data.strMeasure12, data.strMeasure13, data.strMeasure14, data.strMeasure15],
  };
  return drinkRecipe;
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkRecipe);
