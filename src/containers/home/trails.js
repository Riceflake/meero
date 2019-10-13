import { connect } from 'react-redux';
import getTrails from 'selectors/getTrails';
import Trails from 'components/home/trails';

const mapStateToProps = state => ({
  trails: getTrails(state),
});

export default connect(mapStateToProps)(Trails);
