import React from 'react';
import { Link } from 'react-router';

export default class AllStudents extends React.Component {
  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    console.log("this.props ******", this.props)
    return (
      <div>
      <h1>All Interplanetary Students</h1>
      <table>
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
                <button name="delete">Delete</button>
              </td>
            </tr>);
          })
        }
        </tbody>
        </table>
      </div>
    );
  }
}
