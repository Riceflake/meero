import { connect } from 'react-redux';
import Filter from 'components/home/filters/filter';
import { TRAIL_FILTER_GREENBLUE } from 'actions/filters';
import getSelectedFilter from 'selectors/filters/getSelectedFilter';
import changeTrailFilter from 'actions/filters/changeTrailFilter';

const mapStateToProps = state => ({
  name: TRAIL_FILTER_GREENBLUE,
  isActive: getSelectedFilter(state) === TRAIL_FILTER_GREENBLUE,
});

const mapDispatchToProps = {
  onClick: () => changeTrailFilter(TRAIL_FILTER_GREENBLUE),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
