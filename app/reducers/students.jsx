import axios from 'axios';

let initialState = {
  students: [],
  student: {},
  campus: {}
};

/* --- actions --- */
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_STUDENT_DATA = 'GET_STUDENT_DATA';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const SET_STUDENT = 'SET_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT'


/* --- action creators --- */
export const getStudents = (students) => ({
  type: GET_ALL_STUDENTS,
  students
});

export const getStudentData = (data) => ({
  type: GET_STUDENT_DATA,
  student: data
});

export const removeStudent = (student) => ({
  type: REMOVE_STUDENT,
  student
});

export const addStudent = (studentInfo) => ({
  type: SET_STUDENT,
  studentInfo
});

export const updateStudent = (updatedInfo) => ({
  type: UPDATE_STUDENT,
  updatedInfo
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

export const removeOneStudent = (studentId) =>
{
  return dispatch => {
    dispatch(removeStudent(studentId));
    axios.delete(`/api/student/${studentId}`)
    .catch(err => console.error(`Oops. Unable to remove student with id: ${studentId}`, err));
  };
};

export const addAStudent = (studentInfo) =>
{
  return dispatch => {
    axios.post('/api/students', studentInfo)
    .then(res => res.data)
    .then(student => dispatch(addStudent(student)))
    .catch(err => console.error('there was a problem adding a student', err));
  };
};

export const updateOneStudent = (studentInfo) =>
{
  return dispatch => {
    axios.put(`/api/student/${studentInfo.id}`, studentInfo)
    .then(res => res.data)
    .then(student => dispatch(updateStudent(student)))
    .catch(err => console.error('there was a problem updating the student info', err));
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

    case REMOVE_STUDENT:
      newState.students = newState.students.filter(student => student.id !== Number(action.student));
      break;

    case SET_STUDENT:
      newState.students = newState.students.concat(action.studentInfo);
      break;

    case UPDATE_STUDENT:
      newState.student = action.updatedInfo;
      newState.campus = action.updatedInfo.campus;
      break;

    default:
      return state;
  }

  return newState;
}
