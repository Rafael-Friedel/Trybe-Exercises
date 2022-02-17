import React from 'react';
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render(){

    const {data:{ name, type, averageWeight, image } } = this.props;
    return (
      <li>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso: {averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt={name}/>
      </li> 
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
}

export default Pokemon;