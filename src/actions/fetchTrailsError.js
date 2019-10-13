import { FETCH_TRAILS_ERROR } from 'actions';

export default function fetchTrailsSuccess(error) {
  return {
    type: FETCH_TRAILS_ERROR,
    error,
  };
}
