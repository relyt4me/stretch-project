import { connect } from 'react-redux'
import { updateDrinksList } from '../actions'
import Search from '../components/Search/Search'

const mapStateToProps = state => {
  return { alcoholicDrinks: state.alcoholicDrinks, nonAlcoholicDrinks: state.nonAlcoholicDrinks}
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: (drinksList) => {
      dispatch(updateDrinksList(drinksList))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)