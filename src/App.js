import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchTrails from 'actions/trails/fetchTrails';
import Home from 'components/home';

function App({ fetch }) {
  useEffect(() => {
    fetch();
  });

  return <Home />;
}

App.propTypes = {
  fetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetch: fetchTrails,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
