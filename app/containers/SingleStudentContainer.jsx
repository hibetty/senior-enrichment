import React from 'react';
import { connect } from 'react-redux';

import { getOneStudentData } from '../reducers/students';
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
