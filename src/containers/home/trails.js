import { connect } from 'react-redux';
import getFilteredTrails from 'selectors/getFilteredTrails';
import Trails from 'components/home/trails';

const mapStateToProps = state => ({
  trails: getFilteredTrails(state),
});

export default connect(mapStateToProps)(Trails);
