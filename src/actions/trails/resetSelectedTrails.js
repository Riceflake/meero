import { RESET_SELECTED_TRAILS } from 'actions/trails';

export default function resetSelectedTrail() {
  return {
    type: RESET_SELECTED_TRAILS,
  };
}
