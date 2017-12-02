import React from 'react';
import PropTypes from 'prop-types';
import InputBox from 'react-toolbox/lib/input';

const Input = ({ input, meta: { touched, error }, ...props }) => (
  <InputBox
    {...input}
    {...props}
    error={touched && error}
  />
);

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    asyncValidating: PropTypes.bool,
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  label: PropTypes.node,
  type: PropTypes.string,
};

export default Input;
