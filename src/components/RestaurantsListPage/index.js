import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import { selectRestauranrsList, selectRestauranrsListError, selectIsLoading } from '../../store/selectors';

function mapState2Props(state) {
  return {
    restaurantsData: selectRestauranrsList(state),
    error: selectRestauranrsListError(state),
    isLoading: selectIsLoading(state),
  };
}

const mapDispatch2Props = {
  loadRestaurants,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
