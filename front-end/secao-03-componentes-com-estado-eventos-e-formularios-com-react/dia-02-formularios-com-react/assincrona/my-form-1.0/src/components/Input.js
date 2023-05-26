import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, type, fHandler } = this.props;

    return (
      <input name={name} type={type} onChange={fHandler} />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fHandler: PropTypes.func.isRequired,
}

export default Input;
