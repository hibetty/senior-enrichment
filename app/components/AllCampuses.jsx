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
        <div className="row">
          {
            this.props.campuses.campuses.map(campus => {
              return (
              <Link to={`/campus/${campus.id}`} key={campus.id}>
              <div className="col-md-3">
                <div className="thumbnail">
                  <img src={campus.image} />
                  <div className="caption">
                  <h4>{campus.name}</h4>
                  </div>
                </div>
              </div>
              </Link>);
            })
          }
        </div>
        <Link to="/campuses/add" className="btn btn-default">Add Campus +</Link>
      </div>
    );
  }
}
