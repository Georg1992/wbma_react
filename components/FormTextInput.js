import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'react-native-elements';

const FormTextInput = ({...otherProps}) => {
  return <Input {...otherProps} />;
};

FormTextInput.propTypes = {
  style: PropTypes.object,
};

export default FormTextInput;
