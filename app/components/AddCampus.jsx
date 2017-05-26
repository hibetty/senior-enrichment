import React from 'react';
import { browserHistory } from 'react-router';

export default class AddCampus extends React.Component {
  onCampusSubmit(event){
    event.preventDefault();
    let campusInfo = {
      name: event.target.name.value,
      image: event.target.imageURL.value
    };
    this.props.addCampus(campusInfo);
    browserHistory.push('/campuses');
  }

  render(){
    this.onCampusSubmit = this.onCampusSubmit.bind(this);
    return (
      <div>
      <h1>Add a Campus</h1>
        <div className="row col-lg-4">
          <form action={`/api/students`} method="post" onSubmit={this.onCampusSubmit}>
          <div className="form-group">
            <label htmlFor="name">Campus Name:</label>
            <input className="form-control" type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="imageURL">Image URL:</label>
            <input className="form-control" type="text" id="imageURL" />
          </div>
            <button className="btn btn-default" type="submit">Add New Campus</button>
          </form>
        </div>
      </div>
    );
  }
}
