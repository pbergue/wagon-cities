import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>You have to choose a city</p>
      </div>
    );
  }
  const style = {
    width: "100%"
  };
  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <h5>{props.activeCity.address}</h5>
      <img alt="city-picture" src={`https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`} style={style}></img>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps)(ActiveCity);
