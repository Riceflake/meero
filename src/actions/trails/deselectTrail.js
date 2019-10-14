import { DESELECT_TRAIL } from 'actions/trails';

export default function deselectTrail(id) {
  return {
    type: DESELECT_TRAIL,
    id,
  };
}
