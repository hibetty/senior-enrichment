import React from 'react';
import { connect } from 'react-redux';
import { getAllStudents } from '../reducers/students';

import AllStudents from '../components/AllStudents';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadStudents: () => {
    dispatch(getAllStudents());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
