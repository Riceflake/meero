import { SELECT_TRAIL } from 'actions/trails';

export default function selectTrail(id) {
  return {
    type: SELECT_TRAIL,
    id,
  };
}
