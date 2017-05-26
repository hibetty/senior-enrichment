import React from 'react';

export default class SingleStudent extends React.Component {
  componentDidMount() {
  this.props.loadSingleStudent(this.props.params.id);
  this.props.loadCampuses();
  this.onUpdateStudentSubmit = this.onUpdateStudentSubmit.bind(this);
  }

  onUpdateStudentSubmit(event){
    event.preventDefault();
    let updatedStudentInfo = {
      id: this.props.params.id,
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: event.target.campusSelect.value
    };
    this.props.updateStudent(updatedStudentInfo);
  }

  render() {
    return (
      <div>
        <h1>{this.props.students.student.name}</h1>
        <h4>{this.props.students.student.email}</h4>
        <h3>Attending: {this.props.students.campus.name}</h3>
        <hr />
        <h3>Update Student Information:</h3>
        <div className="row col-lg-4">
          <form action={`/api/student/${this.props.students.student.id}`} method="put" onSubmit={this.onUpdateStudentSubmit}>
            <label htmlFor="name" className="mr-sm-2">Student Name:</label>
            <div className="form-group">
              <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" id="name" />
            </div>
            <label htmlFor="email" className="mr-sm-2">Student Email:</label>
            <div className="form-group">
              <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" id="email" />
            </div>
            <label htmlFor="campusSelect" className="mr-sm-2">Campus:</label>
            <div className="form-group">
              <select id="campusSelect" className="form-control">
              {
                this.props.campuses.campuses.map(campus => {
                  return <option key={campus.id} value={campus.id}>{campus.name}</option>;
                })
              }

              </select>
            </div>
            <button className="btn btn-default" type="submit">Update</button>
          </form>
        </div>
      </div>
    );
  }
}
