import { connect } from 'react-redux';
import Filter from 'components/home/filters/filter';
import setTrailFilter from 'actions/filters/setTrailFilter';
import { TRAIL_FILTER_GREENBLUE } from 'actions/filters';
import getSelectedFilter from 'selectors/filters/getSelectedFilter';

const mapStateToProps = state => ({
  name: TRAIL_FILTER_GREENBLUE,
  isActive: getSelectedFilter(state) === TRAIL_FILTER_GREENBLUE,
});

const mapDispatchToProps = {
  onClick: () => setTrailFilter(TRAIL_FILTER_GREENBLUE),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
