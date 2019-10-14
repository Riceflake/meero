import { connect } from 'react-redux';
import Filter from 'components/home/filters/filter';
import { TRAIL_FILTER_BLACK } from 'actions/filters';
import getSelectedFilter from 'selectors/filters/getSelectedFilter';
import changeTrailFilter from 'actions/filters/changeTrailFilter';

const mapStateToProps = state => ({
  name: TRAIL_FILTER_BLACK,
  isActive: getSelectedFilter(state) === TRAIL_FILTER_BLACK,
});

const mapDispatchToProps = {
  onClick: () => changeTrailFilter(TRAIL_FILTER_BLACK),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
