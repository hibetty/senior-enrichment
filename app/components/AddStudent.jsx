import React from 'react';
import { browserHistory } from 'react-router';

export default class AddStudent extends React.Component {
  componentDidMount() {
    this.props.loadCampuses();
    this.onAddStudentSubmit = this.onAddStudentSubmit.bind(this);
  }

  onAddStudentSubmit(event){
    event.preventDefault();
    let studentInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: Number(event.target.campusSelect.value.slice(-1))
    };
    this.props.addStudent(studentInfo);
    browserHistory.push('/students');
  }

  render(){
    return (
      <div>
      <h1>Add a Student</h1>
        <form action={`/api/students`} method="post" onSubmit={this.onAddStudentSubmit}>
          <label htmlFor="name">Student Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
          <label htmlFor="campusSelect">Campus: </label>
          <select id="campusSelect">
          {
            this.props.campuses.campuses.map(campus => {
              return <option key={campus.id}>{campus.name} - {campus.id}</option>;
            })
          }

          </select>
          <button type="submit">Add New Student</button>
        </form>
      </div>
    );
  }
}
