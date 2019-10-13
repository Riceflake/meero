import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchTrails from 'actions/fetchTrails';

function App({ fetch }) {
  useEffect(() => {
    fetch();
  });

  return <div className="App" />;
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
