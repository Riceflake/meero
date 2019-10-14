import { connect } from 'react-redux';
import getTrailById from 'selectors/trails/getTrailById';
import Trail from 'components/trail';

const mapStateToProps = (state, ownProps) => {
  const parsedId = parseInt(ownProps.match.params.id, 10);

  return {
    trail: Number.isNaN(parsedId) ? undefined : getTrailById(state, parsedId),
  };
};

export default connect(mapStateToProps)(Trail);
