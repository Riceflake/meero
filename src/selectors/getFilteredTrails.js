import getTrails from 'selectors/getTrails';
import getFilter from 'selectors/getFilter';
import { TRAIL_FILTER_ALL } from 'actions/filters';

export default function getFilteredTrails(state) {
  const trails = getTrails(state);
  const filter = getFilter(state);

  if (filter === TRAIL_FILTER_ALL) {
    return trails;
  }

  return trails.filter(trail => trail.difficulty === filter);
}
