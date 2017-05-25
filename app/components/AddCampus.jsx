import React from 'react';
import { browserHistory } from 'react-router';

export default class AddCampus extends React.Component {
  componentDidMount() {
    console.log('hello');
    this.onAddCampusSubmit = this.onAddCampusSubmit.bind(this);
  }

  onAddCampusSubmit(event){
    event.preventDefault();
    let campusInfo = {
      name: event.target.name.value,
      image: event.target.imageURL.value
    };
    this.props.addNewCampus(campusInfo);
    browserHistory.push('/campuses');
  }

  render(){
    console.log('THE ADD CAMPUS PROPS', this.props);
    return (
      <div>
      <h1>Add a Campus</h1>
        <div className="row col-lg-4">
          <form action={`/api/campuses`} method="post" onSubmit={this.onAddCampusSubmit}>
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
