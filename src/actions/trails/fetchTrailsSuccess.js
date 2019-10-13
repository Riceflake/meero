import { FETCH_TRAILS_SUCCESS } from 'actions/trails';

export default function fetchTrailsSuccess(trails) {
  return {
    type: FETCH_TRAILS_SUCCESS,
    trails,
  };
}
