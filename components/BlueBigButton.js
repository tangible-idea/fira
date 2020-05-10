import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../constants/Layout";
import Mixins from "../constants/Mixins";

const Container = styled.View`
  background-color: #5170ed;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 55;
  
`;

const LightText = styled.Text`
  color: #f3fbff;
  fontFamily: 'AvenirNext-DemiBold';
  fontSize: 16;
`;

const BlueBigButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <LightText>{text}</LightText>
    </Container>
  </TouchableOpacity>
);

BlueBigButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default BlueBigButton;
