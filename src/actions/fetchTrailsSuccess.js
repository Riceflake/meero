import { FETCH_TRAILS_SUCCESS } from 'actions';

export default function fetchTrailsSuccess(trails) {
  return {
    type: FETCH_TRAILS_SUCCESS,
    trails,
  };
}
