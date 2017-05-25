import React from 'react';
import { connect } from 'react-redux';
import { getAllStudents, removeOneStudent } from '../reducers/students';

import AllStudents from '../components/AllStudents';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadStudents: () => {
    dispatch(getAllStudents());
  },
  removeStudent: (studentId) => {
    dispatch(removeOneStudent(studentId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
