import React from 'react';

export default class SingleCampus extends React.Component {
  componentDidMount() {
  {/*this.props.loadSingleCampus(this.props.params.id);*/}
  }

  render() {
    return (
      <div>
        {this.props.campusName} Campus
      </div>
    );
  }
}
