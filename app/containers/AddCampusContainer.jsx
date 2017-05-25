import React from 'react';
import { connect } from 'react-redux';

import AddCampus from '../components/AddCampus';
import { addACampus } from '../reducers/campuses';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  addNewCampus: (campusInfo) => {
    dispatch(addACampus(campusInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
