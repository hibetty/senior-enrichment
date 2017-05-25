import axios from 'axios';

let initialState = {
  campuses: [],
  campusName: '',
  campusStudents: []
};

/* --- actions --- */
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS_DATA = 'GET_CAMPUS_DATA';


/* --- action creators --- */
export const getCampuses = (campuses) => ({
  type: GET_CAMPUSES,
  campuses
});

export const getCampusData = (data) => ({
  type: GET_CAMPUS_DATA,
  campusName: data[0].name,
  campusStudents: data[1]
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

export const getOneCampusData = (campusId) =>
{
  return dispatch => {
    axios.get(`/api/campus/${campusId}`)
    .then(res => res.data)
    .then(res => dispatch(getCampusData(res)));
  };
};

/* --- reducer --- */
export default function reducer(state = initialState, action){
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_CAMPUSES:
      newState.campuses = action.campuses;
      break;

    case GET_CAMPUS_DATA:
    newState.campusName = action.campusName;
    newState.campusStudents = action.campusStudents;
    break;

    default:
      return state;
  }

  return newState;
}
