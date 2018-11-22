import React from "react";
import { View, Platform } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


const CustomHeader = props => {
  console.log(props);
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
      <Container>
        <Header>
          <Left>
            <Button>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
          <Title>{props.title}</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    </View>
  );
};

export default CustomHeader;
