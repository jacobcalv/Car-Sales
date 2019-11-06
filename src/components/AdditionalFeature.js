import React from 'react';
import {addItem as add, removeItem as remove} from '../actions'
import {connect} from 'react-redux'

const AdditionalFeature = props => {

  const handleChange = e => {
    e.preventDefault()
    props.add(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleChange}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  add, remove
}
const mapStateToProps = (state) => {
  return {
    car: state.car, 
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AdditionalFeature);
