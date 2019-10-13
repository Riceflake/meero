import fetchTrailsStart from 'actions/trails/fetchTrailsStart';
import fetchTrailsSuccess from 'actions/trails/fetchTrailsSuccess';
import fetchTrailsError from 'actions/trails/fetchTrailsError';
import api from 'utils/api';

export default function fetchTrails() {
  return async dispatch => {
    try {
      dispatch(fetchTrailsStart());
      const response = await api.get('get-trails', {
        params: {
          // key: process.env.REACT_APP_API_KEY,
          lat: 46.589519,
          lon: 7.912295,
          maxDistance: 100,
          maxResults: 15,
        },
      });
      dispatch(fetchTrailsSuccess(response.data.trails));
    } catch (error) {
      dispatch(fetchTrailsError(error));
    }
  };
}
