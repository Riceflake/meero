import { connect } from 'react-redux';
import Filter from 'components/home/filters/filter';
import getSelectedFilter from 'selectors/filters/getSelectedFilter';
import changeTrailFilter from 'actions/filters/changeTrailFilter';

const mapStateToProps = (state, { filter }) => ({
  name: filter,
  isActive: getSelectedFilter(state) === filter,
});

const mapDispatchToProps = (dispatch, { filter }) => {
  return {
    onClick: () => dispatch(changeTrailFilter(filter)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
