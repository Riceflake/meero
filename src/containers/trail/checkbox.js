import { connect } from 'react-redux';
import Checkbox from 'components/common/checkbox';
import isTrailSelected from 'selectors/trails/isTrailSelected';
import toggleTrailSelection from 'actions/trails/toggleTrailSelection';

const mapStateToProps = (state, { id }) => ({
  isChecked: isTrailSelected(state, id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onChange: () => dispatch(toggleTrailSelection(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox);
