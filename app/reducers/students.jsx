import axios from 'axios';

let initialState = {
  students: [],
  student: {},
  campus: {}
};

/* --- actions --- */
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_STUDENT_DATA = 'GET_STUDENT_DATA';


/* --- action creators --- */
export const getStudents = (students) => ({
  type: GET_ALL_STUDENTS,
  students
});

export const getStudentData = (data) => ({
  type: GET_STUDENT_DATA,
  student: data
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

export const getOneStudentData = (studentId) =>
{
  return dispatch => {
    axios.get(`/api/student/${studentId}`)
    .then(res => res.data)
    .then(res => dispatch(getStudentData(res)));
  };
};

/* --- reducer --- */
export default function reducer(state = initialState, action){
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ALL_STUDENTS:
      newState.students = action.students;
      break;

    case GET_STUDENT_DATA:
      newState.student = action.student;
      newState.campus = action.student.campus;
      break;

    default:
      return state;
  }

  return newState;
}
