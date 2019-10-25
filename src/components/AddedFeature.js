import React from 'react';
import {removeItem as remove} from '../actions'
import {connect} from 'react-redux'

const AddedFeature = props => {
  const handleChange = e => {
    e.preventDefault()
    props.remove(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleChange}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {
  remove
}

const mapStateToProps=(state)=> {
  return{
    car: state.car,
    additonalFeatures: state.additonalFeatures,
    additonalPrice: state.additonalPrice
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddedFeature);