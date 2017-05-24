import axios from 'axios';

/* --- actions --- */
const GET_CAMPUSES = 'GET_CAMPUSES';


/* --- action creators --- */
export const getCampuses = (campuses) => ({
  type: GET_CAMPUSES,
  campuses
});


/* --- dispatchers --- */
export const getAllCampuses =  () =>
{
  return dispatch => {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(res => dispatch(getCampuses(res)));
  };
};

/* --- reducer --- */
export default function reducer(campuses = [], action){
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    default:
      return campuses;
  }
}
