import { FETCH_TRAILS_SUCCESS } from 'actions/trails';

const initialState = {
  list: [],
};

export default function trailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAILS_SUCCESS:
      return {
        ...state,
        list: action.trails,
      };
    default:
      return state;
  }
}
