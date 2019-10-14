import getSelectedTrails from 'selectors/trails/getSelectedTrails';

export default function isTrailSelected(state, id) {
  const selectedTrails = getSelectedTrails(state);
  return selectedTrails.includes(id);
}
