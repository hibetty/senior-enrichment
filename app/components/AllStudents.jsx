import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class AllStudents extends React.Component {
  componentDidMount() {
    this.props.loadStudents();
    this.removeStudentCallback = this.removeStudentCallback.bind(this);
  }

  removeStudentCallback(event){
    console.log('THE EVENT', event.target.id);
    const removeStudent = this.props.removeStudent;
    event.stopPropagation();
    removeStudent(event.target.id);
  }

  render() {
    console.log("this.props ******", this.props)
    return (
      <div>
      <h1>All Interplanetary Students</h1>
      <table className="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
        {
          this.props.students.students.map(student => {
            return (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>
                <Link to={`/student/${student.id}`}>
                  {student.name}
                </Link>
              </td>
              <td>{student.email}</td>
              <td>
                <button className="btn btn-default" name="delete" id={student.id} onClick={this.removeStudentCallback}>X</button>
              </td>
            </tr>);
          })
        }
        </tbody>
        </table>
      <hr />
      <Link to="/students/add" className="btn btn-default">Add Student +</Link>
      </div>
    );
  }
}
