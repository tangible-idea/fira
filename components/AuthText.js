import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Text = styled.Text`
  color: #7b7b7b;
`;

const LinkText = styled.Text`
  color: #7b7b7b;
  font-weight: 600;
`;

const AuthText = ({ text, link, screenName, navigation }) => (
  <Container>
    <Text>{text}</Text>
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <LinkText>{link}</LinkText>
    </TouchableOpacity>
  </Container>
);

AuthText.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withNavigation(AuthText);
