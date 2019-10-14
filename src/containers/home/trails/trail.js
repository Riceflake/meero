import { generatePath } from 'react-router';
import { connect } from 'react-redux';
import { PATH_TRAIL } from 'routes/paths';
import getTrailById from 'selectors/trails/getTrailById';

import Trail from 'components/home/trails/trail';

const mapStateToProps = (state, { id }) => {
  const trail = getTrailById(state, id);

  return {
    url: generatePath(PATH_TRAIL, { id }),
    src: trail.imgMedium,
    name: trail.name,
  };
};

export default connect(mapStateToProps)(Trail);
