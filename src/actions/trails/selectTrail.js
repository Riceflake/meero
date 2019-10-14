import { SELECT_TRAIL } from 'actions/trails';

export default function SelectTrail(id) {
  return {
    type: SELECT_TRAIL,
    id,
  };
}
