import setTrailFilter from 'actions/filters/setTrailFilter';
import resetSelectedTrails from 'actions/trails/resetSelectedTrails';

export default function changeTrailFilter(filter) {
  return dispatch => {
    dispatch(setTrailFilter(filter));
    dispatch(resetSelectedTrails());
  };
}
