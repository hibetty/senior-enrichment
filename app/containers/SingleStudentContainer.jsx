import React from 'react';
import { connect } from 'react-redux';

import { getOneStudentData, updateOneStudent } from '../reducers/students';
import { getAllCampuses } from '../reducers/campuses';

import SingleStudent from '../components/SingleStudent';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadSingleStudent: (studentId) => {
    dispatch(getOneStudentData(studentId));
  },
  loadCampuses: () => {
    dispatch(getAllCampuses());
  },
  updateStudent: (studentInfo) => {
    dispatch(updateOneStudent(studentInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
