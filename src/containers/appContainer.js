import { connect } from 'react-redux'
import { createAlcoholicDrinks, createNonAlcoholicDrinks, collectDrinkData } from '../actions'
import App from '../components/App/App'

const mapStateToProps = state => {
  // return { alcoholicDrinks: state.alcoholicDrinks, nonAlcoholicDrinks: state.nonAlcoholicDrinks }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (type) => dispatch(collectDrinkData(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export function itemsFetchDataSuccess(items) {
//   return {
//     type: 'ITEMS_FETCH_DATA_SUCCESS',
//     items
//   };
// }