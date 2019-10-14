import { connect } from 'react-redux';
import Filter from 'components/home/filters/filter';
import setTrailFilter from 'actions/filters/setTrailFilter';
import { TRAIL_FILTER_BLUEBLACK } from 'actions/filters';
import getFilter from 'selectors/getFilter';

const mapStateToProps = state => ({
  name: TRAIL_FILTER_BLUEBLACK,
  isActive: getFilter(state) === TRAIL_FILTER_BLUEBLACK,
});

const mapDispatchToProps = {
  onClick: () => setTrailFilter(TRAIL_FILTER_BLUEBLACK),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
