import React from 'react';
import { browserHistory } from 'react-router';

export default class SingleCampus extends React.Component {
  componentDidMount() {
  this.props.loadSingleCampus(this.props.params.id);
  this.removeCampusCallback = this.removeCampusCallback.bind(this);
  this.onUpdateCampusSubmit = this.onUpdateCampusSubmit.bind(this);
  }

  removeCampusCallback(event){
    const removeCampus = this.props.removeCampus;
    event.stopPropagation();
    removeCampus(this.props.campuses.campusId);
    browserHistory.push('/campuses');
  }

  onUpdateCampusSubmit(event) {
    event.preventDefault();
    let updatedCampusInfo = {
      id: this.props.params.id,
      name: event.target.name.value,
      image: event.target.image.value
    };
    this.props.updateCampus(updatedCampusInfo);
  }

  render() {
    return (
      <div>
        <h1>{this.props.campuses.campusName} Campus</h1>
        <h3>Students:</h3>
        <table className="table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.campuses.campusStudents.map(student => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            );
          })
        }
        </tbody>
        </table>
        <hr />
        <h3>Update Campus Information:</h3>
        <div className="row col-lg-4">
          <form action={`/api/campus/${this.props.campuses.id}`} method="put" onSubmit={this.onUpdateCampusSubmit}>
            <label htmlFor="name" className="mr-sm-2">Campus Name:</label>
            <div className="form-group">
              <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" id="name" />
            </div>
            <label htmlFor="image" className="mr-sm-2">Image URL:</label>
            <div className="form-group">
              <input className="form-control" type="text" id="image" />
            </div>
            <button className="btn btn-default" type="submit">Update</button>
          </form>
        </div>
        <div className="row col-lg-12">
        <hr />
        <button className="btn btn-default" name="deleteCampus" onClick={this.removeCampusCallback}>Delete Campus</button>
        </div>
      </div>
    );
  }
}
