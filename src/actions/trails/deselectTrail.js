import { DESELECT_TRAIL } from 'actions/trails';

export default function DeselectTrail(id) {
  return {
    type: DESELECT_TRAIL,
    id,
  };
}
