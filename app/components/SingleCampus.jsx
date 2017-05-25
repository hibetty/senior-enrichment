import React from 'react';

export default class SingleCampus extends React.Component {
  componentDidMount() {
  this.props.loadSingleCampus(this.props.params.id);
  }

  render() {
    console.log('PROPS FOR SINGLE CAMPUS', this.props);
    return (
      <div>
        <h1>{this.props.campuses.campusName} Campus</h1>
        <h3>Students:</h3>
        <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
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
        </table>
      </div>
    );
  }
}
