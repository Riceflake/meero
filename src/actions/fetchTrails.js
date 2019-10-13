import fetchTrailsStart from 'actions/fetchTrailsStart';
import fetchTrailsSuccess from 'actions/fetchTrailsSuccess';
import fetchTrailsError from 'actions/fetchTrailsError';
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
