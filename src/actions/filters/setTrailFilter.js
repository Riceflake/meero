import { SET_TRAIL_FILTER } from 'actions/filters';

export default function setTrailFilter(filter) {
  return {
    type: SET_TRAIL_FILTER,
    filter,
  };
}
