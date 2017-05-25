import React from 'react';
import { connect } from 'react-redux';

import { getOneCampusData, removeOneCampus } from '../reducers/campuses';

import SingleCampus from '../components/SingleCampus';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadSingleCampus: (campusId) => {
    dispatch(getOneCampusData(campusId));
  },
  removeCampus: (campusId) => {
    dispatch(removeOneCampus(campusId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
