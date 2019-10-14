import selectTrail from 'actions/trails/selectTrail';
import deselectTrail from 'actions/trails/deselectTrail';
import isTrailSelected from 'selectors/trails/isTrailSelected';

export default function toggleTrailSelection(id) {
  return (dispatch, getState) =>
    isTrailSelected(getState(), id)
      ? dispatch(deselectTrail(id))
      : dispatch(selectTrail(id));
}
