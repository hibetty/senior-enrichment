import axios from 'axios';

let initialState = {
  campuses: [],
  campusId: '',
  campusName: '',
  campusStudents: []
};

/* --- actions --- */
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS_DATA = 'GET_CAMPUS_DATA';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const SET_CAMPUS = 'SET_CAMPUS';


/* --- action creators --- */
export const getCampuses = (campuses) => ({
  type: GET_CAMPUSES,
  campuses
});

export const getCampusData = (data) => ({
  type: GET_CAMPUS_DATA,
  campusId: data[0].id,
  campusName: data[0].name,
  campusStudents: data[1]
});

export const removeCampus = (id) => ({
  type: REMOVE_CAMPUS,
  id
});

export const addCampus = (campusInfo) => ({
  type: SET_CAMPUS,
  campusInfo
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

export const removeOneCampus = (campusId) =>
{
  return dispatch => {
    dispatch(removeCampus(campusId));
    axios.delete(`/api/campus/${campusId}`)
    .catch(err => console.error(`Oops. Unable to remove campus with id: ${campusId}`, err));
  };
};

export const addACampus = (campusInfo) =>
{
  return dispatch => {
    axios.post('/api/campuses', campusInfo)
    .then(res => res.data)
    .then(campus => dispatch(addCampus(campus)))
    .catch(err => console.error('there was a problem adding a campus', err));
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
    newState.campusId = action.campusId;
    break;

    case REMOVE_CAMPUS:
    newState.campuses = newState.campuses.filter(campus => campus.id !== action.id);
    break;

    case SET_CAMPUS:
    newState.campuses = newState.campuses.concat(action.campusInfo);
    break;

    default:
      return state;
  }

  return newState;
}
