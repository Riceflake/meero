import getTrails from 'selectors/trails/getTrails';

export default function getTrailById(state, id) {
  const trails = getTrails(state);
  return trails.find(trail => trail.id === id);
}
