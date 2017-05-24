import React from 'react';
import { connect } from 'react-redux';
import { getAllCampuses } from '../reducers/campuses';

import AllCampuses from '../components/AllCampuses';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadCampuses: () => {
    dispatch(getAllCampuses());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
