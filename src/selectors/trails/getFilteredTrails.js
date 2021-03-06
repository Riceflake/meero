import getTrails from 'selectors/trails/getTrails';
import getSelectedFilter from 'selectors/filters/getSelectedFilter';
import { TRAIL_FILTER_ALL } from 'actions/filters';

export default function getFilteredTrails(state) {
  const trails = getTrails(state);
  const filter = getSelectedFilter(state);

  if (filter === TRAIL_FILTER_ALL) {
    return trails;
  }

  return trails.filter(trail => trail.difficulty === filter);
}
