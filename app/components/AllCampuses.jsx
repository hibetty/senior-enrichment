import React from 'react';

export default class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    console.log('the props.campuses!!!', this.props.campuses);
    return (
      <div>
        {
          this.props.campuses.map(campus => {
            return (
            <div className="campusCard" key={campus.id}>
              <h4>{campus.name}</h4>
              <img src={campus.image} />
            </div>);
          })
        }
      </div>
    );
  }
}
