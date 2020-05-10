import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Mixins from "../constants/Mixins";
import Layout from "../constants/Layout";


const Input = styled.TextInput`
  padding: 15px 20px;
  width: 100%;
  color: #000;
  margin-bottom: 20px;
`;

const AuthInput = ({
  placeholder,
  password = false,
  value,
  keyboardType = "default",
  onChange,
  name
}) => (
  <Input
    onChangeText={text => onChange(text, name)}
    placeholder={placeholder}
    value={value}
    keyboardType={keyboardType}
    secureTextEntry={password}
    placeholderTextColor="#7b7b7b"
    underlineColorAndroid="transparent"
  />
);

AuthInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  password: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default AuthInput;
