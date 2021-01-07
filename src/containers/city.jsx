import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  render() {
    return (
      <li className="list-group-item" onClick={() => {this.props.setActiveCity(this.props.city)}} >
        {this.props.city.name}
      </li>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setActiveCity: setActiveCity
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
