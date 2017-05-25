import React from 'react';
import { Link } from 'react-router';

export default class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    console.log("this.props ******", this.props)
    console.log('the props.campuses!!!', this.props.campuses);
    return (
      <div>
      <h1>All Interplanetary Campuses</h1>
        {
          this.props.campuses.campuses.map(campus => {
            return (
            <Link to={`/campus/${campus.id}`} key={campus.id}>
            <div className="campusCard">
              <h4>{campus.name}</h4>
              <img src={campus.image} />
            </div>
            </Link>);
          })
        }
      </div>
    );
  }
}
