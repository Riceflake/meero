import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchTrails from 'actions/trails/fetchTrails';
import Routes from 'routes';

function App({ fetch }) {
  useEffect(() => {
    fetch();
  });

  return <Routes />;
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
