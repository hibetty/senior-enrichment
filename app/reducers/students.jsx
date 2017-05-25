import axios from 'axios';

let initialState = {
  students: []
};

/* --- actions --- */
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';


/* --- action creators --- */
export const getStudents = (students) => ({
  type: GET_ALL_STUDENTS,
  students
});


/* --- dispatchers --- */
export const getAllStudents =  () =>
{
  return dispatch => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(res => dispatch(getStudents(res)));
  };
};

/* --- reducer --- */
export default function reducer(state = initialState, action){
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ALL_STUDENTS:
      newState.students = action.students;
      break;

    default:
      return state;
  }

  return newState;
}
