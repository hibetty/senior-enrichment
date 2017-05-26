import React from 'react';
import { browserHistory } from 'react-router';

export default class SingleCampus extends React.Component {
  componentDidMount() {
  this.props.loadSingleCampus(this.props.params.id);
  this.removeCampusCallback = this.removeCampusCallback.bind(this);
  }

  removeCampusCallback(event){
    const removeCampus = this.props.removeCampus;
    event.stopPropagation();
    removeCampus(this.props.campuses.campusId);
    browserHistory.push('/campuses');
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
        <form action={`/api/campus/${this.props.campuses.id}`} method="put">
          <label htmlFor="name">Campus Name:</label>
          <input type="text" id="name" />
          <label htmlFor="imageURL">Image URL:</label>
          <input type="text" id="imageURL" />
          <button className="btn btn-default" type="submit">Update</button>
        </form>
        <hr />
        <button className="btn btn-default" name="deleteCampus" onClick={this.removeCampusCallback}>Delete Campus</button>
      </div>
    );
  }
}
