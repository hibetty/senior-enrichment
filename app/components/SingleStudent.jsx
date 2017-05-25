import React from 'react';

export default class SingleStudent extends React.Component {
  componentDidMount() {
  this.props.loadSingleStudent(this.props.params.id);
  this.props.loadCampuses();
  }

  render() {
    console.log('PROPS FOR SINGLE STUDENT', this.props);
    return (
      <div>
        <h1>{this.props.students.student.name}</h1>
        <h3>{this.props.students.student.email}</h3>
        <h3>Attending: {this.props.students.campus.name}</h3>
        <hr />
        <h3>Update Student Information:</h3>
        <form action={`/api/student/${this.props.students.student.id}`} method="put">
          <label htmlFor="name">Student Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Student Email:</label>
          <input type="text" id="email" />
          <label htmlFor="campusSelect">Campus:</label>
          <select id="campusSelect">
          {
            this.props.campuses.campuses.map(campus => {
              return <option key={campus.id}>{campus.name}</option>;
            })
          }

          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
