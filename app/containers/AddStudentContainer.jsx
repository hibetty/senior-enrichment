import React from 'react';
import { connect } from 'react-redux';

import AddStudent from '../components/AddStudent';
import { getAllCampuses } from '../reducers/campuses';
import { addAStudent } from '../reducers/students';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  loadCampuses: () => {
    dispatch(getAllCampuses());
  },
  addStudent: (studentInfo) => {
    dispatch(addAStudent(studentInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
