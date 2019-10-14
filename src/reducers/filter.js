import { TRAIL_FILTER_ALL, SET_TRAIL_FILTER } from 'actions/filters';

export default function trailReducer(state = TRAIL_FILTER_ALL, action) {
  switch (action.type) {
    case SET_TRAIL_FILTER:
      return action.filter;
    default:
      return state;
  }
}
