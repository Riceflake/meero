import {
  FETCH_TRAILS_SUCCESS,
  SELECT_TRAIL,
  DESELECT_TRAIL,
} from 'actions/trails';

const initialState = {
  list: [],
  selected: [],
};

export default function trailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAILS_SUCCESS:
      return {
        ...state,
        list: action.trails,
      };
    case SELECT_TRAIL:
      return {
        ...state,
        selected: [...state.selected, action.id],
      };
    case DESELECT_TRAIL:
      return {
        ...state,
        selected: state.selected.filter(id => id !== action.id),
      };
    default:
      return state;
  }
}
