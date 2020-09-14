const drinksListReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_DRINKS_LIST':
      return action.drinksList;
    default:
      return state;
  }
};

export default drinksListReducer;
