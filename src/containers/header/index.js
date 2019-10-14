import { connect } from 'react-redux';
import getFilteredTrails from 'selectors/trails/getFilteredTrails';
import getSelectedTrails from 'selectors/trails/getSelectedTrails';
import Header from 'components/header';

const mapStateToProps = state => ({
  count: getSelectedTrails(state).length,
  total: getFilteredTrails(state).length,
});

export default connect(mapStateToProps)(Header);
